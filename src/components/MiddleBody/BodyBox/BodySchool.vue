<template>
  <div class="school-container">
    <div class="dawai">
      <div class="top">
        <NavTopc></NavTopc>
      </div>
      <div class="body">
        <div class="middle">
          <!-- <button class="left" @click="toggle(index)">1</button> -->
          <div
            class="content"
            :class="{ show: item.current }"
            v-for="(item, index) in list"
            :key="index"
          >
            <span class="spanTab">{{ item.content }}</span>
            <span class="spanTab">{{ item.contenta }}</span>
            <span class="spanTab">{{ item.contentb }}</span>
            <span class="spanTab">{{ item.contentc }}</span>
            <span class="spanTab">{{ item.contentd }}</span>
          </div>
          <!-- <button class="right" @click="toggle(index)">1</button> -->
        </div>
        <div class="foot">
          <div class="footbox">
            <ul class="school">
              <li
                class="btn"
                :class="{ active: item.current }"
                v-for="(item, index) in list"
                :key="index"
                @click="toggle(index)"
              >
                {{ item.title }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTopc from '@/views/NavTop/NavTopc.vue'
export default {
  name: 'BodySchool',
  data() {
    return {
      list: [
        {
          title: '2022.05-2022.06',
          content: 'JavaScript程序',
          contenta: '小组设计作业',
          contentb: '·【负责内容】负责登陆界面、主页基础共同样式的编写',
          contentc: '·【使用工具】HTML+CSS+JavaScript语言,仿京东的网页效果',
          contentd: '·【获得结果】获得小组评分是A。',
          current: true
        },
        {
          title: '2021.10-2021.11',
          content: '模拟手机app页面',
          contenta: 'HTML5技术期末作业',
          contentb:
            '·【负责内容】网页和手机端自由切换且数据内容等比例变化的app页面。',
          contentc:
            '·【使用工具】HTML+CSS+Less+Vue,仿每日英语听力手机app的组件切换界面',
          contentd: '·【获得结果】获得老师评分是A+。',
          current: false
        },
        {
          title: '2022.03-2023.01',
          content: '实训室管理员',
          contenta: '助理|勤工助学',
          contentb: '·【主要内容】管理6个机房，负责机房各种仪器的正常使用、',
          contentc:
            '·【次要内容】每周一次组织志愿者打扫和帮助负责老师布置学校领导开会场所。',
          contentd:
            '·【日常内容】观察科任老师与同学的机房使用情况，有问题、及时反馈给负责老师.',
          current: false
        },
        {
          title: '2020.11-2022.06',
          content: '学生党员志愿服务队',
          contenta: '秘书处副处长',
          contentb:
            '· 一周一次观影活动，负责ppt制作，查找并投放有关党内容的视频，',
          contentc: '· 主持控制现场的正常开幕与结束，场后收集观后感，',
          contentd: '· 整合意见，为下次调整和修改。',
          current: false
        }
      ]
    }
  },
  components: { NavTopc },

  methods: {
    toggle(i) {
      this.list.forEach((element) => {
        element.current = false
      })
      this.list[i].current = true
    }
  }
}
</script>

<style lang="less" scoped>
.school-container {
  display: flex;
  flex: 10;
  .dawai {
    display: flex;
    flex-direction: column;
    width: 100%;
    // height: 100%;
    background-color: #fff;
    .top {
      display: flex;
      flex: 1;
      width: 100%;
      background-color: #e6e6e6;
    }
    .body {
      display: flex;
      flex-direction: column;
      .spanTab {
        display: inline-block;
        font-size: 0.25rem;
        // font-weight: bolder;
        transition: all 5s;
        padding-bottom: 0.02rem;
      }

      .spanTab:first-child {
        margin-right: 3rem;
      }
      .spanTab:nth-child(4) {
        margin-right: 1rem;
      }
      .foot {
        // margin-bottom: 0.1rem;
        margin-top: 0.1rem;
        display: flex;
        flex: 1.5;
        .footbox {
          display: flex;
          width: 100%;
          background-color: #fff;
          border-radius: 2rem;
        }
      }
    }
  }
}
ul {
  width: 100%;
  display: flex;
  flex: 2;
}
li {
  width: 100%;
  // font-size: 0.2rem;
  font-weight: bold;
  color: #154864;
  align-items: center;
  justify-content: center;
  display: flex;
  flex: 2;
}
.btn {
  display: inline-block;
  border-radius: 0.5rem;
  text-align: center;
  cursor: pointer;
}
.content {
  // background-color: red;
  margin-top: 0.15rem;
  border-radius: 0.3rem;
  padding: 0.2rem 0rem 0rem 0.35rem;
  width: 100%;
  height: 3rem;
  box-shadow: 0rem 0rem 0.5rem gray;
  display: none;
}
.active {
  color: #fff;
  text-shadow: 0px 5px 12px gray;
  background: #e6e6e6;
}
.show {
  display: block;
}
</style>
