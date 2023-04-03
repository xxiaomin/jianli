<template>
  <div class="evaluatebody-container">
    <div class="dawai">
      <div class="shang">
        <NavTope></NavTope>
      </div>
      <div class="xia">
        <div class="xialeft">
          <span class="maoshang" @click="OnRabbit">
            <h4>项目一</h4>
            <h3>PC端：小兔鲜儿</h3>
          </span>
          <span
            id="mao"
            @mouseover="budDong"
            @mouseout="dongLe"
            @touchend="budDong"
            @touchstart="dongLe($event)"
          >
            <img src="@/assets/mao1.png" alt="" />
          </span>
        </div>
        <div class="xiaright">
          <span class="toutiao" @click="OnToutiao">
            <h4>项目二</h4>
            <h3>移动端：头条</h3>
          </span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTope from '@/views/NavTop/NavTope.vue'
// import TouTiao from '@/views/ProJect/TouTiao/TouTiao.vue'
export default {
  name: 'EvaluateBody',
  components: {
    NavTope
    // TouTiao
  },
  methods: {
    budDong() {
      document.getElementById('mao').classList.add('bian')
    },
    dongLe: (e) => {
      document.getElementById('mao').classList.remove('bian')
      e.target.style.transition = 'all 2s'
    },
    OnRabbit() {
      this.$router.push('/rabbit')
    },
    OnToutiao() {
      this.$router.push('/toutiao')
    }
  }
}
</script>

<style lang="less" scoped>
.evaluatebody-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  // flex: 1;
  // background-color: pink;
  .dawai {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  .shang {
    display: flex;
    flex: 0.9;
    background-color: pink;
  }
  .xia {
    display: flex;
    flex: 8;
    .maoshang {
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
      background-color: papayawhip;
    }

    .xialeft {
      display: flex;
      flex: 0.4;
      flex-direction: column;
      // background-color: green;
      span {
        display: flex;
        flex: 1;
      }
      img {
        display: flex;
        flex: 1;
        // margin-top: 0.1rem;
        width: 4rem;
      }
      img:hover {
        cursor: pointer;
        transition: all 2s;
        animation: mao 5s 0.5s infinite alternate;
      }
    }
    .xiaright {
      display: flex;
      flex: 1;
      // flex-direction: column;
      align-items: center;
      justify-content: center;
      // background-color: pink;
      .toutiao {
        display: flex;
        flex: 2;
        align-items: center;
        // justify-content: center;
        display: flex;
        flex-direction: column;
        background-color: #fff;
      }
    }
  }
}
span:nth-of-type(1):hover {
  cursor: pointer;
}
span:nth-of-type(3):hover {
  cursor: pointer;
}
@keyframes mao {
  to {
    border-radius: 4rem;
    border: 0.2rem solid #000;
    transform: scale(0.2);
  }
}
</style>
