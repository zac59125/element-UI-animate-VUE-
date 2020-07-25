// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'

import '@/assets/css/reset.css'
import '@/assets/css/pub.scss'  
import "@/assets/css/animate.css"
// import 'lib-flexible/flexible.js'

import axios from 'axios'

import $elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import store from './store'

Vue.config.productionTip = false
Vue.use($elementUi)
Vue.prototype.$axios=axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  axios,
  router,
  components: { App },
  template: '<App/>'
})

// router.beforeEach((from,to,next)=>{
      
//       history.pushState(null, null, location.href)
 
// })