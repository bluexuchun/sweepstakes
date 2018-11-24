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
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading'

export default {
  name: 'Home',
  components: {
    Loading
  },
  data() {
    return{
      title:'Yeezy 500 中签码已公布',
      isShow:true,
      recommand:{
        title:'新一代iPad Pro顶配版全套 正在登记中'

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
