<!--
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2022-12-02 14:45:03
 * @LastEditors: fengshuai
 * @LastEditTime: 2022-12-02 15:52:13
-->
<template>
  <el-container>
    <el-main>
      <div class="header">
        <el-input v-model="addInput" style="width: 30%" /> 
        <el-button @click="newAdd">新增</el-button>
      </div>
      <div class="contentBox">
        <testCom :list="listArr" @deleteOne="deleteOne"/>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import testCom from './testCom.vue'
export default {
  name: 'TEST',
  components: {
    testCom
  },
  data() {
    return {
      addInput: '',
      listArr: []
    }
  },
  methods: {
    newAdd() {
      const inputValue = this.addInput.trim()
      if (inputValue == '') {
        alert('输入内容不能为空')
      } else {
        this.listArr.push({
          name: inputValue,
          flag: true
        })
        this.addInput = ''
        console.log(this.listArr, 'arr')
      }
    },
    deleteOne(index) {
      console.log('eee')
      this.listArr = this.listArr.filter((el, ind) => {
        if (index == ind) {
          return false
        } else {
          return true
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
}
.header {
  border: 1px solid black;
  padding: 20px;
}
.contentBox {
  overflow: hidden;
}
</style>
