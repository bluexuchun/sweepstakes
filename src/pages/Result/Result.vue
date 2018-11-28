<style lang="less" scoped>
@import '../../assets/css/common.less';
@import './Result.less';
@import '../../assets/css/media.css';
@import '../../assets/css/animate.css';
</style>
<template>
  <div class="result">
    <div class="result-success">
      <!-- 标题 -->
      <div class="success-legend">
        <img class="icon-success" src="@/assets/imgs/success.png" alt="">
        <div class="success-word">参与抽奖成功</div>
      </div>

      <!-- 抽奖内容 -->
      <div class="result-product">
        <img class="icon-product" src="@/assets/imgs/product.png" alt="">
        <div class="product-title textOverFlow1Lines fontMiddle">第一代iPad Pro顶配版全套</div>
      </div>
    </div>
  </div>
</template>
<script>
import Loading from '@/components/Loading'
export default {
  name: 'Result',
  components: {
    Loading
  },
  data() {
    return{

    }
  },
  created() {
    //do something after creating vue instance

  }
}
</script>
