<template>
  <div class="book">
    <div class="bookTop">
      <div class="top_left">
        <img src="@/assets/img/wang/search.png" alt="">
        <img src="@/assets/img/wang/time.png" alt="" class="img1">
      </div>
      <h3 class="title">书架</h3>
      <span class="edit">编辑</span>
    </div>
    <scroll class='scroll'>
      <div>
        <div class="content">
          <div class="content_top">
            <img src="@/assets/img/wang/w5.png" alt="">
            <div>
              <h3>阴阳通灵师</h3>
              <p>原本我以为冥婚这样的事也就能发生在别人的身上或者发生在网络里，让我万万没想到是</p>
            </div>
          </div>
          <ul>
            <li v-for="(item,index) in book" :key='index'>
              <div>
                <!-- <span v-show="item.type">+</span> -->
                <img :src="item.imgs" alt="" v-show="item.type">
              </div>
              <p>{{item.title}}</p>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>
<script>
  import Scroll from '@/components/base/scroll'
  export default{
    name: 'book',
    data(){
      return{
        book: []
      }
    },
    components:{
      Scroll
    },
    created(){
      this.getData();
    },
    methods:{
      getData(){
        this.axios.get('/static/data/wang/book.json').then(res => {
          this.book = res.data.data;
        })
      }
    }
  }
</script>
<style lang="scss">
  @import '../../assets/css/pxrem.scss';
  .bookTop{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: px2rem(50);
    padding: 0 px2rem(14);
    box-sizing: border-box;
    .top_left{
      .img1{
        margin-left: px2rem(20);
      }
    }
    .edit{
      font-size: 14px;
      font-weight: 700;
    }
  }
  .scroll{
    height: px2rem(600);
    overflow: hidden;
    .content{
      height: 100%;
      padding: px2rem(10) px2rem(14) 0;
      box-sizing: border-box;
      .content_top{
        display: flex;
        justify-content: center;
        align-items: center;
        height: px2rem(78);
        img{
          width: px2rem(55);
          height: px2rem(75);
          margin-right: px2rem(22);
        }
        div{
          flex: 1;
          h3{
            font-size: 16px;
            margin-bottom: px2rem(12);
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
        }
      }
      ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: px2rem(45);
        li{
          width: px2rem(92);
          height: 100%;
          margin-bottom: px2rem(30);
          div{
            display: flex;
            justify-content: center;
            align-items: center;
            height: px2rem(126);
            margin-bottom: px2rem(10);
            border-radius: px2rem(4);
            &:first-child{
              color: #bcbcbc;
              background: #f8f8f8;
            }
          }
          p{
            white-space: nowrap;
            text-overflow:ellipsis;
            overflow:hidden;
          }
        }
      }
    }
  }
</style>
