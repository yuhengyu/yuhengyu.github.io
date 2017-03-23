import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './route.config.js'
import Vuex from 'vuex'
import store from './store/'
import loading from './components/Loading/'
import axios from 'axios'
import './assets/css/animate.css/animate.min.css'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(loading);

require('./assets/css/base.css');

axios.interceptors.request.use(function(request){
	store.dispatch('showLoading');
	return request;
},function(error){
	return Promise.reject(error);
});

axios.interceptors.response.use(function(response){
	store.dispatch('hideLoading');
	return response;
},function(error){
	return Promise.reject(error);
});

Vue.prototype.$http = axios;

const router = new VueRouter({
	scrollBehavior:() => ({y:0}),
	routes
});
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
