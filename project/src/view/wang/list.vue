<template>
  <div class="box">
    <div class="top">
      <i class="back"><</i>
      <span class="topTitle">精选主题</span>
    </div>
    <div class="bottom">
      <scroll class="listScroll">
        <div class="content">
          <ul>
            <li v-for="(item,index) in list" :key='index'>
              <img :src="item.imgs" alt="" @click='detail(item)'>
              <div class="listCon">
                <h3>{{item.title}}</h3>
                <p>{{item.describe}}</p>
                <div class="bottom">
                  <span class="name">{{item.name}}</span>
                  <span class="renqi">{{item.num}}万人气</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </scroll>
    </div>
    <detail :data1='newList' :show='visible' @hide='isShow'></detail>
  </div>
</template>
<script>
  import Scroll from '@/components/base/scroll';
  import detail from '@/components/base/detail';
  export default{
    name: 'list',
    data(){
      return{
        list: [],
        newList: {},
        visible: false
      }
    },
    components:{
      Scroll,
      detail
    },
    created(){
      this.getData();
    },
    methods:{
      getData(){
        this.axios.get('/static/data/wang/list.json').then(res => {
          this.list = res.data.data
        })
      },
      detail(item){
        this.newList = item;
        this.visible = true;
      },
      isShow(value){//显示和隐藏
      	this.visible = value;
      }
    }
  }
</script>
<style lang="scss">
  @import '../../assets/css/pxrem.scss';
  .box{
    overflow: hidden;
    .top{
      display: flex;
      align-items: center;
      height: px2rem(50);
      color: #000;
      font-size: 20px;
      i{
        display: inline-block;
        font-style: normal;
        margin-left: px2rem(22);
      }
      span{
        display: inline-block;
        padding-left: px2rem(118);
        box-sizing: border-box;
      }
    }
    .listScroll{
      height: px2rem(600);
      overflow: hidden;
    }
    .content{
      padding: px2rem(10) px2rem(16) 0;
      box-sizing: border-box;
      ul{
        height: 100%;
        overflow: hidden;
        li{
          display: flex;
          justify-content: center;
          align-items: center;
          height: px2rem(110);
          margin-bottom: px2rem(20);
          img{
            display: inline-block;
            width: px2rem(74);
            height: 100%;
            margin-right: px2rem(12);
          }
          .listCon{
            flex: 1;
            height: 100%;
            h3{
              font-weight: 600;
            }
            p{
              color: #999;
              font-size: 14px;
              line-height: px2rem(26);
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
            .bottom{
              display: flex;
              justify-content: space-between;
              align-items: center;
              .name{
                color: #999;
                font-size: 14px;
              }
              .renqi{
                display: inline-block;
                color: #ff7c23;
                font-size: 14px;
                background: #ffefe5;
                border-radius: px2rem(4);
                padding: px2rem(5);
                box-sizing: border-box;
              }
            }
          }
        }
      }
    }
  }
</style>
