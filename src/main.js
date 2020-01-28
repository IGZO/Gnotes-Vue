import Vue from 'vue'
import App from './App'
import router from './router'
import VueSession from 'vue-session'

Vue.use(VueSession)
Vue.prototype.BaseUrl = 'https://gnotes-api-app.herokuapp.com/api/'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
