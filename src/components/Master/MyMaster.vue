<template>
  <!-- 外壳 -->
  <div class="out-container">
    <div class="nei-container">
      <THead></THead>
      <TBody> </TBody>
    </div>
  </div>
</template>

<script>
import THead from '@/components/Master/THead.vue'
import TBody from '@/components/Master/TBody.vue'
export default {
  name: 'MyMaster',
  components: {
    THead,
    TBody
  }
}
</script>

<style lang="less" scoped>
.out-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  // // 背景颜色
  background-color: #fff;
  width: 10rem;
  height: 23.78rem;
  // width: 28rem;
  // height: 45.86666666rem;
  // border: 1px solid #000;
  border-top: 0.1rem solid #154864;
  box-shadow: 0rem 0.737rem 0.32rem 0.4rem gainsboro;
}
.nei-container {
  display: flex;
  flex-direction: column;
  // background-color: skyblue;
  width: 9.3rem;
  height: 23.28rem;
}
</style>
