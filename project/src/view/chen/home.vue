<template>
	<div class="home">
		<ul>
			<span><</span>
			<li v-for='item,index in list' :class='{active:index==curindex}' @click='color(index)'>
				<router-link :to='{path:item.id}'>{{item.name}}</router-link>	
			</li>
		</ul>
		<router-view/>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{
						name:'男生频道',
						id:'man'
					},
					{
						name:'女生频道',
						id:'women'
					}
				],
				curindex:0
			}
		},
		methods:{
			color(index){
				this.curindex=index
			}
		}
	}
</script>

<style lang='scss' scoped="">
	@import '@/assets/css/pxrem.scss';
	.home ul{
		width:100%;
		height:px2rem(48);
		display: flex;
		align-items: center;
		padding-left:px2rem(100);
		position: relative;
		font-size:15px;
		li{
			width:px2rem(100);
		}
		li.active{
			font-size:18px;
			font-weight: bold;
		}
		span{
			position: absolute;
			left:px2rem(20);
		}
	}
</style>
