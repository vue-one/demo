<template>
	<div class='man'>
		<div class="btn">
			<ol>
				<li @click='haoping' ref='haoping'>好评榜</li>
				<li @click='renqi' ref='renqi'>人气榜</li>
			</ol>
		</div>
		<div class='donghua'>
			<transition name='haoping'>
				<scroll ref='scroll' class="scrol">
					<div  v-show='flag'>
						<listbiao :data='manhaoping'></listbiao>
					</div>
				</scroll>
			</transition>
			
			<transition name='renqi'>
				<scroll ref='scroll2' class="scrol2">
					<div v-show='flag2'>
						<listbiao :data='manrenqi'></listbiao>
					</div>
				</scroll>
			</transition>
		</div>
		
	</div>
</template>

<script>
	// 引入组件
	import listbiao from '@/components/page/chen/listbiao.vue'
	//引滚动组件
	import scroll from '@/components/base/scroll.vue'
	export default{
		data(){
			return{
				// 男生好评
				manhaoping:[],
				// 男生人气
				manrenqi:[],
				// 滚动
				Bscroll:{},
				Bscroll2:{},
				flag:true,
				flag2:false
			}
		},
		created(){
			this.getData()
			setTimeout(()=>{
				this.init()
			},500)
		},
		mounted(){
			// 初始化时字体就改变
			this.$refs.haoping.style.fontWeight='bold'
			this.$refs.haoping.style.borderBottom='1px solid red'
		},
		methods:{
			// 获取数据
			getData() {
				this.axios.get('../../../static/bangdan.json').then((res) => {
						this.manhaoping = res.data.manhaoping
						console.log(this.manhaoping)	
						this.manrenqi = res.data.manrenqi
						console.log(this.manrenqi)
				})
			},
			// 滚动插件初始化
			init(){
				this.Bscroll=this.$refs.scroll.wrapper
				this.Bscroll2=this.$refs.scroll2.wrapper
			},
			// 点击好评出现好评页面，人气页面消失
			haoping(){
				this.flag2=false
				this.flag=true
				console.log(1)
				// 改变字体下划线
				this.$refs.haoping.style.fontWeight='bold'
				this.$refs.haoping.style.borderBottom='1px solid red'
				this.$refs.renqi.style.fontWeight=''
				this.$refs.renqi.style.borderBottom=''
			},
			// 点击人气出现人气页面,好评页面消失
			renqi(){
				this.flag=!this.flag
				this.flag2=!this.flag2
				console.log(2)
				// 改变字体下划线
				this.$refs.haoping.style.fontWeight=''
				this.$refs.haoping.style.borderBottom=''
				this.$refs.renqi.style.fontWeight='bold'
				this.$refs.renqi.style.borderBottom='1px solid red'
			}
		},
		// 注册
		components:{
			listbiao,
			scroll
		}
		
	}
</script>

<style lang='scss' scoped="">
	@import '@/assets/css/pxrem.scss';
	.btn{
		width:90%;
		margin:auto;
		ol{
			display: flex;
			height:px2rem(30);
			li{
				margin-right:px2rem(20);
				font-size:14px;
				margin-bottom:5px;
			}
		}
	}
	.scrol{
		height:calc(100vh - 5rem);
		overflow: hidden;
	}
	.scrol2{
		height:calc(100vh - 5rem);
		position:fixed;
		top:px2rem(77);
		left:0;
		overflow: hidden;
	}
	/* 点击好评/人气切换页面 */
	.haoping-enter,.haoping-leave-to{
		transform: translateX(0);
	}
	.haoping-enter-active,.haoping-leave-active{
		transition:1s;
	}
	.haoping-enter-to,.haoping-leave{
		transform: translateX(-100vw);
	}
	.renqi-enter,.renqi-leave-to{
		transform: translateX(-100vw);
		/* display: none; */
	}
	.renqi-enter-active,.renqi-leave-active{
		transition: 1s;
	}
	.renqi-enter-to,.renqi-leave{
		transform: translateX(0);
		/* display: block; */
	}
	
</style>
