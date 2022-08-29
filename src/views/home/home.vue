<template>
  <div class="indexContainer">
    <div class="indexBox">欢迎来到我的项目</div>
    <div class="mainContainer">
      <div @click="$router.push('/element')" class="left">
        <div class="inner leftInner">Element-ui</div>
      </div>
      <div @click="$router.push('/Dthree')" class="leftOne">
        <div class="inner leftInner">D3.js</div>
      </div>
      <div @click="$router.push('/Iview')" class="center">
        <div class="inner leftInner">Iview</div>
      </div>
      <div @click="$router.push('/echarts')" class="rightOne">
        <div class="inner rightInner">Echarts</div>
      </div>
      <div @click="$router.push('/vxeTable')" class="right">
        <div class="inner rightInner">vxe-table</div>
      </div>
    </div>
    <!-- <div class="test">
      <Test></Test>
    </div> -->
  </div>
  <!-- <div class="test">
    <Test></Test>
  </div> -->
  <!-- </div> -->
</template>

<script>
// import Test from './test'
export default {
  name: 'home',
  // components: {
  //   Test,
  // },
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.indexContainer {
  .indexBox {
    margin-top: 10px;
  }
  .mainContainer {
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    .left {
      width: 200px;
      height: 200px;
      color: springgreen;
      background: slateblue;
    }
    .leftOne {
      width: 200px;
      height: 200px;
      color: darkblue;
      background: lightblue;
    }
    .center {
      width: 200px;
      height: 200px;
      color: rgb(235, 37, 64);
      background: darksalmon;
    }
    .rightOne {
      width: 200px;
      height: 200px;
      color: rgb(235, 37, 64);
      background: darksalmon;
    }
    .right {
      width: 200px;
      height: 200px;
      color: rgb(59, 30, 226);
      background: rgb(42, 169, 207);
    }
    .inner {
      margin-top: 45%;
      font-size: 30px;
    }
  }
}
</style>
