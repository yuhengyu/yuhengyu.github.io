<template>
	<div class="content">
		<Slider></Slider>
		<div class="newsList">
	    	<ul>
	            <li v-for="(item,index) in arrList">
	                <router-link :to="'/article/'+item.id">
	                	<h2>{{index+1}} . {{item.title}}</h2>
	                    <p>{{item.detail}}</p>
	                </router-link>
	            </li>
	        </ul>
	    </div>
	</div>
</template>
<script>
	import Slider from './Slider.vue'
	import axios from 'axios'
	export default {
		data(){
			return {
				arrList:[]
			}
		},
		components:{
			Slider
		},
		mounted(){
			this.fetchData();
		},
		methods:{
			fetchData(){
				var that = this;
				axios.get('../../data/index.data').then(function(res){
					that.arrList = res.data;
				});
			}
		}
	}
</script>