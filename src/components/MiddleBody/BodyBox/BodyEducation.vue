<template>
  <div class="education-container">
    <div class="dawai">
      <div class="top">
        <NavTopa></NavTopa>
      </div>
      <div class="body">
        <div class="left">
          <div class="leftnei">
            <img src="@/assets/logo1.png" alt="" />
            <h3>主修课程:</h3>
          </div>
        </div>
        <div class="right" v-for="(item, index) in eduList" :key="index">
          <ul>
            <li>{{ item.school }}</li>
            <li>{{ item.skil }}</li>
            <li>{{ item.code }}</li>
          </ul>
          <div class="san"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTopa from '@/views/NavTop/NavTopa.vue'
export default {
  name: 'BodyEducation',
  data() {
    return {
      eduList: [
        {
          school: '珠海城市职业技术学院',
          skil: '云计算技术与应用',
          code: '网页设计,HTML5+CSS3+JavaScript+Vue编程与框架,计算机网络，网络运维，数据库等'
        }
      ]
    }
  },
  components: {
    NavTopa
  }
}
</script>

<style lang="less" scoped>
.education-container {
  position: relative;
  display: flex;
  flex: 2;
  // background-color: #fff;
  // background-color: pink;
  .dawai:hover {
    transform: scale(1.1);
    border-radius: 0 0 1rem 1rem;
    box-shadow: 0px 0.26rem 0.6rem gray;
    text-shadow: 0px 0px 0.1rem gray;
    color: #fff;
  }
}
.dawai {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fff;
  img {
    padding-top: 0.15rem;
    padding-left: 0.1rem;
    width: 1.5rem;
    // height: 1rem;
  }
  h3 {
    // margin-top: 0.373rem;
    margin-left: 0.13rem;
  }
  .top {
    display: flex;
    flex: 0.5;
    width: 100%;
    // background-color: #e6e6e6;
  }
  .body {
    display: flex;
    flex: 5.5;
    .right {
      // background-color: green;
      display: flex;
      flex: 7;
      height: 100%;
      // background-color: green;
      li {
        // display: flex;
        // flex: 1;
        color: #154864;
        font-weight: bold;
        font-size: 0.35rem;
        float: left;
        padding: 0.58rem 0.15rem 0rem 0.2rem;
      }

      li:nth-child(3) {
        display: flex;
        flex: 1;
        color: #154864;
        // padding: 1rem 0.4rem 0rem 0.4rem;
        font-size: 0.001rem;
      }
      // .right:hover {
      //   display: none;
      // }
    }
  }
}

.san {
  // margin-top: 30px;
  float: right;
  width: 1.3rem;
  height: 100%;
  // background-color: pink;
  animation: sanjiao 5s 1s infinite alternate;
  transition: all 1s;
}
.san:hover {
  animation-play-state: paused;
}

@keyframes sanjiao {
  to {
    box-shadow: 0px 0.1rem 0.5rem gray;
    border-radius: 2rem;
    transform: translate(-8.85rem);
  }
}
</style>
