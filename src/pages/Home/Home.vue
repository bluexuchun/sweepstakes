<style lang="less" scoped>
@import './Home.less';
</style>
<template>
  <div id="home">
    <Loading v-bind:is-show="isShow"></Loading>
    <div class="main">
      <!-- 头部标题 -->
      <div class="main-header">
        <div class="header-title textOverFlow2Lines fontBig">
          {{title}}
        </div>
        <div class="header-check fontSmall">
          查看抽奖结果
        </div>
      </div>

      <!-- 活动次标题 (推荐)-->
      <div class="main-group">
        <div class="group-title textOverFlow2Lines fontMiddle">
          {{recommand.title}}
        </div>
        <img class="group-img" v-bind:src="recommand.imgSrc" alt="">
        <div class="group-btn fontMiddle" v-bind:style="{background:recommand.btn_color,color:recommand.word_color,bottom:recommand.btn_bottom}">
          {{recommand.btn_word}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import pic from '@/assets/imgs/pic.png'

export default {
  name: 'Home',
  components: {
    Loading
  },
  data() {
    return{
      title:'Yeezy 500 中签码已公布',
      isShow:false,
      recommand:{
        title:'新一代iPad Pro顶配版全套 正在登记中',
        imgSrc:pic,
        btn_word:'立即登记',
        btn_color:'#000',
        word_color:'#fff',
        btn_bottom:'2rem'
      }
    }
  },
  created() {
    //do something after creating vue instance
    // setTimeout(() => {
    //   this.isShow = false
    // },2000)
  }
}
</script>
