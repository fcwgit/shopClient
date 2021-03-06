// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vant from 'vant'
// import 'vant/lib/vant-css/index.css'
// import VueAwesomeSwipe from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
// Vue.use(Vant)

// 按需引入
import {Button,Row,Col,Swipe,SwipeItem,Lazyload,List} from 'vant'
// Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(VueAwesomeSwipe)
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
