import http from '../utils/request'
export default class DictApi {
  static getOptions(param) {
    return http({
      url: '/api/users/getOptions',
      method: 'post',
      data: param
    })
  }
}