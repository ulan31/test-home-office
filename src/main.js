import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Libraries
import './assets/sass/theme/index.scss'

//Components
import './components'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
