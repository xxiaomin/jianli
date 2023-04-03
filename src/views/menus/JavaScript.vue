<template>
  <div class="javascript-container">
    <div class="dawai">
      <div class="shang">
        <ul v-for="item in dataList" :key="item.id">
          <li>{{ item.id }} : {{ item.neirong }}</li>
        </ul>
      </div>
      <div class="xia">
        <div class="yuan">@</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JavaScript',
  data() {
    return {
      dataList: [
        {
          id: '1',
          neirong: '熟悉JavaScript编写轮播图,tab切换栏,倒计时等行为'
        },
        {
          id: '2',
          neirong: '熟悉ES6语法及其新特性,能完成数据逻辑处理以及用户交互效果.'
        },
        {
          id: '3',
          neirong: '熟悉swiper插件应用。,布局和修改成需要的页面。'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.javascript-container {
  // background-color: green;
  width: 100%;
  height: 100%;
  .dawai {
    display: flex;
    flex-direction: column;
    // background-color: purple;
    width: 100%;
    height: 100%;
    .shang {
      display: flex;
      flex: 4.5;
      width: 100%;
      flex-direction: column;
      // background-color: pink;
      // border-bottom: 3px solid #000;
      ul {
        display: flex;
        flex: 1;
      }
      li {
        display: block;
        height: 100%;
        width: 100%;
        text-align: center;
        padding-top: 5%;
        align-items: center;
        font-weight: bolder;
        // font-size: 20px;
        color: #154864;
      }
      li:hover {
        transform: scale(1.1);
        font-size: 0.3rem;
        cursor: pointer;
        background-color: #154864;
        color: aliceblue;
      }
    }
    .xia {
      display: flex;

      flex: 1;
      width: 100%;
      // height: 100%;
      // background-color: gray;
      .yuan {
        // margin-left: 20px;
        // background-color: pink;
        width: 0.8rem;
        height: 100%;
        animation: yuan 5s 0.5s infinite alternate;
        transition: all 2s;
      }
      .yuan:hover {
        cursor: pointer;
        animation-play-state: paused;
      }
    }
  }
}

@keyframes yuan {
  to {
    border-radius: 50%;
    // border: 1px solid #000;
    box-shadow: 0px 0.1rem 0.3rem gray;
    transform: translate(5.8rem) rotate(360deg);
    // transform: translate(619px);
  }
}
</style>
