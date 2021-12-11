import Vue from 'vue'
import App from './App.vue'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)// 将element提供的组件进行全局注册 Vue.component(xxx, yyy)
Vue.config.productionTip = false

window.store = store

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
