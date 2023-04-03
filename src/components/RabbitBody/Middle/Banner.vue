<template>
  <div class="banner-container">
    <div class="xtx_entry">
      <div class="wrapper">
        <!-- 分类 -->
        <div class="xtx_category" id="rightbox">
          <!-- 顶级分类 -->
          <!-- <ul
            class="xtx_category_super"
            v-for="(item, index) in leftList"
            :key="index"
            @mouseenter="xianChu(index)"
            @mouseleave="xiaoSi"
          > -->
          <div class="xtx_category_super">
            <div class="box">
              <ul
                v-for="(item, index) in leftList"
                :key="index"
                @mouseenter="xianChu(index)"
              >
                <li>
                  <a href="javascript:;">
                    {{ item.aname }}
                    <small>{{ item.asmall }}</small>
                    <small>{{ item.bsmall }}</small>
                    <small>{{ item.csmall }}</small>
                  </a>
                  <i class="sprites"></i>
                </li>
                <div class="box1">
                  <div
                    :class="{ xtx_category_subset: item.current }"
                    v-for="(item, index) in leftList"
                    :key="index"
                  >
                    {{ item.num }}
                  </div>
                </div>
              </ul>
            </div>

            <!-- 子分类 -->
            <!-- 右边变白的 -->
          </div>
        </div>
        <!-- 焦点图 -->
        <div class="xtx_banner" @mousemove="qingTime" @mouseleave="kaiTime">
          <ul>
            <li>
              <a href="javascript:;">
                <img :src="dataList[currentIndex]" />
              </a>
            </li>
          </ul>
          <!-- 切换按钮  -->
          <a
            href="javascript:;"
            class="prev sprites"
            @click="gotoPage(prevIndex)"
          ></a>
          <a
            href="javascript:; "
            class="next sprites"
            @click="gotoPage(nextIndex)"
          ></a>
          <!-- 指示器小白点 -->
          <div class="indicator">
            <span
              v-for="(item, index) in dataList"
              :key="index"
              @click="gotoPage(index)"
              :class="{ active: currentIndex === index }"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgPica from '@/assets/rabbitPic/images/b1.jpg'
import imgPicb from '@/assets/rabbitPic/images/b2.jpg'
import imgPicc from '@/assets/rabbitPic/images/b3.jpg'
import imgPicd from '@/assets/rabbitPic/images/b4.jpg'
import imgPice from '@/assets/rabbitPic/images/b5.jpg'
export default {
  name: 'MyBanner',

  data() {
    return {
      dataList: [imgPica, imgPicb, imgPicc, imgPicd, imgPice],
      currentIndex: 0, // 默认显示图片
      timer: null, // 定时器
      leftList: [
        {
          num: '1',
          aname: ' 美食',
          asmall: '面点',
          bsmall: '干果',
          current: true
        },
        { num: '2', aname: ' 电器', asmall: '数码产品', current: false },
        {
          num: '3',
          aname: ' 居家',
          asmall: '床品',
          bsmall: '四件套',
          csmall: '被枕',
          current: false
        },
        {
          num: '4',
          aname: ' 洗护',
          asmall: '洗发洗护',
          bsmall: '美妆',
          current: false
        },
        {
          num: '5',
          aname: ' 洗护',
          asmall: '洗发洗护',
          bsmall: '美妆',
          current: false
        },
        {
          num: '6',
          aname: ' 孕婴',
          asmall: '奶粉',
          bsmall: '玩具',
          csmall: '辅食',
          current: false
        },
        { num: '7', aname: ' 餐橱', asmall: '数码产品', current: false },
        {
          num: '8',
          aname: ' 服饰',
          asmall: '女装',
          bsmall: '男装',
          current: false
        },
        {
          num: '9',
          aname: ' 杂货',
          asmall: '户外',
          bsmall: '图书',
          current: false
        },
        { num: '10', aname: '  品牌', asmall: '品牌制造', current: false }
      ]
    }
  },
  methods: {
    xianChu(i) {
      this.leftList.forEach((element) => {
        element.current = false
      })
      this.leftList[i].current = true
    },
    runInv() {
      this.timer = setInterval(() => {
        this.gotoPage(this.nextIndex)
      }, 3000)
    },
    kaiTime() {
      this.runInv()
      document.getElementById('rightbox').style.display = 'block'
    },
    qingTime() {
      clearInterval(this.timer)
      document.getElementById('rightbox').style.display = 'none'
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
// .active {
//   color: #fff;
//   text-shadow: 0px 5px 12px gray;
//   background: #e6e6e6;
// }
// ul,
// li {
//   display: inline-block;
// }
// #box-li {
//   width: 100%;
//   // height: 100%;
//   background-color: green;
// }
.slide-list {
  width: 992px;
  height: 460px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-left: none;
  box-sizing: border-box;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.18);
  position: absolute;
  top: 0;
  left: 234px;
  padding-top: 2px;
  display: none;
  display: block;
}
pre {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}
small {
  margin-right: 4px;
  font-size: 80%;
}
a {
  text-decoration: none;
  color: #333;
}

i {
  font-style: normal;
}
img {
  border-style: none;
}
.sprites {
  background-image: url(@/assets/sprites.png);
  background-size: 400px 400px;
  background-repeat: no-repeat;
}
.wrap .wrapper {
  width: 1240px;
  margin: 0 auto;
}
.xtx_entry .wrapper {
  height: 500px;
  background-color: #f2f2f2;
  position: relative;
}
// 1111
.xtx_category {
  // width: 1240px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  z-index: 9;
}
.xtx_category_subset {
  display: inline-block;
  width: 990px;
  height: 100%;
  display: flex;
  // flex: 2;
  font-size: 100px;
  padding-top: 170px;
  text-align: center;
  color: #000;
  background-color: #fff;
  display: none;
  position: absolute;
  top: 0;
}

.xtx_category:hover .xtx_category_subset {
  display: block;
}
.xtx_category_super {
  height: 100%;
  position: relative;
}
.xtx_category_super .box {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 250px;
  height: 100%;
  z-index: 9992;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
}
.xtx_category_super .box1 {
  position: absolute;
  top: 0;
  left: 250px;
  height: 100%;
  color: rgba(0, 0, 0, 0.9);
  // font-size: 1px;
  background-color: rgba(0, 0, 0, 0.9);
  opacity: 0.15;
}
.xtx_category_super ul {
  display: inline-block;
  width: 100%;
}
.xtx_category_super li {
  height: 50px;
  display: inline-block;
  width: 100%;
  padding: 10px 20px 0px 40px;
  transition: background-color 0.25s;
  cursor: pointer;
}
.xtx_category_super li:hover,
.xtx_category_super li.active {
  background-color: #27ba9b;
}

.xtx_category_super a {
  width: 160px;
  color: #fff;
  font-size: 16px;
  line-height: 32px;
}

.xtx_category_super a small {
  font-size: 14px;
  margin-left: 4px;
}

.xtx_category_super i {
  display: block;
  width: 12px;
  height: 12px;
  margin-top: 12px;
  background-position: -75px -110px;
  float: right;
}
// 111111
.xtx_banner {
  width: 1240px;
  height: 500px;
  overflow: hidden;
  position: relative;
}

.xtx_banner:hover a {
  opacity: 1;
}

.xtx_banner > a {
  display: block;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-top: -22px;
  opacity: 0;
  transition: opacity 0.5s;
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
}

.xtx_banner > a.prev {
  left: 20px;
  background-position: 14px -59px;
}

.xtx_banner > a.next {
  right: 20px;
  background-position: -24px -59px;
}

.xtx_banner .indicator {
  width: 990px;
  text-align: center;
  font-size: 0;
  position: absolute;
  left: 250px;
  bottom: 22px;
}

.xtx_banner .indicator span {
  display: inline-block;
  width: 9px;
  height: 9px;
  margin: 0 8px;
  cursor: pointer;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.43);
}

.xtx_banner .indicator span.active {
  background-color: #fff;
}

/** 公共面板 **/
.xtx_panel .xtx_panel_header {
  height: 115px;
  padding: 40px 0;
}

.xtx_panel .xtx_panel_header h3 {
  height: 35px;
  line-height: 35px;
  margin-left: 6px;
  font-size: 32px;
  font-weight: 400;
  color: #333;
  float: left;
}

.xtx_panel .xtx_panel_header small {
  margin-left: 22px;
  font-size: 16px;
  color: #999;
}

.xtx_panel .xtx_panel_header .more {
  line-height: 1;
  margin-top: 14px;
  font-size: 16px;
  color: #999;
  float: right;
}

.xtx_panel .xtx_panel_header .more i {
  display: inline-block;
  width: 16px;
  height: 16px;
  position: relative;
  top: 1px;
  background-position: 8px -106px;
}

.xtx_panel .xtx_panel_header .tabs-bar {
  height: 35px;
  padding-top: 13px;
  font-size: 16px;
  margin-right: 80px;
  float: right;
}

.xtx_panel .xtx_panel_header .tabs-bar a {
  padding: 2px 8px;
  margin-left: 5px;
  border-radius: 2px;
}

.xtx_panel .xtx_panel_header .tabs-bar a:hover,
.xtx_panel .xtx_panel_header .tabs-bar a.active {
  background-color: #27ba9b;
  color: #fff;
}

.xtx_panel .xtx_panel_goods_1 {
  text-align: justify;
  font-size: 0;
}

.xtx_panel .xtx_panel_goods_1:after {
  content: '';
  display: inline-block;
  width: 306px;
  height: 0;
}

.xtx_panel .xtx_panel_goods_1 a {
  display: inline-block;
  width: 306px;
  height: 406px;
  text-align: center;
}

.xtx_panel .xtx_panel_goods_1 img {
  width: 306px;
  height: 306px;
}

.xtx_panel .xtx_panel_goods_2 {
  height: 610px;
}

.xtx_panel .xtx_panel_goods_2 li {
  width: 240px;
  height: 300px;
  padding-top: 10px;
  margin-left: 10px;
  background-color: #fff;
  border: 1px solid #fff;
  overflow: hidden;
  transition: 0.3s;
  position: relative;
  float: left;
}

.xtx_panel .xtx_panel_goods_2 li:hover {
  border-color: #27ba9b;
}

.xtx_panel .xtx_panel_goods_2 li:hover .extra {
  bottom: 0;
}

.xtx_panel .xtx_panel_goods_2 li:first-child {
  height: 610px;
  padding-top: 0;
  margin-left: 0;
  border: 0;
}

.xtx_panel .xtx_panel_goods_2 li:nth-last-child(-n + 4) {
  margin-top: 10px;
}

.xtx_panel .xtx_panel_goods_2 a {
  display: block;
}

.xtx_panel .xtx_panel_goods_2 .img-box {
  width: 240px;
  height: 160px;
  padding: 0 33px;
  text-align: center;
  margin: 0 auto;
  display: table-cell;
  vertical-align: middle;
}

.xtx_panel .xtx_panel_goods_2 .meta {
  height: 130px;
  line-height: 1.3;
  padding: 10px 22px 0;
  font-size: 19px;
  position: relative;
}

.xtx_panel .xtx_panel_goods_2 .name {
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.xtx_panel .xtx_panel_goods_2 .price {
  font-size: 22px;
  color: #cf4444;
  position: absolute;
  bottom: 10px;
}

.xtx_panel .xtx_panel_goods_2 .price small {
  font-size: 17px;
}

.xtx_panel .xtx_panel_goods_2 .extra {
  width: 100%;
  height: 86px;
  padding-top: 10px;
  transition: bottom 0.3s;
  background-color: #27ba9b;
  position: absolute;
  bottom: -86px;
}

.xtx_panel .xtx_panel_goods_2 .extra span {
  display: block;
  width: 124px;
  line-height: 1;
  padding: 9px 0 8px;
  margin: 0 auto;
  text-align: center;
  font-size: 19px;
  color: #fff;
}

.xtx_panel .xtx_panel_goods_2 .extra span:last-child {
  font-size: 13px;
  border-top: 1px solid #fff;
}

.xtx_panel .xtx_panel_goods_2 .label {
  position: absolute;
  left: 0;
  bottom: 266px;
  width: 188px;
  height: 66px;
  text-align: center;
  line-height: 66px;
  color: #fff;
  font-size: 17px;
  border-radius: 0 2px 2px 0;
  background-color: rgba(0, 0, 0, 0.8);
  position: relative;
}

.xtx_panel .xtx_panel_goods_2 .label span:first-child {
  display: block;
  width: 76px;
  background-color: #000;
}

.xtx_panel .xtx_panel_goods_2 .label span:last-child {
  width: 112px;
  line-height: 1.4;
  transform: translate(0, -50%);
  position: absolute;
  left: 76px;
  right: 0;
  top: 50%;
}
</style>
