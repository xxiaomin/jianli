<template>
  <div class="skil-container">
    <div class="dawai">
      <div class="top">
        <NavTopb></NavTopb>
      </div>
      <div class="body">
        <div class="left">
          <div class="skilbox">
            <SkilHtmlCss></SkilHtmlCss>
          </div>
          <div class="skilbox"><SkilJavaScript></SkilJavaScript></div>
          <div class="skilbox"><SkilMyAjax></SkilMyAjax></div>
          <div class="skilbox"><SkilGit></SkilGit></div>
          <div class="skilbox"><SkilMyVue></SkilMyVue></div>
        </div>
        <div class="right">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTopb from '@/views/NavTop/NavTopb.vue'
import SkilHtmlCss from '@/components/MiddleBody/SkilBody/SkilHtmlCss.vue'
import SkilJavaScript from '@/components/MiddleBody/SkilBody/SkilJavaScript.vue'
import SkilMyAjax from '@/components/MiddleBody/SkilBody/SkilMyAjax.vue'
import SkilGit from '@/components/MiddleBody/SkilBody/SkilGit.vue'
import SkilMyVue from '@/components/MiddleBody/SkilBody/SkilMyVue.vue'
export default {
  name: 'BodySkil',

  components: {
    NavTopb,
    SkilHtmlCss,
    SkilJavaScript,
    SkilMyAjax,
    SkilGit,
    SkilMyVue
  }
}
</script>

<style lang="less" scoped>
.skil-container {
  display: flex;
  flex: 4;
  .dawai {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #fff;
    // background-color: #154864;
    .top {
      display: flex;
      flex: 1;
      width: 100%;
      background-color: #e6e6e6;
    }
    .body {
      display: flex;
      flex: 5;
      // background-color: green;
      .left {
        flex-direction: column;
        display: flex;
        flex: 2.6;
        background-color: whitesmoke;
        .skilbox {
          display: block;
          height: 100%;

          display: flex;
          background-color: #154864;
          height: 100%;
          flex: 1;
        }
        .skilbox:hover {
          border-radius: 1rem;
        }
      }
      .right {
        background-color: #fff;
        display: flex;
        flex: 5.7;
      }
    }
  }
}
</style>
