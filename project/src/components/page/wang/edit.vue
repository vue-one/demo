<template>
  <transition name="slide">
    <div class="edit" v-show="show">
      <div class="select">
        <h3 @click="allCheck">{{!isAllCheck?'全选':'取消全选'}}</h3>
        <h4 @click="back">取消</h4>
      </div>
      <ul>
      	<li v-for="(item,index) in book" :key='index'>
      	  <div>
      	    <img :src="item.imgs" alt="">
            <input type="checkbox" :checked='checkIndex.indexOf(index)==-1?false:true' @click="change(index)">
      	  </div>
      	  <p>{{item.title}}</p>
      	</li>
      </ul>
      <div class="remove" @click="remove" :class="{'active': this.checkIndex.length}">
        <p>删除已选({{this.checkIndex.length}})</p>
      </div>
    </div>
  </transition>
</template>
<script>
  export default{
    name: 'edit',
    props:{
    	show:{
    		type: Boolean
    	}
    },
    data(){
      return{
        book: JSON.parse(localStorage.getItem('book')) || [],
        isAllCheck: false,
        checkIndex: []
      }
    },
    methods:{
      back(){//点击返回详情页隐藏
        this.$emit('hide')
      },
      // 全选/取消全选
      allCheck(){
        if(!this.isAllCheck){
          this.isAllCheck = true;
          this.book.forEach((item,index) => {
            this.checkIndex.push(index)
          })
        }else{
          this.isAllCheck = false;
          this.checkIndex = [];
        }
      },
      // 单选
      change(index){
        this.checkIndex.indexOf(index) == -1 ? this.checkIndex.push(index): this.checkIndex.splice(this.checkIndex.indexOf(index),1);
        this.isAllCheck = (this.book.length==this.checkIndex.length);
      },
      //删除
      remove(){
        this.checkIndex.forEach((item,index) => {
          this.book.splice(item,1);
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../../assets/css/pxrem.scss';
  .edit{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 0 px2rem(14);
    box-sizing: border-box;
    background: #fff;
    z-index: 100;
    &.slide-enter,&.slide-leave-to{
      transform: translateX(100vw);
    }
    &.slide-enter-active,&.slide-leave-active{
      transition: all 500ms;
    }
    &.slide-enter-to,&.slide-leave{
      transform: translateX(0);
    }
    .select{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: px2rem(50);
      h4{
        font-size: 18px;
      }
    }
    ul{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li{
        width: px2rem(92);
        height: 100%;
        margin-bottom: px2rem(30);
        div{
          position: relative;
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
          span{
            font-size: 26px;
          }
          img{
            display: inline-block;
            width: 100%;
            height: 100%;
          }
          input[type="checkbox"]{
            position: absolute;
            top: px2rem(12);
            right: px2rem(4);
            width: px2rem(20);
            height: px2rem(20);
            border: 2px solid #fff;
            border-radius: 50%;
            &.active{
              color: #fff;
              background: orange;
            }
          }
        }
        p{
          white-space: nowrap;
          text-overflow:ellipsis;
          overflow:hidden;
        }
      }
    }
    .remove{
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100vw;
      height: px2rem(74);
      text-align: center;
      line-height: px2rem(74);
      background: #ccc;
      &.active{
        background: orangered;
        p{
          color: #fff;
        }
      }
      p{
        font-size: 20px;
        color: #999;
      }
    }
  }
</style>
