import moment from 'moment';


const _time = (date, format = "YYYY-MM-DD HH:mm:ss") => {
  return moment(date).format(format);
}

export { _time }