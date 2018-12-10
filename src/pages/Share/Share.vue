<style lang="less" scoped>
@import '../../assets/css/common.less';
@import './Share.less';
@import '../../assets/css/media.css';
</style>
<template>
  <div class="share">
    <!-- <Loading v-bind:is-show="isShow"></Loading> -->
    <div class="share-box">
      <div class="share-word">
        <textarea class="share-textarea" placeholder="这一刻的想法..." rows="3"></textarea>
      </div>
      <ul class="share-img">
        <li class="img-item">
          <img class="icon-item" src="@/assets/imgs/banner-1.png" alt="">
        </li>
        <li class="img-item img-add">+</li>
      </ul>
    </div>

    <!-- 其他活动 -->
    <div class="main-other">
      <div class="other-title fontMbig">
        其他活动
      </div>
      <div v-for="item in other" class="main-group" style="margin-top:0rem;">
        <img class="group-img" v-bind:src="item.imgSrc" alt="">
        <div class="group-btn fontMiddle" v-bind:style="{background:item.btn_color,color:item.word_color,bottom:item.btn_bottom}">
          {{item.btn_word}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import pic from '@/assets/imgs/pic.png'

export default {
  name: 'Share',
  components: {
    Loading
  },
  data() {
    return{
      isShow:false,
      other:[
        {
          id:1,
          title:'新一代iPad Pro顶配版全套 正在登记中',
          imgSrc:pic,
          btn_word:'立即登记 >',
          btn_color:'#000',
          word_color:'#fff',
          btn_bottom:'2rem'
        },
        {
          id:2,
          title:'新一代iPad Pro顶配版全套 正在登记中',
          imgSrc:pic,
          btn_word:'点击立即抽奖 >',
          btn_color:'#fff',
          word_color:'#000',
          btn_bottom:'2rem'
        },
      ]
    }
  },
  created() {
  }
}
</script>
