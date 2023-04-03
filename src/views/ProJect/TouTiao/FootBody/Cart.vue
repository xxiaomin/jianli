<template>
  <div class="cart-container">
    <van-nav-bar title="购物车" fixed />

    <Goods
      v-for="item in list"
      :key="item.id"
      :id="item.id"
      :title="item.goods_name"
      :pic="item.goods_img"
      :price="item.goods_price"
      :state="item.goods_state"
      :count="item.goods_count"
      @state-change="getNewState"
    ></Goods>

    <!-- Footer 区域 -->
    <Footer
      :isfull="fullState"
      :amount="amt"
      :all="total"
      @full-change="getFullState"
    ></Footer>
  </div>
</template>

<script>
// 导入 axios 请求库
import axios from 'axios'
// 导入需要的组件
import Goods from '@/components/TouTiaoBody/CartBody/Goods/Goods.vue'
import Footer from '@/components/TouTiaoBody/CartBody/Footer/Footer.vue'

import bus from '@/components/TouTiaoBody/CartBody/eventBus'

export default {
  name: 'MyCart',
  data() {
    return {
      // 用来存储购物车的列表数据，默认为空数组
      list: []
    }
  },
  // 计算属性
  computed: {
    // 动态计算出全选的状态是 true 还是 false
    fullState() {
      return this.list.every((item) => item.goods_state)
    },
    // 已勾选商品的总价格
    amt() {
      // 1. 先 filter 过滤
      // 2. 再 reduce 累加
      return this.list
        .filter((item) => item.goods_state)
        .reduce(
          (total, item) => (total += item.goods_price * item.goods_count),
          0
        )
    },
    // 已勾选商品的总数量
    total() {
      return this.list
        .filter((item) => item.goods_state)
        .reduce((t, item) => (t += item.goods_count), 0)
    }
  },
  created() {
    // 调用请求数据的方法
    this.initCartList()

    bus.$on('share', (val) => {
      this.list.some((item) => {
        console.log(item.id)
        console.log(item.goods_count)
        console.log('----------')
        if (item.id === val.id) {
          item.goods_count = val.value
          return true
        }
        return false
      })
    })
  },
  methods: {
    // 封装请求列表数据的方法
    async initCartList() {
      // 调用 axios 的 get 方法，请求列表数据
      const { data: res } = await axios.get('https://www.escook.cn/api/cart')
      // 只要请求回来的数据，在页面渲染期间要用到，则必须转存到 data 中
      if (res.status === 200) {
        this.list = res.list
      }
    },
    // 接收子组件传递过来的数据
    // e 的格式为 { id, value }
    getNewState(e) {
      this.list.some((item) => {
        if (item.id === e.id) {
          item.goods_state = e.value
          // 终止后续的循环
          return true
        }
        return false
      })
    },
    // 接收 Footer 子组件传递过来的全选按钮的状态
    getFullState(val) {
      this.list.forEach((item) => (item.goods_state = val))
    }
  },
  components: {
    // Header,
    Goods,
    Footer
  }
}
</script>

<style lang="less" scoped>
.cart-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
