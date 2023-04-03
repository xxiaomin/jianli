<template>
  <div class="evaluate-container">
    <div class="dawai">
      <div class="top">
        <NavTopd></NavTopd>
      </div>
      <div class="body">
        <div class="middle">
          <div class="middlewai">
            <ul class="eva">
              <li id="items" v-for="item in middleList" :key="item.id">
                <span>{{ item.id }}</span>
                <span>{{ item.neirong }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="foot"><EvaluateBody></EvaluateBody></div>
      </div>
    </div>
  </div>
</template>

<script>
import EvaluateBody from '@/components/MiddleBody/EvaluateBody/EvaluateBody.vue'
import NavTopd from '@/views/NavTop/NavTopd.vue'
export default {
  name: 'BodyEvaluate',
  data() {
    return {
      middleList: [
        {
          id: 1,
          neirong:
            '【学习能力】:云计算专业背景,曾2次获得奖学金,具备熟练的技术，能尽快适应并上手。'
        },
        {
          id: 2,
          neirong:
            '【个人性格】:情绪稳定，对编程有浓厚的兴趣，善于沟通，乐于学习。'
        },
        {
          id: 3,
          neirong:
            '【团队协作】:参与组织社团活动和安排志愿者，思维逻辑清晰，听取意见并沟通解决问题。'
        }
      ]
    }
  },
  components: {
    NavTopd,
    EvaluateBody
  },
  methods: {
    buZou: (e) => {
      document
        .getElementById('#items')
        .addEventListener.setInterval((e) => {}, 3000)
      e.target.style.color = 'pink'
    }
  }
}
</script>

<style lang="less" scoped>
.evaluate-container {
  display: flex;
  flex: 23;
  .dawai {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    // background-color: greenyellow;
    .top {
      display: flex;
      flex: 2;
      width: 100%;
      // background-color: #e6e6e6;
    }
    .body {
      display: flex;
      flex-direction: column;
      flex: 32.5;
    }
    .middlewai {
      background-color: #154864;
      width: 100%;
      padding-top: 0.2rem;
    }
    .middle {
      display: flex;
      flex: 3;
    }
    .foot {
      display: flex;
      flex: 5;
    }
  }
}

ul {
  display: block;
  height: 100%;

  flex-direction: column;
  display: flex;
  flex: 2;
}
li {
  height: 100%;

  // align-items: center;

  justify-content: center;
  // background-color: green;
  display: flex;
  flex: 2;
  transform-style: preserve-3d;
  transition: all 2s;
  animation: fang 10s 1s infinite alternate;
  // 辅助
  // transform: rotateX(-20deg) rotateY(30deg);
}
li span {
  display: flex;
  // flex: 4;
  // padding-top: 0.3rem;
  position: absolute;
  top: 0;
  left: 0;
  // font-size: 20px;
  align-items: center;
  text-align: center;
  display: block;
  width: 100%;
  height: 100%;
  color: #fff;
}
li span:first-child {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: #fff;
  transform: translateZ(0.1rem);
}
li span:last-child {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transform: rotateX(90deg) translateZ(0.1rem);
}
li span:hover {
  font-weight: bold;
  color: #154864;
  background-color: #e6e6e6;
}
@keyframes fang {
  to {
    transform: rotateX(-90deg);
  }
}
</style>
