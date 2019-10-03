<template>
  <transition name="fade">
    <div class="detail" v-show="show">
      <img :src="data1.imgs" alt="" class="bgImg">
      <div class="back" @click="back" :class="{'active': this.flag}"><</div>
      <scroll class="scroll" ref='box'>
        <div>
          <div class="con">
            <div class="titImg">
              <img :src="data1.imgs" alt="">
            </div>
            <div class="present">
              <h3>{{data1.title}}</h3>
              <p class="p1">{{data1.name}}<span>|</span>{{data1.type}}<span>|</span>{{data1.count}}万字</p>
              <p class="p2"><span>{{data1.type1}}</span><span>{{data1.type2}}</span></p>
              <p class="p3">
                <span class="score">{{data1.score}}分</span>
                <span class="person">{{data1.num}}万人气</span>
              </p>
            </div>
          </div>
          <div class="con1">
            <div class="jianshu">{{data1.describe}}</div>
            <div class="mulu" @click="popup">
              <h3>目录</h3>
              <div>
                <span>{{data1.type}},共{{data1.seal}}章</span>
                <span class="right">></span>
              </div>
            </div>
            <div class="liji">
              <img :src="data1.imgs" alt="">
              <div class="liCon">
                <p>{{data1.describe}}</p>
                <div class="liBottom">
                  <div class="left">
                    <span>广告</span>
                    <b>混沌之刃</b>
                  </div>
                  <div class="right">立即下载</div>
                </div>
              </div>
            </div>
            <div class="read">
              <h3>读这本书的人还在读</h3>
              <ul>
              	<li v-for="(item,index) in list" :key='index' @click="child()">
                  <img :src="item.imgs" alt="">
                  <p>{{item.name}}</p>
                  <span>{{item.num}}万人气</span>
                </li>
              </ul>
            </div>
            <a href="javascrit:;" class="text">版权信息：本书的数字版权由爱阅读提供并授权发行，如有任何疑问，请通过"我的-意见反馈"告知我们</a>
          </div>
        </div>
      </scroll>
      <mt-popup
        v-model="popupVisible"
        position="left">
        <div class="popup_top">
          <div class="tops">
            <div class="imgs"><img :src="data1.imgs" alt=""></div>
            <div class="tops_con">
              <h3>{{data1.title}}</h3>
              <p>{{data1.name}}</p>
            </div>
          </div>
          <div class="bottoms">
            <div class="bottom_left">
              共{{data1.count}}章<span>|</span>{{data1.type}}
            </div>
            <div class="bottom_right">正序</div>
          </div>
        </div>
        <scroll class="scroll1">
          <ul>
          	<li>
              <span class="zhangshu">第一章</span>
              <span class="neirong">羞辱</span>
            </li>
          </ul>
        </scroll>
      </mt-popup>
      <div class="foot">
        <div class="add" @click.prevent="add">{{!this.visible?'加入书架':'查看书架'}}</div>
        <div class="free">免费阅读</div>
      </div>
    </div>
  </transition>
</template>
<script>
  import Scroll from '@/components/base/scroll';
  import { Toast,Popup } from 'mint-ui';
  export default{
    name: 'detail',
    props:{
    	data1:{
    	  type: Object,
    	  default: ()=>{}
    	},
    	show:{
    		type: Boolean
    	},
      father: {
        type: Function,
        default: null
      }
    },
    components: {
      Scroll
    },
    data(){
      return{
        flag: false,
        visible: false,
        popupVisible: false,
        list: [],
        newList: []
      }
    },
    mounted() {
      this.getData();
      window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
    },
    methods:{
      back(){//点击返回详情页隐藏
        this.$emit('hide')
      },
      getData(){
        this.axios.get('/static/data/wang/list1.json').then(res => {
          this.list = res.data.data;
        })
      },
      // 加入书架
      add(){
        this.newList.push(this.data1);
        let obj = JSON.stringify(this.newList);
        console.log(obj);
        let instance = Toast('已加入书架');
        setTimeout(() => {
          instance.close();
        }, 2000);
        this.visible = true;
        localStorage.setItem('book',obj);
        setTimeout(() => {
          this.$router.push({
            path: '/book'
          })
        },4000)
      },
      handleScroll(){
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(scrollTop >= 50){
          this.flag = true;
        }else{
          this.flag = false;
        }
      },
      child() {
        if (this.father) {
          this.father();
        }
      },
      popup(){
        this.popupVisible = !this.popupVisible;
      }
    }
  }
</script>
<style lang="scss">
  @import '../../assets/css/pxrem.scss';
  .detail{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #fff;
    z-index: 100;
    &.fade-enter,&.fade-leave-to{
      transform: translateX(100vw);
    }
    &.fade-enter-active,&.fade-leave-active{
      transition: all 500ms;
    }
    &.fade-enter-to,&.fade-leave{
      transform: translateX(0);
    }
    img.bgImg{
      position: absolute;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      z-index: -1;
      filter: blur(10px);
    }
    .back{
      width: 100vw;
      height: px2rem(50);
      line-height: px2rem(50);
      color: #fff;
      font-size: 30px;
      margin-left: px2rem(30);
      &.active{
        background: #fff;
      }
    }
    .scroll{
      height: px2rem(600);
      overflow: hidden;
    }
    .con{
      display: flex;
      align-items: center;
      margin-left: px2rem(30);
      .titImg{
        width: px2rem(90);
        height: px2rem(120);
        border-radius: px2rem(8);
        margin-right: px2rem(20);
        img{
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }
      .present{
        flex: 1;
        h3{
          margin-bottom: px2rem(16);
        }
        .p1{
          color: #ccc;
          margin-bottom: px2rem(10);
          span{
            margin: 0 px2rem(10);
          }
        }
        .p2{
          color: #ccc;
          margin-bottom: px2rem(30);
          span:last-child{
            margin-left: px2rem(10);
          }
        }
        .p3{
          .score{
            display: inline-block;
            width: px2rem(80);
            height: px2rem(40);
            text-align: center;
            line-height: px2rem(40);
            color: #fff;
            font-size: 22px;
            font-weight: 500;
            margin-right: px2rem(20);
            background: orangered;
            border-radius: px2rem(20) 0 px2rem(20) 0;
          }
          .person{
            color: orangered;
            font-size: 16px;
          }
        }
      }
    }
    .con1{
      width: 100vw;
      padding: px2rem(85) px2rem(20) px2rem(20);
      margin-top: px2rem(-50);
      background: #fff;
      border-radius: px2rem(30) px2rem(30) 0 0;
      box-sizing: border-box;
      .jianshu{
        color: #999;
        font-size: 16px;
        padding: px2rem(30) px2rem(20);
        margin-bottom: px2rem(20);
        box-sizing: border-box;
        background: #f5f5f5;
      }
      .mulu{
        display: flex;
        justify-content: space-between;
        padding: px2rem(20);
        margin-bottom: px2rem(20);
        box-sizing: border-box;
        background: #f5f5f5;
        div{
          .right{
            margin-left: px2rem(16);
          }
        }
      }
      .liji{
        display: flex;
        height: px2rem(90);
        margin-bottom: px2rem(40);
        img{
          display: inline-block;
          width: px2rem(100);
          height: 100%;
        }
        .liCon{
          flex: 1;
          padding-left: px2rem(20);
          box-sizing: border-box;
          p{
            color: #999;
            font-size: 16px;
            line-height: px2rem(20);
            margin-bottom: px2rem(20);
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
          .liBottom{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left{
              span{
                display: inline-block;
                color: #fff;
                font-size: 14px;
                padding: px2rem(2) px2rem(4);
                box-sizing: border-box;
                background: #ccc;
              }
              b{
                font-size: 14px;
                font-weight: 400;
              }
            }
            .right{
              color: orangered;
              font-size: 14px;
            }
          }
        }
      }
      .read{
        margin-bottom: px2rem(40);
        h3{
          margin-bottom: px2rem(20);
        }
        ul{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          width: 100%;
          li{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            width: px2rem(100);
            margin-bottom: px2rem(20);
            img{
              display: inline-block;
              width: 100%;
              height: px2rem(140);
              margin-bottom: px2rem(10);
            }
            p{
              color: #000;
              font-size: 18px;
              white-space: nowrap;
              text-overflow:ellipsis;
              overflow:hidden;
              margin-bottom: px2rem(6);
            }
            span{
              color: #999;
              font-size: 14px;
            }
          }
        }
      }
      .text{
        color: #ccc;
        font-size: 16px;
        text-decoration: none;
      }
    }
    .mint-popup{
      width: 90%;
      height: 100%;
      background: rgb(249,236,210);
      .popup_top{
        width: 100%;
        height: px2rem(200);
        padding: px2rem(30) px2rem(20) px2rem(20);
        box-sizing: border-box;
        .tops{
          display: flex;
          margin-bottom: px2rem(10);
          .imgs{
            width: px2rem(75);
            height: px2rem(104);
            border-radius: px2rem(8);
          }
          .tops_con{
            flex: 1;
            margin-top: px2rem(10);
            margin-left: px2rem(15);
            h3{
              margin-bottom: px2rem(15);
            }
          }
        }
        .bottoms{
          display: flex;
          justify-content: space-between;
          .bottom_left{
            color: #999;
            span{
              display: inline-block;
              margin: 0 px2rem(10);
            }
          }
        }
      }
      .scroll1{
        height: px2rem(500);
        overflow: hidden;
        ul{
          height: px2rem(600);
          padding: 0 px2rem(25);
          background: rgb(228,216,192);
          box-sizing: border-box;
          li{
            height: px2rem(66);
            line-height: px2rem(66);
            border-bottom: px2rem(2) solid rgb(216,205,182);
          }
        }
      }
    }
    // 底部
    .foot{
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      width: 100vw;
      height: px2rem(60);
      .add{
        width: px2rem(140);
        height: 100%;
        line-height: px2rem(60);
        text-align: center;
        color: #000;
        font-size: 20px;
        background: #fff;
      }
      .free{
        flex: 1;
        line-height: px2rem(60);
        text-align: center;
        color: #fff;
        font-size: 20px;
        background: orangered;
      }
    }
  }
</style>
