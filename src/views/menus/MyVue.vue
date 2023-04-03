<template>
  <div class="myvue-container">
    <div class="dawai">
      <div
        class="banner"
        @mousemove="qingTime"
        @mouseleave="kaiTime"
        @touchend="qingTime"
        @touchstart="kaiTime"
      >
        <div class="item">
          <img :src="dataList[currentIndex]" />
        </div>
        <div class="page" v-if="this.dataList.length > 1">
          <ul>
            <li @click="gotoPage(prevIndex)">&lt;</li>
            <li
              v-for="(item, index) in dataList"
              :key="index"
              @click="gotoPage(index)"
              :class="{ current: currentIndex === index }"
            >
              {{ index + 1 }}
            </li>
            <li @click="gotoPage(nextIndex)">&gt;</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgPica from '@/assets/v1.png'
import imgPicb from '@/assets/v2.png'
import imgPicc from '@/assets/v3.png'
import imgPicd from '@/assets/v4.png'
import imgPice from '@/assets/v5.png'
export default {
  name: 'MyVue',
  data() {
    return {
      dataList: [imgPica, imgPicb, imgPicc, imgPicd, imgPice],
      currentIndex: 0, // 默认显示图片
      timer: null // 定时器
    }
  },
  methods: {
    runInv() {
      this.timer = setInterval(() => {
        this.gotoPage(this.nextIndex)
      }, 1000)
    },
    kaiTime() {
      this.runInv()
    },
    qingTime() {
      clearInterval(this.timer)
    },
    gotoPage(index) {
      this.currentIndex = index
    }
  },
  created() {
    this.runInv()
  },
  computed: {
    // 上一张
    prevIndex() {
      if (this.currentIndex === 0) {
        return this.dataList.length - 1
      } else {
        return this.currentIndex - 1
      }
    },
    // 下一张
    nextIndex() {
      if (this.currentIndex === this.dataList.length - 1) {
        return 0
      } else {
        return this.currentIndex + 1
      }
    }
  }
}
</script>

<style lang="less" scoped>
.myvue-container {
  width: 100%;
  height: 100%;
  .dawai {
    display: flex;
    width: 100%;
    height: 100%;
    .banner {
      width: 100%;
      img {
        height: 3.65rem;
        width: 100%;
        display: block;
      }
      .page {
        display: flex;
        flex-direction: column;
        border-radius: 0.5rem;
        width: 100%;
        width: 100%;
        ul {
          display: flex;
          flex: 1;
          width: 100%;
          cursor: pointer;
          font-weight: bold;
          color: rgba(255, 255, 255, 0.8);
          text-shadow: 0px 0px 5px gray;
        }
        li {
          display: flex;
          flex: 1;
        }
        li:last-child {
          display: flex;
          justify-content: right;
        }
      }
    }
  }
}

.current {
  color: #154864;
}
</style>
