<template>
  <div class="rabbit-container">
    <!-- 头部 -->
    <div class="tou"><body-tou></body-tou></div>
    <!-- 中间 -->
    <div class="middle">
      <Banner></Banner>
      <!-- 新鲜好物 -->
      <goods></goods>
      <!-- 生鲜 -->
      <!-- <sheng-xian></sheng-xian> -->
    </div>
    <!-- 底部 -->
    <div class="foot"><body-foot></body-foot></div>
  </div>
</template>

<script>
import BodyTou from '@/components/RabbitBody/TouFoot/BodyTou.vue'
import BodyFoot from '@/components/RabbitBody/TouFoot/BodyFoot.vue'
// import ShengXian from '@/components/RabbitBody/Middle/ShengXian.vue'
import Banner from '@/components/RabbitBody/Middle/Banner.vue'
import Goods from '@/components/RabbitBody/Middle/Goods.vue'

export default {
  name: 'MyRabbit',
  components: {
    BodyTou,
    BodyFoot,
    // ShengXian,
    Goods,
    Banner
  }
}
</script>

<style lang="less">
.rabbit-container {
  // width: 2000px;
}
</style>
