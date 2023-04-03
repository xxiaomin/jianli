<template>
  <div class="ajax-container">
    <div class="dawai">
      <div class="left">
        <ul v-for="(item, index) in dataList" :key="index">
          <li>{{ item.zonga }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyAjax',
  data() {
    return {
      dataList: [
        {
          zonga: '· 了解客户端与服务器的通信过程,数据交互：请求处理响应;'
        },
        {
          zonga:
            '· 了解jQuery,axios,xhr中的Ajax发起的$.get(),$.post,$.ajax请求及书写方法;'
        },
        {
          zonga:
            '· 了解URL的概念及其组成部分,同样策略与跨域,接口文档及其使用方法,Postman测试接口;'
        },
        {
          zonga:
            '· 了解art-template模板引擎使用及其语法,XMLHttpRequest Level2的新功能;'
        },
        {
          zonga:
            '· 了解表单采集信息,Ajax负责将数据提交到服务器,解决表单同步的缺点;'
        },
        { zonga: '· 了解防抖和节流的应用场景区别;' },
        { zonga: '· 了解JSON的作用和本质,JSONP的作用和使用;' },
        { zonga: '· 了解HTTP协议,请求,响应,请求方法和响应状态.' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.ajax-container {
  // background-color: green;
  width: 100%;
  height: 100%;
  .dawai {
    display: flex;
    // flex-direction: column;
    // background-color: purple;
    width: 100%;
    height: 100%;
    .left {
      border-right: 0.14rem solid gray;
      display: flex;
      flex: 4;
      width: 100%;
      flex-direction: column;
      // border-bottom: 3px solid #000;
      // background-color: pink;
      ul {
        display: flex;
        flex: 1;
        // margin-top: 0.1rem;
        display: inline-block;
        width: 100%;
        align-items: center;
      }
      li {
        width: 100%;
        display: flex;
        flex: 1;
        // border-bottom: 1px solid #000;
        // font-size: 18px;
        font-weight: bolder;
      }
      li:hover {
        transform: scale(1.2);
        font-size: 0.2rem;
        color: #154864;
        justify-content: center;
        // text-shadow: 0px 0px 15px gainsboro;
      }
    }
  }
}
</style>
