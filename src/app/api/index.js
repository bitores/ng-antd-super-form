import axios from 'axios';

let baseUrl = 'https://dailyapi.zmjx.com/';
// if (window.document.domain === 'admin.zhimajx.com') {
//   baseUrl = 'https://api.zhimajx.com/';
// } else if (window.document.domain === 'localhost') {
//   baseUrl = 'https://devapi.zhimajx.com/';
// } else if (window.document.domain === 'devh5.zhimajx.com') {
//   baseUrl = 'https://devapi.zhimajx.com/';
// } else if (window.document.domain === 'grayh5.zhimajx.com') {
//   baseUrl = 'https://grayapi.zhimajx.com/';
// } else if (window.document.domain === 'dailyh5.zhimajx.com') {
//   baseUrl = 'https://dailyapi.zhimajx.com/';
// }

const baseReq = create();

function create(url = baseUrl) {
  return axios.create({
    baseURL: url,
    timeout: 100000,
    withCredentials: true, // 允许跨域 cookie
    transformResponse: [
      function (data) {
        let json = {};
        try {
          json = JSON.parse(data);
        } catch (e) {
          json = {};
        }
        return json;
      },
    ],
  });
}

baseReq.account = create(`/`);

// Add a request interceptor
baseReq.interceptors.request.use(function (config) {
  config.headers = {
    'X-Requested-With': 'XMLHttpRequest',
    token: 'a7ebc20ca70dc1836194deb40cfa31bd',
    userId: '1',
    zmjx_client: 4,
  };
  return config;
},
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
baseReq.interceptors.response.use(
  function (response) {
    if (response.data.responseCode === 100001) {
      window.localStorage.removeItem('user');
      setTimeout(() => {
        window.location.href = '#/user/login';
      }, 500);
    }
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default baseReq;
