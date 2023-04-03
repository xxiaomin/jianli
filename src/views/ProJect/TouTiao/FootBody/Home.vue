<template>
  <div class="home-container">
    <van-nav-bar title="黑马头条" fixed />

    <van-pull-refresh
      v-model="isLoading"
      :disabled="finished"
      @refresh="onRefresh"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <ArticleItem
          v-for="(item, index) in artlist"
          :key="index"
          :article="item"
        ></ArticleItem>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import ArticleItem from '@/components/TouTiaoBody/HomeBody/Article/ArticleItem.vue'
// import Artlist from '@/components/TouTiaoBody/HomeBody/Article/Array.js'

// 鲁大师 提供了许多牛逼的函数 节流的函数、防抖的函数、操作数组的一系列函数、操作对象的一系列函数（对象的深拷贝、浅拷贝）
import _ from 'lodash'
import pica from '@/assets/pic/t1.png'
import picb from '@/assets/pic/t2.png'
import picc from '@/assets/pic/t3.png'
import picd from '@/assets/pic/t4.png'
let fn = null

export default {
  name: 'MyHome',
  data() {
    return {
      page: 1,
      pageSize: 10,
      artlist: [
        {
          art_id: '1',
          title: 'iOS原生混合RN开发最佳实践',
          aut_id: '1111',
          comm_count: '254',
          pubdate: '2019-03-11 09:00:00',
          aut_name: '黑马先锋',
          is_top: 0,
          cover: {
            type: 3,
            images: [pica, picb, picc]
          }
        },
        {
          art_id: '2',
          title: 'JAVA消息确认机制之ACK模式',
          aut_id: '1111',
          comm_count: '99',
          pubdate: '2019-03-11 09:00:00',
          aut_name: '黑马先锋',
          is_top: 0,
          cover: {
            type: 0
          }
        },
        {
          art_id: '3',
          title: 'H5游戏开发的一乘轻骑---Phaser',
          aut_id: '1111',
          comm_count: '50',
          pubdate: '2019-03-11 09:00:00',
          aut_name: '黑马先锋',
          is_top: 0,
          cover: {
            type: 3,
            images: [pica, picb, picc]
          }
        },
        {
          art_id: '4',
          title: 'Vue组件开发实录：组件的三种调用方式',
          aut_id: '1111',
          comm_count: '38',
          pubdate: '2019-03-11 09:00:00',
          aut_name: '黑马先锋',
          is_top: 0,
          cover: {
            type: 3,
            images: [pica, picb, picc]
          }
        },
        {
          art_id: '5',
          title: 'Typescript玩转设计模式 之 创建型模式',
          aut_id: '1111',
          comm_count: '24',
          pubdate: '2019-03-11 09:00:00',
          aut_name: '黑马先锋',
          is_top: 0,
          cover: {
            type: 1,
            images: [picd]
          }
        },
        {
          art_id: '6',
          title: '然并卵：BF 科普 & BF 解释器的 JS 实现',
          aut_id: '1111',
          comm_count: '6',
          pubdate: '2019-03-11 09:00:00',
          aut_name: '黑马先锋',
          is_top: 0,
          cover: {
            type: 0
          }
        },
        {
          art_id: '7',
          title: '[Day 2] 听说你没来 JSConf 2017？',
          aut_id: '1111',
          comm_count: '12',
          pubdate: '2019-03-11 09:00:00',
          aut_name: '黑马先锋',
          is_top: 0,
          cover: {
            type: 1,
            images: [picd]
          }
        },
        {
          art_id: '8',
          title: '6个经典的JavaScript报错分析',
          aut_id: '1111',
          comm_count: '4',
          pubdate: '2019-03-11 09:00:00',
          aut_name: '黑马先锋',
          is_top: 0,
          cover: {
            type: 1,
            images: [picd]
          }
        },
        {
          art_id: '9',
          title: '拜读及分析Element源码-checkbox多选框组件篇',
          aut_id: '1111',
          comm_count: '17',
          pubdate: '2019-03-11 09:00:00',
          aut_name: '黑马先锋',
          is_top: 0,
          cover: {
            type: 1,
            images: [picd]
          }
        },
        {
          art_id: '10',
          title: '10 个开发新人提及最多的 GitHub Repo',
          aut_id: '1111',
          comm_count: '2',
          pubdate: '2019-03-11 09:00:00',
          aut_name: '黑马先锋',
          is_top: 0,
          cover: {
            type: 0
          }
        }
      ],
      loading: true,
      finished: false,
      isLoading: false
    }
  },
  created() {
    this.initArticleList()
  },
  activated() {
    fn = this.recordTopHandler()
    window.addEventListener('scroll', fn)
  },
  deactivated() {
    window.removeEventListener('scroll', fn)
  },
  methods: {
    initArticleList(isRefresh) {
      if (isRefresh) {
        this.artlist = [...this.artlist, ...this.artlist]
        this.isLoading = false
      } else {
        this.artlist = [...this.artlist, ...this.artlist]
        this.loading = false
      }
      if (this.artlist.length === 0) {
        this.finished = true
      }
    },
    // 上拉加载更多
    onLoad() {
      this.page++
      // this.artlist = [...this.artlist, ...this.artlist]
      // this.isLoading = false
      // if (this.artlist.length === 0) {
      //   this.finished = true
      // }
      this.initArticleList()
    },
    // 下拉刷新
    onRefresh() {
      this.page++
      // this.artlist = [...this.artlist, ...this.artlist]
      // this.loading = false
      // if (this.artlist.length === 0) {
      //   this.finished = true
      // }
      this.initArticleList(true)
    },
    recordTopHandler() {
      return _.debounce(
        () => {
          this.$route.meta.top = window.scrollY
        },
        50,
        { trailing: true }
      )
    }
  },
  components: {
    ArticleItem
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>
