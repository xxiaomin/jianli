<template>
  <div class="skil-container">
    <div class="yuan">
      <div class="yuanbox"></div>
    </div>
    <div class="left">
      <span>
        <router-link to="/master/javascript">JavaScript</router-link>
      </span>
    </div>
    <div class="middle">
      <div class="box"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JavaScript'
}
</script>

<style lang="less" scoped>
.skil-container {
  display: flex;
  width: 100%;
  background-color: #fff;
  .skil-container:hover {
    // border-radius: 150px;
    transform: scale(0.7);
  }
  .yuan {
    display: flex;
    flex: 2;
    // background-color: palegoldenrod;
    .yuanbox {
      width: 100%;
      height: 100%;
      border-left: 0.1rem solid #154864;
      // background-color: #154864;
      background-color: whitesmoke;
      // border-radius: 2rem 0 0 2rem;
    }
  }
  .left {
    display: flex;
    flex: 6;
    // background-color: #154864;
    background-color: whitesmoke;
    span {
      display: inline-block;
      height: 100%;
    }
    span:nth-child(1) {
      display: flex;
      // flex: 5;
      // font-size: 0.5rem;
      font-weight: bolder;
      color: #000;
      justify-content: center;
      align-items: center;
    }
    span:nth-child(1):hover {
      font-size: 0.1rem;
    }
  }

  .middle {
    background-color: #fff;
    display: flex;
    flex: 5;
    .box {
      /* border-top: 200px solid transparent; */
      /* 改变底部，对半，左右边长短 */
      border-right: 0.8rem solid transparent;
      border-left: 0rem solid transparent;
      /* 改变里面垂直高度 */
      // border-bottom: 80px solid #154864;
      border-bottom: 0.8rem solid whitesmoke;
    }
  }
}
</style>
