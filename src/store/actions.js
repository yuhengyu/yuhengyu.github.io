/*
* @Author: hasee
* @Date:   2017-03-21 15:51:32
* @Last Modified by:   hasee
* @Last Modified time: 2017-03-23 15:26:16
*/

'use strict';



export default {
	hideNav:({commit})=>{
		commit('hideNav');
	},
	showNav:({commit})=>{
		commit('showNav');
	},
	showLoading({commit}){
		commit('showLoading');
	},
	hideLoading({commit}){
		commit('hideLoading');
	},
	showFooter({commit}){
		commit('showFooter');
	},
	hideFooter({commit}){
		commit('hideFooter');
	}

}