/*
* @Author: hasee
* @Date:   2017-03-21 15:51:45
* @Last Modified by:   hasee
* @Last Modified time: 2017-03-21 16:26:59
*/

'use strict';
import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import mutations from './mutations.js';


Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		mutations
	},
	actions
});