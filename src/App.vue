<template>
  <div class="body">
    <router-view></router-view>
  </div>
</template>

<script>
// import MobilePC from '@/components/InterFace/MobilePC/MobilePC.vue'
// import Mobile from '@/components/InterFace/Mobile/Mobile.vue'
// import PC from '@/components/InterFace/PC/PC.vue'
export default {
  name: 'MyApp'
  // data() {
  //   return {
  //     screenWidth: 0
  //   }
  // },
  // components: {
  // Mobile,
  // PC
  // MobilePC
  // }
  // created() {
  //   this.isPCNot()
  // },
  // watch: {
  //   screenWidth: {
  //     handler(val, oldVal) {
  //       if (val < 750) {
  //         this.isPC = false
  //         console.log('mobile')
  //       } else {
  //         this.isPC = true
  //         console.log('PC')
  //       }
  //       console.log(this.isPC)
  //     }
  //   }
  // },
  // mounted() {
  //   this.screenWidth = document.body.clientWidth
  //   window.onresize = () => {
  //     return (() => {
  //       this.screenWidth = document.body.clientWidth
  //     })()
  //   }
  // },
  // methods: {
  //   isPCNot() {
  //     const userAgentInfo = navigator.userAgent
  //     const Agents = [
  //       'Android',
  //       'iPhone',
  //       'SymbianOS',
  //       'Windows Phone',
  //       'iPad',
  //       'iPod'
  //     ]
  //     let flag = true
  //     for (let v = 0; v < Agents.length; v++) {
  //       if (userAgentInfo.indexOf(Agents[v]) > 0) {
  //         flag = false
  //         break
  //       }
  //       console.log('PC')
  //     }
  //     return flag
  //   }
  // }
}
</script>

<style lang="less" scoped>
// @media screen and (max-width: 750px) {
//   .body {
//     width: 90%;
//     margin: 0 auto;
//     background-color: #f1f1f1;
//   }
// }

// @media screen and (min-width: 750px) {
//   .body {
//     margin: 0 auto;
//     width: 50%;
//     background-color: #f1f1f1;
// }
// }
</style>
