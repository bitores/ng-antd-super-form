import api from './index';


export default {
  queryList: params => {
    return api.get('/itemcenter/activity/admin/v1/queryActivityPage', { params })
  }
};