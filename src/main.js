// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 需要引入此css文件
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui';
import Cookie from 'vue-cookie';
// import './assets/fonts/iconfont.css'
import '@/assets/font_1735505_4mmpuxm6h0r/iconfont.css'
import vueParticleLine from 'vue-particle-line'
import 'vue-particle-line/dist/vue-particle-line.css'
Vue.use(vueParticleLine)
Vue.use(ElementUI)
Vue.use(router)
Vue.config.productionTip = false
Vue.prototype.$cookie = Cookie
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
