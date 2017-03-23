/*
* @Author: hasee
* @Date:   2017-03-23 09:26:26
* @Last Modified by:   hasee
* @Last Modified time: 2017-03-23 09:36:50
*/

'use strict';
import LoadingComponent from './Loading.vue'
import Vue from 'vue'
const loading = {
	install:function(Vue){
		Vue.component('Loading',LoadingComponent)
	}
}
export default loading;