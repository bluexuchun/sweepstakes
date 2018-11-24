<style>
  .loading{
    width:100%;
    height:100%;
    position: fixed;
    top:0px;
    left:0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .icon-load{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.4)
  }
  .icon-img{
    width:45px;
    height:45px;
    animation: circle 2s ease infinite
  }
  @keyframes circle {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
</style>
<template>
  <div class="loading" v-show="isShow">
    <div class="icon-load">
      <img class="icon-img" src="../assets/imgs/loading.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    isShow:Boolean
  },
  data () {
    return {

    }
  }
}
</script>
