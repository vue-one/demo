<template>
	<div class="listbiao">
		<div class="box" v-for='(item,index) in data'>
			<div class="box-content">
				<div class="left">
					<img :src="item.imgs" alt="">
				</div>
				<div class="right">
					<div class='top'>
						<h3>{{item.title}}</h3>
						<span><em>{{item.score}}</em>分</span>
					</div>
					<p>{{item.info?item.info.substr(0,35)+'...':''}}</p>
					<div class="bottom">
						<div class="author">{{item.author}}</div>
						<div class="renqi">{{item.people}}万人气</div>
					</div>
				</div>
				<div class='num' :class='{red:index=="0"}'>
					{{item.ci}}
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			data:{
				type:Array,
				default:()=>[]
			}
		}
	}
</script>

<style scoped="" lang='scss'>
	@import '@/assets/css/pxrem.scss';
	.box{
		width:100%;
		margin-bottom:px2rem(35);
		padding-top:px2rem(1);
		.box-content{
			width:90%;
			height:px2rem(110);
			margin:auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: relative;
			.num{
				color:#fff;
				position: absolute;
				top:0;
				left:0;
				font-size:15px;
				padding:0 4px;
				background:#ccc;
			}
			.num.red{
				background:red;
			}
			.left{
				width:px2rem(77);
				height:px2rem(110);
				margin-right:px2rem(13);
				img{
					width:100%;
					height:100%;
				}
			}
			.right{
				flex: 1;
				.top{
					display: flex;
					justify-content: space-between;
					margin-bottom:px2rem(10);
					h3{
						font-size:16px
					}
					span{
						color:red;
						em{
							font-size:15px;
							font-weight: bold;
						}
					}
				}
				p{
					color:#ccc;
				}
				.bottom{
					display: flex;
					justify-content: space-between;
					margin-top:px2rem(15);
					color:#ccc;
					.renqi{
						color:red;
						padding:px2rem(2) px2rem(8);
						background:rgb(255,239,229);
					}
				}
			}
		}
	}
	
</style>
