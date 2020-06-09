import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


// 导入组件库
import jciui from '../packages/index'
import '../packages/theme-default/index.less'
// 注册组件库
Vue.use(jciui)


new Vue({
  render: h => h(App),
}).$mount('#app')
