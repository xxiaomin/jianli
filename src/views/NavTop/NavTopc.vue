<template>
  <div class="navtopc-container">
    <div class="left">
      <span></span>
      <span></span>
      <span>校园经历</span>
      <span></span>
    </div>
    <div class="middle">
      <div class="box"></div>
    </div>
    <div class="right">
      切换栏
      <!-- <li></li>
      </ul> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavTopc'
  // data() {
  //   return {
  //     counter: 20
  //   }
  // },
  // mounted() {
  //   this.Time()
  // },
  // methods: {
  //   Time() {
  //     setInterval(() => {
  //       this.counter--
  //       if (this.counter === -1) {
  //         this.counter = 20
  //         clearInterval(this.timer)
  //       }
  //       this.counter = this.counter < 10 ? '0' + this.counter : this.counter
  //     }, 1000)
  //   }
  // }
}
</script>

<style lang="less" scoped>
.navtopc-container {
  display: flex;
  width: 100%;
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
    }
    span:nth-child(2) {
      border-radius: 1rem;
      display: flex;
      flex: 0.6;
      border: 0.05rem solid #e6e6e6;
      // background-color: #fff;
    }
    span:nth-child(3) {
      display: flex;
      flex: 2;
      font-size: 0.2rem;
      font-weight: bolder;
      color: #fff;
      padding-left: 0.18rem;
      align-items: center;
    }
  }
  .middle {
    display: flex;
    flex: 0.2;
    .box {
      border-right: 0.5rem solid transparent;
      border-left: 0rem solid transparent;
      border-bottom: 0.5rem solid #154864;
    }
  }
  .right {
    display: flex;
    flex: 3.8;
    color: #154864;
    background-color: #e6e6e6;
    align-items: end;
    font-weight: bolder;
    ul {
      height: 100%;
      display: inline-block;
      display: flex;
      flex: 2;
    }
    li {
      font-weight: bolder;
      display: flex;
      flex: 2;
      align-items: center;
      justify-content: center;
      transition: all 1s;
    }
    li:hover {
      transform: scale(1.2);
    }
  }
}
</style>
