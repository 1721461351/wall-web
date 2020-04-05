import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ElementUI from 'element-ui';
import Home from '@/components/pages/Home'
import BlogContent from '@/components/pages/BlogContent'
import WriterBlog from '@/components/pages/WriterBlog'
import Login from '@/components/pages/Login'

import mavonEditor from 'mavon-editor'
// import 'element-ui/lib/theme-chalk/index.css'
// 不要忘记引入mavonEditor的css样式
import 'mavon-editor/dist/css/index.css'

Vue.use(Router)
// markerdown的插件
Vue.use(mavonEditor)
// Vue.use(ElementUI)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/1',
      name: 'BlogContent',
      component: BlogContent
    },
    // 写文章
    {
      path: '/writerblog',
      name: 'WriterBlog',
      component: WriterBlog
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
