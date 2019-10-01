<template>
  <div class="find">
    <div class="top">
      <h1>发现好书</h1>
      <p>根据兴趣为您推荐精选好书</p>
    </div>
    <Scroll class="bottom">
      <ul class="list" ref="ulwidth">
      	<li v-for="(item,index) in data" ref="liwidth">
          <div class="listTop">
            <img :src="item.imgs" alt="">
            <h2>{{item.title}}</h2>
            <p>{{item.author}}</p>
          </div>
          <div class="listBottom">
            <p>{{item.info}}</p>
             <button>免费阅读</button>
          </div>
        </li>
      </ul>
    </Scroll>
  </div>
</template>

<script>
  import Scroll from '@/components/base/scroll'
  export default{
    data(){
      return{
        data:[]
      }
    },
    components:{
      Scroll
    },
    methods:{
      getData(){
        this.axios.get('../../../static/over.json').then((response)=> {
            console.log(response.data);
            this.data=response.data
          })
      },
      inif(){
        //获取每个li的宽度
        let width=this.$refs.liwidth[0].offsetWidth
        //获取每个li的边距
        let margin=parseFloat(window.getComputedStyle(this.$refs.liwidth[0]).marginLeft)
        //获取有多少条数据
      	let length=this.data.length
        //动态设置ul的宽
      	this.$refs.ulwidth.style.width=((width+margin*2+1)*length)/16+"rem"
      }
    },
    created() {
      this.getData()
      //动态设置ul的宽,加一个延时,等数据加载完以后在设置
      setTimeout(()=>{
      	this.inif()
      },300)
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/reset.css";
  @import "../../assets/css/pxrem.scss";
  *{margin: 0;padding: 0;}
  .find{height: 90vh;}
  .top{margin-left: px2rem(22);}
  .top h1{font-size: px2rem(38);font-weight: normal;}
  .top p{color: #999;margin-top: px2rem(6);}
  .bottom{margin-top: px2rem(25);overflow:hidden;}
  .list{height: 72vh;width: 777vw;}
  .list li{width: 86vw;margin: 0 5.5vw;height: 72vh;border-radius: 10px;overflow: hidden;box-shadow: 0px 1px 3px #dbdbdb;float:left}
  .list li .listTop{width: 100%;height: 58%;background: #474541;color:#dbdada;text-align: center;}
  .list li .listTop img{width: px2rem(112);height: px2rem(156);margin-top: px2rem(22);}
  .list li .listTop h2{font-size: px2rem(22);margin-top: px2rem(20);}
  .list li .listBottom{width: 100%;height: 42%;background: #fff;}
  .list li .listBottom p{width: 78%;margin: px2rem(34) auto;-webkit-line-clamp:3;display: -webkit-box;-webkit-box-orient:vertical;overflow:hidden;text-overflow: ellipsis;}
  .list li .listBottom button{width: 85%;height: px2rem(50);margin:0 auto;display: block;border: 0;outline: none;background: #fff1e7;color:#ff8f43;border-radius: px2rem(25);font-weight: bold;}
</style>
