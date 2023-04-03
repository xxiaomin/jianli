<template>
  <div class="pc-container">
    <div class="left">1</div>
    <div class="right">2</div>
  </div>
</template>

<script>
export default {
  name: 'MyPC'
}
</script>

<style lang="less" scoped>
.pc-container {
  width: 5rem;
  height: 5rem;
  background-color: #154864;
  display: flex;
  .left {
    width: 0.5rem;
    height: 1rem;
    background-color: #fff;
  }
  .right {
    width: 4rem;
    height: 4rem;
    background-color: blue;
  }
}
</style>
