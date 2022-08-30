import Vue from 'vue'
import DictApi from '@/api/dictApi'

class Dict {
  constructor(dict) {
    this.dict = dict
  }

  async init(names) {
    const ps = []
    names.forEach(name => {
      Vue.set(this.dict, name, [])
      ps.push(
        DictApi.getOptions({ typeId: name }).then(res => {
          // console.error(res);
          this.dict[name] = Object.freeze(res.data)
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
        // console.log(this.$options.dicts, 'dicts')
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