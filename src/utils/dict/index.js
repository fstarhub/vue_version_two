import Vue from 'vue'
import axios from 'axios'

class Dict {
  constructor(dict) {
    this.dict = dict
  }

  async init(names) {
    const ps = []
    names.forEach(name => {
      Vue.set(this.dict, name, [])
      ps.push(
        axios({
          url: '/users/add',
          method: 'post',
          data: name
        })
        .then(data => {
          console.error(data);
          this.dict[name] = Object.freeze(data.content)
        })
      )
    })

    await Promise.all(ps)
  }
}

const install = function(Vue) {
  Vue.mixin({
    data() {
      if (this.$options.dicts instanceof Array && this.$options.dicts.length > 0) {
        return { dict: {} }
      } else {
        return {}
      }
    },
    created() {
      if (this.$options.dicts instanceof Array && this.$options.dicts.length > 0) {
        new Dict(this.dict).init(this.$options.dicts)
      }
    }
  })
}

export default {
  install
}