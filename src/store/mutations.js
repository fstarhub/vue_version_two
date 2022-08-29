
import {GET_HEROS,} from './mutatin-types'
export default {
  [GET_HEROS] (state,heros) {
    state.herosData = heros.herosList
    state.age = heros.age,
    state.name = heros.name
    state.type = heros.type
  },
  'GET_FILEMESSAGE' (state, data) {
    console.log(state, data, 'ewooo')
    state.filmMessage.fileName = data.fileName
    state.filmMessage.age = data.age
    state.filmMessage.type = data.type
  }
}