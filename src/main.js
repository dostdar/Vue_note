import Vue from 'vue'
import App from './App.vue'
import si from './components/si.vue'
Vue.config.productionTip = true
Vue.component("dir", si);
new Vue({
  render: h => h(App)
}).$mount('#app')
