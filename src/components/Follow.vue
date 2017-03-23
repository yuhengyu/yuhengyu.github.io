<template>
	<div id="follow">
		<div class="content mt40">
			<div class="newsList">
				<ul>
					<li v-for="(item, index) in arrList">
						<a href="javascript:;">
							<h2>{{index+1}} .{{item.title}}</h2>
							<p>{{item.detail}}</p>
						</a>
					</li>

				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		data(){
			return {
				arrList:''
			}
		},
		mounted(){
			this.getData();
		},
		methods:{
			getData(){
				axios.get('../../data/follow.data').then(function(res){
					this.arrList = res.data;
				}.bind(this));
			}
		}
	}
</script>
<style scoped>
	.mt40{
		margin-top:40px;
	}
</style>