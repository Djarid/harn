import LogRocket from 'logrocket'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

LogRocket.init('ahettx/harn-d')

Vue.config.productionTip = false

// Create global filter
Vue.filter('snippet', val => {
  if (!val || typeof(val) != 'string') return ''
  val = val.slice(0,50) + '...'
  return val
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
