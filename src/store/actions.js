
import { reqHeros } from '../api' //reqHeros是一个Promise
import { GET_HEROS } from './mutatin-types'
export default {
  async getHeros ({commit}) {
    let heros  = await reqHeros.then(res => {
      // Heros = res.data
      console.log('erereresss', res.data)
      commit(GET_HEROS, res.data)
    }).catch()
  // const heros={
  //   name:'漫威',
  //   age:18,
  //   person:'美国队长',
  // }
  // console.log(muHeros, 'ooo')
  // commit(GET_HEROS,heros)
  console.log(heros)
  },

  // async getFileMessage ({commit}) {
  //   let fileMessage  = await reqFileMessage.then(res => {
  //     console.log(res.data, 'ewew')
  //     commit('GET_FILEMESSAGE', res.data)
  //   }).catch(error => {
  //     console.log(error)
  //     return
  //   })
  // },
}