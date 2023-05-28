<!--
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2022-12-02 15:02:12
 * @LastEditors: fengshuai
 * @LastEditTime: 2022-12-02 16:05:51
-->
<template>
  <div class="contentContainer">
    <div class="contentItem" v-for="(item, index) in listArr1" :key="index">
      <div class="itemC">
        <div>{{item}}</div>
        <div class="operate">
          <el-button @click="deleteItem(item, index)">删除</el-button>
          <el-button @click="edit(item, index)">修改</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'testCom',
  props: ['list'],
  data() {
    return {
      listArr1: []
    }
  },
  mounted() {
    this.listArr1 = this.list
  },
  updated() {
    console.log('update')
  },
  methods: {
    deleteItem(item, index) {
      this.$emit('deleteOne', item)
      this.listArr1 = this.listArr1.filter((el, ind) => {
        if (index == ind) {
          return false
        } else {
          return true
        }
      })
    },
    edit() {

    }
  }
}
</script>

<style lang="less" scoped>
.contentContainer {
  height: 100%;
}
.contentItem {
  margin-top: 20px;
}
.itemC {
  border: 1px solid black;
  padding: 10px;
  margin-top: 10px;
}
</style>
