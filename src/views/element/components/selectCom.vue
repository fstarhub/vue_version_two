<!--
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2022-08-29 23:22:47
 * @LastEditors: fengshuai
 * @LastEditTime: 2022-08-29 23:23:30
-->
<template>
  <el-container>
    <el-main>
      <el-row>
        <el-button round @click="getMock">mock后台数据</el-button>
        <el-button type="primary" round @click="getData">测试后台连接</el-button>
        <el-button type="info" round @click="testInterface('zhonglei')">测试接口参数1</el-button>
        <el-button type="warning" round @click="testInterface('dengji')">测试接口参数2</el-button>
        <el-button type="danger" round @click="testInterface('chengdu')">测试接口参数3</el-button>
        <el-button type="success" round @click="doDispatch">dispatch</el-button>
      </el-row>
      <!-- <p>年龄:{{ age }}</p>
      <p>名字:{{ name }}</p> --> 
      <el-row style="margin-top: 16px;">
        <el-form inline>
          <el-form-item label="食物种类：">
            <el-select v-model="shiwu" placeholder="请选择">
              <el-option
                v-for="item in dict.zhonglei"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="风险等级：">
            <el-select v-model="dengji" placeholder="请选择">
              <el-option
                v-for="item in dict.dengji"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="熟悉程度：">
            <el-select v-model="chengdu" placeholder="请选择">
              <el-option
                v-for="item in dict.chengdu"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import dictApi from '@/api/dictApi'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'selectCom',
  data() {
    return {
      shiwu: '',
      dengji: '',
      chengdu: '',
    }
  },
  dicts: ['zhonglei', 'dengji', 'chengdu'],
  aaaa: 'aaa',
  bbbb: 'bbb',
  computed: {
    // 获取state中的状态值，方法一 组件里面获取state中的状态值
    ...mapState({
      name: state => state.name,
      age: state => state.age,
    }),

  },
  mounted() {
    // this.$store.dispatch('getHeros')
    console.log(this.dict, 'dict')
  },
  methods: {
    getMock() {
      // this.$axios.get('/echart')
      //   .then((res) => { console.log(res) })
      //   .catch((err) => { console.log(err) })
    },
    async getData() {
      const result = await this.$axios.post('/api/users/test', {})
      console.log(result, 'result')
    },
    testInterface(typeId) {
      dictApi.getOptions({typeId}).then(res => {
        console.log(res, 'res')
      })
    },
    doDispatch() {
      // 分发actions，方法一  this.$store.dispatch('getHeros',{name: 23})增加载荷
      // this.$store.dispatch('getHeros')
      // 以对象形式分发
      // this.$store.dispatch({
      //   type: 'getHeros',
      //   amount: 10
      // })
      // 分发actions，方法二 
      // ...mapActions(['getHeros', 'getMes1', 'getMsg2'])
      // 分发actions，方法三 
      // ...mapActions({
      //     add:'getHeros'
      //     })
    }

    // 获取state中的状态值，方法一 组件里面获取state中的状态值
    // ...mapState({
    //     name:state=>state.name,
    //     age:state=>state.age,
    // 获取state中的状态值，方法二 组件里面获取state中的状态值
    // manwei() {
    //     return this.$store.state.name
    // }

    // 提交mutation的方法，方法一 组件里面提交mutation的方法
    // ...mapMutations(['GETHROS'], 123) // 增加载荷
    // 提交mutation的方法，方法二 组件里面提交mutation的方法
    // ...mapMutations({
    //     add: 'GETHROS'
    // })
    // 提交mutation的方法，方法三 this.$store.commit('GETHROS'，123)增加载荷
    // 对象提交方式
    // this.$store.commit({
    //   type: 'increment',
    //   amount: 10
    // })
  }
}
</script>

<style lang="less" scoped>

</style>
