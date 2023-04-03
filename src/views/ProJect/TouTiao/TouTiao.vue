<template>
  <div class="toutiao-container">
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/toutiao/home">首页</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/toutiao/cart"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="user-o" to="/toutiao/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'TouTiao'
}
</script>

<style lang="less">
.toutiao-container {
  // padding-top: 45px;
  padding-bottom: 50px;
}
</style>
