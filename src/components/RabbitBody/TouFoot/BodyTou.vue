<template>
  <div class="tou-container">
    <div class="xtx_topnav">
      <div class="wrapper">
        <!-- 顶部导航 -->
        <ul class="xtx_navs">
          <li>
            <a href="javascript:;" @click="goBack">回到晓敏的简历</a>
          </li>
          <li>
            <a href="javascript:;">免费注册</a>
          </li>
          <li>
            <a href="javascript:;">我的订单</a>
          </li>
          <li>
            <a href="javascript:;">会员中心</a>
          </li>
          <li>
            <a href="javascript:;">帮助中心</a>
          </li>
          <li>
            <a href="javascript:;">在线客服</a>
          </li>
          <li>
            <a href="javascript:;">
              <i class="mobile sprites"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="xtx_header">
      <div class="wrapper">
        <!-- 网站Logo -->
        <h1 class="xtx_logo"><a href="javascript:;">小兔鲜儿</a></h1>
        <!-- 主导航 -->
        <div class="xtx_navs">
          <ul class="clearfix">
            <li>
              <a href="javascript:;">首页</a>
            </li>
            <li>
              <a href="javascript:;">生鲜</a>
            </li>
            <li>
              <a href="javascript:;">美食</a>
            </li>
            <li>
              <a href="javascript:;">餐厨</a>
            </li>
            <li>
              <a href="javascript:;">电器</a>
            </li>
            <li>
              <a href="javascript:;">居家</a>
            </li>
            <li>
              <a href="javascript:;">洗护</a>
            </li>
            <li>
              <a href="javascript:;">孕婴</a>
            </li>
            <li>
              <a href="javascript:;">服装</a>
            </li>
          </ul>
        </div>
        <!-- 站内搜索 -->
        <div class="xtx_search clearfix">
          <!-- 购物车 -->
          <a href="javascript:;" class="xtx_search_cart sprites">
            <i>2</i>
          </a>
          <!-- 搜索框 -->
          <div class="xtx_search_wrapper">
            <input
              type="text"
              placeholder="搜一搜"
              onclick="location.href='javascript:;'"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="header_nav">
      <div class="wrapper" id="header_nav">
        <!-- 网站Logo -->
        <h1 class="xtx_logo"><a href="javascript:;">小兔鲜儿</a></h1>

        <!-- 站内搜索 -->
        <div class="xtx_search clearfix">
          <!-- 购物车 -->

          <a href="javascript:;" class="xtx_search_cart sprites">
            <i>2</i>
            <!-- <span class="cart_box">12345</span> -->
          </a>
          <!-- 搜索框 -->
          <div class="xtx_search_wrapper">
            <input
              v-model="keyword"
              type="text"
              class="searchInput"
              placeholder="搜索项目 "
              @click="chuxian"
              @blur="hiddenData"
            />
          </div>
          <div class="search-content" v-show="keyword" ref="search">
            <!-- 细节1：v-show与keyword绑定，实现删除搜索框全部内容时消失 -->

            <div class="search-item" v-for="item of List" :key="item.id">
              <span>{{ item.id }}:{{ item.name }}</span>
            </div>

            <div class="search-item1" v-show="hasData">找不到相应结果</div>
          </div>
        </div>
      </div>
    </div>
    <div class="right_nav" id="right_nav">
      <span class="ri_nav" id="ri_nav1" @click="daoHang1">品牌</span>
      <span class="ri_nav" id="ri_nav2" @click="daoHang2">生鲜</span>
      <span class="ri_nav" id="ri_nav3" @click="daoHang3">服饰</span>
      <span class="ri_nav" id="ri_nav4" @click="daoHang4">餐厨</span>
      <span class="ri_nav" id="ri_nav5" @click="daoHang5">居家</span>
      <span class="ri_nav" id="ri_nav6" @click.stop="huiTou">顶部</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BodyTou',
  data() {
    return {
      scroolTop: '',
      offsetTop: '',
      keyword: '',
      // 搜索到的相应结果返回列表
      List: [],
      timer: null,
      // 对以下假数据进行搜索，即搜索源
      songs: {
        // 假数据格式需注意
        A: [
          {
            id: 1,
            spell: 'pcduanxiaotuxianer1',
            name: 'PC端小兔鲜儿'
          },
          {
            id: 2,
            spell: 'yidongduantoutiao2',
            name: '移动端头条'
          }
        ]
      }
    }
  },
  mounted() {
    // const obj = document.getElementById('header_nav')
    window.addEventListener('scroll', this.menu)
    window.addEventListener('scroll', this.menuTou)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.menu)
    window.removeEventListener('scroll', this.menuTou)
  },
  methods: {
    goBack() {
      this.$router.push('/master')
    },
    menu(e) {
      const rn1 = document.getElementById('right_nav')
      const header = document.getElementById('header_nav')
      if (document.documentElement.scrollTop >= rn1.offsetTop) {
        header.style.top = '0'
      } else {
        header.style.top = '-125px'
      }
      // window.removeEventListener('scroll', this.menu)
    },
    menuTou() {
      const rn = document.getElementById('ri_nav6')
      const num = document.documentElement.scrollTop
      if (num >= 500) {
        rn.style.display = 'block'
        rn.style.fontSize = '25px'
        rn.style.textAlign = 'center'
      } else {
        rn.style.display = 'none'
      }
      // window.removeEventListener('scroll', this.menuTou)
    },
    huiTou() {
      document.documentElement.scrollTop = 0
    },
    daoHang1() {
      document.documentElement.scrollTop = 1460
    },
    daoHang2() {
      document.documentElement.scrollTop = 1960
    },
    daoHang3() {
      document.documentElement.scrollTop = 2820
    },
    daoHang4() {
      document.documentElement.scrollTop = 3560
    },
    daoHang5() {
      document.documentElement.scrollTop = 4265
    },
    tiaoZhuan() {},
    chuxian() {
      this.keyword = []
    },
    hiddenData() {
      this.keyword = ''
    }
  },
  computed: {
    hasData() {
      return !this.List.length
    }
  },

  watch: {
    // 监听keyword变化
    keyword() {
      // 使用clearTimeout和setTimeout集流函数，提高代码运行效率
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        // js逻辑主体部分，将关键词拼音字母或汉字与搜索源的spell和name分别进行对比
        // 判断关键词是否存在搜索源中
        for (const i in this.songs) {
          this.songs[i].forEach((value) => {
            if (
              value.name.indexOf(this.keyword) > -1 ||
              value.spell.indexOf(this.keyword) > -1
            ) {
              result.push(value)
            }
          })
        }
        this.List = result
      }, 100)
    }
  }
}
</script>

<style lang="less" scoped>
.search-item {
  // line-height: 3rem;
  padding: 10px 0 0 50px;
  color: #666;
  font-size: 18px;
  background-color: #fff;
}
.search-item1 {
  line-height: 50px;
  height: 100px;
  padding: 10px 0 0 50px;
  color: #666;
  font-size: 18px;
  background-color: #fff;
}
.search-item:hover {
  color: green;
}
.search {
  width: 100%;
  // height: 20px;
  background-color: rgb(94, 208, 247);
}
// .tou-container {
//   height: 10000px;
// }
// 右边栏
.lihang {
  padding-left: 20px;
  border-right: 1px solid #999;
  border-left: 1px solid #999;
  // border-bottom: 1px solid #999;
  // font-size: 20px;
  font-weight: bolder;
  // text-align: center;
  width: 100%;
  background-color: #fff;
}
.lihang:hover {
  cursor: pointer;
  background-color: #999;
}
.show_data {
  // overflow: auto;
  // border: 1px solid #999;
  list-style: none;
  padding: 0;
  margin-top: 50px;
  margin-left: 20px;
  width: 630px;
  // height: 210px;
  padding: 10px 5px;
}
.right_nav {
  z-index: 9999;
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 200px;
  background-color: #fff;
  position: fixed;
  right: 0px;
  top: 345px;
}
.right_nav .ri_nav {
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 1;
  box-shadow: 0 2px 12px gray;
  // border: 1px solid #000;
}
.right_nav .ri_nav:hover {
  cursor: pointer;
}
a {
  text-decoration: none;
  color: #333;
}

i {
  font-style: normal;
}
.sprites {
  background-image: url(@/assets/sprites.png);
  background-size: 400px 400px;
  background-repeat: no-repeat;
}
.wrapper {
  width: 1240px;
  margin: 0 auto;
}
/** 顶部导航 **/
.xtx_topnav {
  width: 100%;
  background-color: #333;
}

.xtx_topnav .xtx_navs {
  height: 53px;
  text-align: right;
  line-height: 53px;
  font-size: 0;
}

.xtx_topnav .xtx_navs li {
  display: inline-block;
  font-size: 14px;
}

.xtx_topnav .xtx_navs li:last-child a {
  border-right: none;
}

.xtx_topnav .xtx_navs .mobile {
  display: inline-block;
  width: 20px;
  height: 16px;
  position: relative;
  top: 3px;
  background-position: -160px -70px;
}

.xtx_topnav .xtx_navs a {
  display: inline-block;
  line-height: 1;
  padding: 0 15px;
  border-right: 2px solid #666666;
  color: #dcdcdc;
}

.xtx_topnav .xtx_navs a:hover {
  color: #27ba9b;
}

/** 主导航及Logo **/
.xtx_header .wrapper {
  display: flex;
  align-items: center;
}
.header_nav .wrapper {
  z-index: 999;
  position: fixed;
  left: 0;
  top: -131px;
  justify-content: center;
  width: 100%;
  display: flex;
  // padding-left: 130px;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #000;
  transition: all 0.3s;
}
.xtx_header .xtx_logo {
  width: 200px;
  height: 132px;
  text-indent: -999px;
  background-image: url(@/assets/rabbitPic/images/logo.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 20px;
}
.header_nav .xtx_logo {
  width: 200px;
  height: 132px;
  text-indent: -999px;
  background-image: url(@/assets/rabbitPic/images/logo.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 20px;
}
.xtx_header .xtx_navs {
  padding-left: 50px;
}

.xtx_header .xtx_navs li {
  line-height: 1;
  font-size: 16px;
  margin-right: 50px;
  position: relative;
  float: left;
}

.xtx_header .xtx_navs li:after {
  content: '';
  display: none;
  width: 30px;
  height: 2px;
  background-color: #27ba9b;
  position: absolute;
  left: 1px;
  bottom: -7px;
}

.xtx_header .xtx_navs li:hover a,
.xtx_header .xtx_navs li.active a {
  color: #27ba9b;
}

.xtx_header .xtx_navs li:hover:after,
.xtx_header .xtx_navs li.active:after {
  display: block;
}

.xtx_header .xtx_search {
  height: 38px;
  padding-left: 20px;
}
.header_nav .xtx_search {
  height: 38px;
  padding-left: 20px;
}
.xtx_header .xtx_search_wrapper {
  width: 175px;
  height: 38px;
  padding-left: 39px;
  border-bottom: 1px solid #e7e7e7;
  position: relative;
  float: right;
}
.header_nav .xtx_search_wrapper {
  width: 631px;
  height: 45px;
  padding-left: 39px;
  margin-left: 20px;
  margin-right: 10px;
  border: 2px solid #e7e7e7;
  position: relative;
  float: right;
}
.xtx_header .xtx_search_wrapper:before {
  content: '';
  display: block;
  width: 17px;
  height: 17px;
  position: absolute;
  left: 5px;
  top: 10px;
  background-image: url(@/assets/sprites.png);
  background-size: 400px 400px;
  background-position: -80px -70px;
}
.header_nav .xtx_search_wrapper:before {
  content: '';
  display: block;
  width: 17px;
  height: 17px;
  position: absolute;
  left: 5px;
  top: 10px;
  background-image: url(@/assets/sprites.png);
  background-size: 400px 400px;
  background-position: -80px -70px;
}
.xtx_header .xtx_search_wrapper input {
  width: 100%;
  height: 100%;
  font-size: 15px;
  color: #999;
}
.header_nav .xtx_search_wrapper input {
  width: 100%;
  height: 100%;
  font-size: 15px;
  color: #999;
}
.xtx_header .xtx_search_wrapper input::-webkit-input-placeholder {
  color: #ccc;
}
.header_nav input::-webkit-input-placeholder {
  color: #ccc;
}
.xtx_header .xtx_search_cart {
  display: block;
  width: 22px;
  height: 22px;
  position: relative;
  margin: 8px 12px 0 12px;
  float: right;
  background-position: -120px -70px;
}

.header_nav .xtx_search_cart {
  display: block;
  width: 22px;
  height: 22px;
  position: relative;
  margin: 8px 12px 0 12px;
  float: right;
  background-position: -120px -70px;
}
// .header_nav .xtx_search_cart .cart_box {
//   position: absolute;
//   left: 0;
//   top: 10px;
//   display: block;
//   width: 200px;
//   height: 100px;
//   background-color: red;
//   display: none;
// }
// .header_nav .xtx_search_cart .cart_box:hover {
//   display: block;
// }
.xtx_header .xtx_search_cart i {
  position: absolute;
  top: -5px;
  left: 16px;
  line-height: 1;
  padding: 1px 6px;
  font-style: normal;
  font-size: 13px;
  background-color: #e26237;
  border-radius: 15px;
  color: #fff;
}
.header_nav .xtx_search_cart i {
  position: absolute;
  top: -5px;
  left: 16px;
  line-height: 1;
  padding: 1px 6px;
  font-style: normal;
  font-size: 13px;
  background-color: #e26237;
  border-radius: 15px;
  color: #fff;
}
</style>
