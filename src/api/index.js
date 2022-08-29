// 接口请求模块
// 接口使用的是easy-mack,账号：fengshuai,fengshuai
import axios from './request'
const BASE = 'https://mock.mengxuegu.com/mock/6035fa1eca363222f3d579e6/example'

export const reqHeros = axios ({
  method: 'get',
  url: BASE+'/getHeros'
})
export const reqFileMessage = axios ({
  method: 'post',
  url: BASE+'/filmMessage'
})
// export default{reqHeros, reqFileMessage}