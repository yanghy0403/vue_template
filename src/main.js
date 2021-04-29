import Vue from 'vue'
import App from './App.vue'
import router from './router';
import './assets/style/global.scss'

//引入 iview
import iView from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(iView);

import axios from 'axios'
Vue.prototype.axios = axios;
axios.defaults.baseURL = process.env.VUE_APP_URL;
// axios.defaults.headers.get["Content-Type"] = "application/x-www-form-urlencoded"
import qs from 'qs'
Vue.prototype.qs = qs;

//echarts
import echarts from 'echarts';
Vue.prototype.echarts = echarts;


//适配
import './utils/flexible.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
