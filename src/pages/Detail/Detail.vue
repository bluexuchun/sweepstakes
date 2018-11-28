<style lang="less" scoped>
@import '../../assets/css/common.less';
@import './Detail.less';
@import '../../assets/css/media.css';
@import '../../assets/css/animate.css';
</style>
<template>
  <div class="detail" v-bind:style="{background:theme.background}">
    <div class="detail-header">
      <img class="icon-header" src="@/assets/imgs/bg@3x.png" alt="">
    </div>
    <div class="detail-contents">
      <div class="banner banner1" v-bind:class="[bannerShow == 'banner1' ? 'bannerShow' : 'bannerHide']">
        <img src="@/assets/imgs/banner-1.png" alt="">
      </div>
      <div class="banner banner2" v-bind:class="[bannerShow == 'banner2' ? 'bannerShow' : 'bannerHide']">
        <img src="@/assets/imgs/banner-2.png" alt="">
      </div>
      <div class="banner banner3" v-bind:class="[bannerShow == 'banner3' ? 'bannerShow' : 'bannerHide']">
        <img src="@/assets/imgs/banner-3.png" alt="">
      </div>
    </div>
    <div class="detail-progress">
      <div class="detail-btn fontMiddle">点击抽取免费资格</div>
      <img class="icon-progress" src="@/assets/imgs/step@3x.png" alt="">
      <div class="detail-rule fontMiddle">查看抽签规则</div>
      <div class="detail-countdown">
        <div class="countdown">开奖倒计时</div>
        <div class="countdown-time fontSmall">开奖时间为：2018年12月12日 12:00</div>
        <div class="time-group">
          <div class="time-box">351</div>
          <div class="time-durat">:</div>
          <div class="time-box">33</div>
          <div class="time-durat">:</div>
          <div class="time-box">51</div>
        </div>
        <div class="box-filter"></div>
      </div>
    </div>

    <div class="detail-extra">自定义文本</div>

  </div>
</template>

<script>
import Loading from '@/components/Loading'
export default {
  name: 'Detail',
  components: {
    Loading
  },
  data() {
    return{
      bannerShow:'banner1',
      theme:{
        background:'#EDEDE3'
      },
      bannerLists:[
        {
          id:1,
          name:'banner1'
        },
        {
          id:2,
          name:'banner2'
        },
        {
          id:3,
          name:'banner3'
        }
      ]
    }
  },
  created() {
    //do something after creating vue instance
    let num = 0;
    setInterval(() => {
      num ++;
      if(num > 2){
        num = 0;
      }
      this.bannerShow = this.bannerLists[num].name
    },3000)
  }
}
</script>
