<template>
  <div class="mobilepc-container">
    <MyMaster></MyMaster>
  </div>
</template>

<script>
import MyMaster from '@/components/Master/MyMaster.vue'
export default {
  name: 'MobilePC',
  components: {
    MyMaster
  }
}
</script>

<style lang="less" scoped>
// .mobilepc-container {
//   width: 28rem;
//   height: 45.86666666rem;
//   background-color: #154864;
// display: flex;
// }
</style>
