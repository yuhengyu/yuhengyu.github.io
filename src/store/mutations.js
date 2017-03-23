/*
* @Author: hasee
* @Date:   2017-03-21 15:52:05
* @Last Modified by:   hasee
* @Last Modified time: 2017-03-23 15:27:30
*/

'use strict';

const state = {
	navShow:true,
	loading:false,
	footer:true
}

const mutations = {
	hideNav(state){
		state.navShow = false;
	},
	showNav(state){
		state.navShow = true;
	},
	hideLoading(state){
		state.loading = false;
	},	
	showLoading(state){
		state.loading = true;
	},
	showFooter(state){
		state.footer = true;
	},
	hideFooter(state){
		state.footer = false;
	}
}

const getters = {
	isNavShow(state){
		return state.navShow
	},
	loadingState(state){
		return state.loading;
	},
	footerState(state){
		return state.footer;
	}
}

export default {
	state,
	mutations,
	getters
}
