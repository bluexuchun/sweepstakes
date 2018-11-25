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
        <div class="header-check fontSsmall">
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

      <!-- 具体抽奖流程 -->
      <div class="main-progress">
        <div class="progress-title fontSbig">
          以下是具体抽签流程
        </div>
        <div class="progress-tips fontSmall">
          <span>本期共有{{drawsInfo.nums}}名用户获得</span>
          <span>{{drawsInfo.title}}</span>
        </div>
        <div class="progress-warn">
          <img class="icon-warn" src="@/assets/imgs/warn.png" alt="">
          <div class="warn-word fontSmall">查看详细抽签规则</div>
        </div>
        <!-- 步骤1 -->
        <div class="progress-group">

          <div class="group-title">
            <div class="group-no">
              1
            </div>
            <div class="group-box">
              <div class="box-title fontMbig textOverFlow1Lines">取最近 1 期纳斯达克 & 道琼斯指数</div>
              <div class="box-result fontSmall">结果如下：</div>
            </div>
          </div>

          <div class="group-index">
            <div class="index-name fontSsmall">
              <div class="namefornsdk">
                <span class="circle-nsdk"></span>
                <div class="name-nsdk">纳斯达克</div>
              </div>
              <div class="namefordqs">
                <span class="circle-dqs"></span>
                <div class="name-dqs">道琼斯</div>
              </div>
            </div>
            <div class="index-data">
              <div class="data-date fontSsmall">
                2018.11.09
              </div>
              <div class="data-content fontSbig">
                <span class="data-nsdk">740690</span>
                <span class="data-dqs">2598930</span>
              </div>
            </div>
            <div class="index-from fontMiddle">
              <div class="from-title">
                参考数据来源：
              </div>
              <div class="from-url">
                https://www.nasdaq.com
              </div>
              <div class="from-url">
                https://www.dowjones.com
              </div>
            </div>
          </div>
        </div>

        <!-- 步骤2 -->
        <div class="progress-group">

          <div class="group-title">
            <div class="group-no">
              2
            </div>
            <div class="group-box">
              <div class="box-title fontMbig textOverFlow1Lines">取本次活动最终总签数量</div>
              <div class="box-result fontSmall">结果如下：</div>
            </div>
          </div>

          <div class="group-index">
            <div class="index-draw">
              <div class="draw-time fontSmall">
                截至 2018 年 11 月 11 日 20:00:00 共产生
              </div>
              <div class="draw-drawsNum">
                <span class="drawnumbs">138285</span>
                <div class="drawword fontSmall">
                  张 抽签码
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 步骤3 -->
        <div class="progress-group">

          <div class="group-title">
            <div class="group-no">
              3
            </div>
            <div class="group-box">
              <div class="box-title fontMbig textOverFlow1Lines">两者相除产生的余数即为本期中签号</div>
            </div>
          </div>

          <div class="group-index">
            <div class="index-result">
              <div class="result-title fontMiddle">
                <div class="title-name">
                  中签用户
                </div>
                <div class="title-draw">
                  抽奖码
                </div>
              </div>
              <div class="result-user fontMbig">
                <div class="userinfo">
                  <img class="userava" src="@/assets/imgs/ava.png" alt="">
                  <div class="username">迷***南</div>
                </div>
                <div class="drawinfo fontBig">
                  HQ117350
                </div>
              </div>
              <div class="result-column fontSmall">
                <div class="result-way">
                  7406902598930 ÷ 138285
                </div>
                <div class="result-final">
                  余数为：117350
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="noDraw fontMiddle">
          你未参与本期抽奖<br>
          查看下方活动立即登记
        </div>
      </div>

      <!-- 其他活动 -->
      <div class="main-other">
        <div class="other-title fontMbig">
          其他活动
        </div>
        <div v-for="item in otherActivity" class="main-group" style="margin-top:0rem;">
          <img class="group-img" v-bind:src="item.imgSrc" alt="">
          <div class="group-btn fontMiddle" v-bind:style="{background:item.btn_color,color:item.word_color,bottom:item.btn_bottom}">
            {{item.btn_word}}
          </div>
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
      },
      drawsInfo:{
        nums:1,
        title:'Adidas Origninals YEEZY 500'
      },
      otherActivity:[
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
    //do something after creating vue instance
    // setTimeout(() => {
    //   this.isShow = false
    // },2000)
  }
}
</script>
