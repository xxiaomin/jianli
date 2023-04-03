import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import '@/css/base.css'
import Vant from 'vant'
import 'vant/lib/index.less'

Vue.config.productionTip = false

Vue.use(Vant)
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
