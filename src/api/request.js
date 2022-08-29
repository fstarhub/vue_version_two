// 能发请求的函数（axios）

import axios from 'axios'
import qs from 'qs'

// 请求拦截
axios.interceptors.request.use(config=>{
  const {method, data}=config
  if(method.toUpperCase()==='post'&&data instanceof Object) {
    config.data=qs.stringify(data)
  }
  return config
})

// 响应拦截
axios.interceptors.response.use(response=>{
  return response.data
},error=>{
  console.log(error)
  // const{response,status,message}=error
  //中断promise链
  return new Promise(()=>{})
})

export default axios