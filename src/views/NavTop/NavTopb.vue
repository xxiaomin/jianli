<template>
  <div class="navtopb-container">
    <div class="left">
      <span></span>
      <span></span>
      <span>技能掌握</span>
      <span></span>
    </div>
    <div class="middle">
      <div class="box"></div>
    </div>
    <div class="right">
      <p>页面没有使用插件样式</p>
      <!-- <button @click="goBtn">前进</button>
      <button @click="backBtn">后退</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavTopb'
  // methods: {
  //   goBtn() {
  //     this.$router.go(-1)
  //   },
  //   backBtn() {
  //     this.$router.go(+1)
  //   }
  // }
}
</script>

<style lang="less" scoped>
.navtopb-container {
  display: flex;
  width: 100%;
  // height: 100%;
  .left {
    display: flex;
    flex: 1.6;
    background-color: #154864;
    span {
      display: inline-block;
      height: 100%;
    }
    span:nth-child(1) {
      display: flex;
      flex: 0.4;
    }
    span:nth-child(2) {
      display: flex;
      flex: 0.6;
      // border-top: 0px solid transparent;
      border-left: 0rem solid transparent;
      border-right: 0.3rem solid transparent;
      border-bottom: 0.4rem solid #e6e6e6;
      // background-color: red;
    }
    span:nth-child(3) {
      display: flex;
      flex: 2;
      // font-size: 0.2rem;
      font-weight: bolder;
      color: #fff;
      padding-left: 0.18rem;
      // justify-content: center;
      align-items: center;
    }
  }
  .middle {
    display: flex;
    flex: 0.2;
    .box {
      border-right: 0.5rem solid transparent;
      border-left: 0px solid transparent;
      border-bottom: 0.55rem solid #154864;
    }
  }
  .right {
    display: flex;
    flex: 4;
    color: #154864;
    background-color: #e6e6e6;

    font-size: large;
    font-weight: bolder;

    button {
      display: flex;
      flex: 1.5;
      width: 5rem;
      justify-content: center;
      align-items: center;
      border-radius: 0.5rem;
      box-shadow: 0px 0.2rem 0.2rem gray;
      margin-left: 0.2rem;
      width: 2rem;
      height: 100%;
      font-size: 0.2rem;
      color: #154864;
      font-weight: bolder;
    }
    button:hover {
      background-color: #154864;
      cursor: pointer;
      color: #e6e6e6;
    }
  }
  p {
    // justify-content: right;
    display: flex;
    flex: 4;
    align-items: end;
    // background-color: pink;
    font-size: 0.1rem;
  }
  p:hover {
    cursor: pointer;
    color: red;
  }
  background-color: #e6e6e6;
}
</style>
