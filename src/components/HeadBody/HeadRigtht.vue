<template>
  <div class="right-container">
    <!-- 头部 -->
    <div
      class="tou"
      id="tou"
      @mouseover="touSenter"
      @mouseout="touOut($event)"
      @touchend="touSenter"
      @touchstart="touOut($event)"
    >
      <span class="name">郑&nbsp;晓&nbsp;敏</span><span>|</span
      ><span>前端开发实习生</span>
    </div>
    <!-- 中间 -->
    <div
      class="middle"
      v-for="(item, index) in userList"
      :key="index"
      id="middle"
      @mouseover="middleSenter"
      @mouseout="middleOut($event)"
      @touchend="middleSenter"
      @touchstart="middleOut($event)"
    >
      <div class="xiaoleft">
        <div class="lileft">学历：{{ item.education }}</div>
        <div class="lileft">出生：{{ item.born }}</div>
        <div class="lileft">籍贯：{{ item.jiguan }}</div>
      </div>
      <div class="xiaoright">
        <div class="liright">政治面貌: {{ item.status }}</div>
        <div class="liright">手机: {{ item.moble }}</div>
        <div class="liright">邮:{{ item.email }}</div>
      </div>
    </div>
    <!-- 底部 -->
    <div
      class="foot"
      id="foot"
      @mouseover="footSenter($event)"
      @mouseout="footOut($event)"
      @touchend="footSenter($event)"
      @touchstart="footOut($event)"
    >
      <dl>
        <dt>个人荣誉：</dt>
        <dd>·学院综合素质奖学金'三等奖'</dd>
        <dd>·国家励志奖学金</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadRight',
  data() {
    return {
      userList: [
        {
          age: '23',
          education: '大专',
          born: '2000.09',
          moble: 15811666368,
          jiguan: '广东汕尾 ',
          major: '云计算技术与应用',
          status: '共青团员',
          email: '1218220280@qq.com'
        }
      ]
    }
  },
  methods: {
    // 头部事件
    touSenter() {
      document.getElementById('tou').classList.add('fangDa')
    },
    touOut: (e) => {
      document.getElementById('tou').classList.remove('fangDa')
    },
    middleSenter() {
      document.getElementById('middle').classList.add('fangDa')
    },
    middleOut: (e) => {
      document.getElementById('middle').classList.remove('fangDa')
    },
    footSenter: (e) => {
      document.getElementById('foot').classList.add('fangDa')
      // e.target.style.marginBottom = '3px'
    },
    footOut: (e) => {
      document.getElementById('foot').classList.remove('fangDa')
      // e.target.style.marginBottom = '0px'
    }
  }
}
</script>

<style lang="less" scoped>
// 外壳
.right-container {
  display: flex;
  flex-direction: column;
  flex: 3.1;
  background-color: #fff;
  height: 100%;

  // 头部
  .tou {
    width: 100%;
    background-color: #fff;
    span {
      padding-left: 0.3333rem;
      font-size: 0.2733rem;
      color: #154864;
      font-weight: bold;
    }
    .name {
      // padding-left: 0.1333rem;
      font-weight: bold;
      font-size: 0.4333rem;
      padding-right: 0.3rem;
      color: #154864;
    }
  }
  // 中间
  .middle {
    display: flex;
    // flex-direction: column;
    padding-top: 0.0333rem;
    padding-left: 0.3333rem;
    width: 100%;
    height: 100%;
    .xiaoleft {
      // padding-top: 0.3rem;
      flex-direction: column;
      font-size: 0.004rem;
      font-weight: bold;
      width: 100%;
      display: flex;
      flex: 1.3;
      // background-color: red;
    }
    .xiaoright {
      flex-direction: column;
      // padding-left: 0.5rem;
      width: 100%;
      // font-size: 0.0rem;
      font-weight: bold;
      display: flex;
      flex: 1.5;
      // background-color: green;
    }
  }
  // 底部
  .foot {
    padding-left: 0.1rem;
    padding-top: 0.005rem;
    position: relative;
    font-weight: bolder;
    font-size: 0.35rem;
    color: #154864;
    dd {
      padding-left: 1.85rem;
    }
  }
}

// 事件样式
.fangDa {
  border-bottom: 0.02px solid #000;
  transform: scale(1.06);
  z-index: 1;
  margin-bottom: 0.08rem;
}
</style>
