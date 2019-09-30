<template>
  <div class="over">
    <div class="top">
      <span class="back"><</span>
      <span>完本列表</span>
    </div>
    <ul class="list">
    	<li v-for="(item,index) in data">
        <img class="listImg" :src="item.imgs" alt="">
        <div class="listInfo">
          <p class="title">{{item.title}}</p>
          <p class="info">{{item.info}}</p>
          <p>
            <span class="author">{{item.author}}</span>
            <span class="people"><i>{{item.people}}</i>万人气</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        data:[]
      }
    },
    methods:{
      getData(){
        this.axios.get('../../../static/over.json').then((response)=> {
            console.log(response.data);
            this.data=response.data
          })
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/reset.css";
  @import "../../assets/css/pxrem.scss";
  .top{font-size: px2rem(20);font-weight: bold;text-align: center;position: fixed;top: 0;left: px2rem(10);height: px2rem(48);width:100vw;line-height: px2rem(48);background: white;}
  .back{position: absolute;left: 0;}
  .list{margin-top: px2rem(48);}
  .list li{display: flex;margin-bottom: px2rem(22);}
  .list li .listImg{display: block;width:px2rem(75);height: px2rem(102);}
  .list li .listInfo{margin-left: px2rem(16);width: px2rem(260);}
  .list li .listInfo .title{font-size: px2rem(18);font-weight: bold;}
  .list li .listInfo .info{-webkit-line-clamp:2;display: -webkit-box;-webkit-box-orient:vertical;overflow:hidden;text-overflow: ellipsis;color: #999;}
  .list li .listInfo p:last-child{margin-top: px2rem(10);font-size: px2rem(14);}
  .list li .listInfo .author{color: #999;float: left;}
  i{font-style: normal;}
  .list li .listInfo .people{float: right;background: #ffefe5;color: #ff6b06;padding: px2rem(3);}
</style>
