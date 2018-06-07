// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import router from './router'
import localforage from 'localforage' //本地存储
import vueMoment from 'vue-moment' //时间格式化
import ElementUI from 'element-ui' //引用element-ui
import 'element-ui/lib/theme-chalk/index.css';
 
 
import locale from 'element-ui/lib/locale/lang/en'   

Vue.use(vueMoment)   
Vue.use(ElementUI,{locale})   
Vue.config.productionTip = false
// console.log(store.state)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
 
