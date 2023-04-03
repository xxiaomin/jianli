<template>
  <div class="navtopd-container">
    <div class="left">
      <span></span>
      <span></span>
      <span>项目经历</span>
      <span></span>
    </div>
    <div class="middle">
      <div class="box"></div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: 'NavTopd'
}
</script>

<style lang="less" scoped>
.navtopd-container {
  display: flex;
  width: 100%;
  background-color: #e6e6e6;
  // background-color: paleturquoise;
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
      justify-content: center;
      align-items: center;
      // background-color: #fff;
    }
    span:nth-child(2) {
      display: flex;
      flex: 0.6;
      border-radius: 1rem;
      background-color: #e6e6e6;
      // background: url('@/assets/sprites.png') -0.2rem -0.15rem;
    }
    span:nth-child(3) {
      display: flex;
      flex: 2;
      font-size: 0.2rem;
      font-weight: bolder;
      color: #fff;
      padding-left: 0.18rem;
      // justify-content: center;
      align-items: center;
    }
  }
  // background-color: paleturquoise;
  .middle {
    display: flex;
    flex: 0.2;
    .box {
      /* border-top: 200px solid transparent; */
      /* 改变底部，对半，左右边长短 */
      border-right: 0.55rem solid transparent;
      border-left: 0rem solid transparent;
      /* 改变里面垂直高度 */
      border-bottom: 0.55rem solid #154864;
      // background-color: #e6e6e6;
    }
  }

  .right {
    display: flex;
    flex: 3.7;
  }
}
</style>
