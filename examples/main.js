import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


// 导入组件库

//本地
import jciui from '../packages/index'

//线上
//import jciui from 'jci-ui'
//import 'jci-ui/lib/jci-ui.css'
// 注册组件库
Vue.use(jciui)


new Vue({
  render: h => h(App),
}).$mount('#app')
