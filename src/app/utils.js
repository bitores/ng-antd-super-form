import moment from 'moment';


const _time = (date) => {
  return moment(date).format('YYYY-MM-DD HH:mm:ss');
}

export { _time }