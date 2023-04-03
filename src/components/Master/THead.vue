<template>
  <div class="thead-container">
    <HeadLeft></HeadLeft>
    <HeadRight></HeadRight>
  </div>
</template>

<script>
import HeadLeft from '@/components/HeadBody/HeadLeft.vue'
import HeadRight from '@/components/HeadBody/HeadRigtht.vue'

export default {
  name: 'MyTHead',
  components: {
    HeadLeft,
    HeadRight
  }
}
</script>

<style lang="less" scoped>
.thead-container {
  display: flex;
  flex: 0.45;
  width: 100%;
  // background-color: green;
}
</style>
