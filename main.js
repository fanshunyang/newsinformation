import Vue from 'vue'
import App from './App'
import $http from './js_sdk/zhouWei-request/requestConfig.js';
import store from './stroe/index.js'
Vue.prototype.$http = $http;
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
