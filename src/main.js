import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/index'
import VueResource from 'vue-resource'
import store from './store/store'
// import {createApp} from 'vue'

Vue.use(VueRouter)
Vue.use(VueResource)


const router = new VueRouter({
  routes,
  mode: 'history'
})

//
// const app = createApp(App)
// .use(router)
// // .use(store)
//
// router.isReady().then(()=>{
//   app.mount('#app')
// })

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
