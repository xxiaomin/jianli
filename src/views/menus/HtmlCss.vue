<template>
  <div class="htmlcss-container">
    <div class="dawai">
      <div class="shang">
        <!-- <button class="btn" id="btn" autofocus="autofocus">后退</button> -->
        <span class="yuanzui"></span>
        <span class="yuanzui"></span>
        <span class="yuanzui"></span>
        <!-- <span class="yuanzui"></span>
        <span class="yuanzui"></span>
        <span class="yuanzui"></span> -->
      </div>
      <div class="xia">
        <ul v-for="item in dataList" :key="item.id">
          <li>{{ item.id }} : {{ item.neirong }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HtmlCss',
  data() {
    return {
      dataList: [
        {
          id: '1',
          neirong: '熟练Flex弹性布局独立完成各类常见网页搭建。'
        },
        {
          id: '2',
          neirong: '熟悉HTML5+CSS3的新特性,了解移动适配和响应式'
        },
        {
          id: '3',
          neirong: '熟练使用bootstrap插件,布局和修改成需要的页面。'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.htmlcss-container {
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
      flex: 0.8;
      width: 100%;
      // border-bottom: 3px solid #000;
      .yuanzui {
        animation: zou 2s 1s infinite alternate;
        transition: all 1.5s;
        border-top: 1rem solid black;
        border-left: 1rem solid transparent;
        border-right: 1rem solid transparent;
        border-bottom: 0rem solid #154864;
        opacity: 0.2;
        // background-image: linear-gradient(transparent,);
        // font-size: 1rem;
        // font-weight: bolder;
      }
      .yuanzui:hover {
        cursor: pointer;
      }
      @keyframes zou {
        to {
          transform: rotateY(360deg);
        }
      }
    }
    .xia {
      display: flex;
      flex-direction: column;
      flex: 4.5;
      width: 100%;
      // background-color: gray;
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
        // font-size: 0.3rem;
        color: #154864;
      }
      li:hover {
        cursor: pointer;
        background-color: #154864;
        color: aliceblue;
      }
    }
  }
}
</style>
