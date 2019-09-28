<template>
	<div ref="wrapper"><slot></slot></div>
</template>

<script>
	import Bscroll from 'better-scroll';
	export default{
		data(){
			return{
				wrapper:{}
			}
		},
		methods:{
			init(){
				this.wrapper=new Bscroll(this.$refs.wrapper,{click:true,probeType:3,scrollX:true,scrollY:true})
			}
		},
		mounted(){
			setTimeout(()=>{
				this.init()
			},100)
		}
	}
</script>

<style>
</style>
