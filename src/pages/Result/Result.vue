<style lang="less" scoped>
@import '../../assets/css/common.less';
@import './Result.less';
@import '../../assets/css/media.css';
@import '../../assets/css/animate.css';
@import 'swiper/dist/css/swiper.min.css';
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

      <!-- 抽奖券 -->
      <div class="result-mydraws">
        <div class="mydraws-word textOverFlow1Lines fontMiddle">你的抽奖券：</div>
        <div class="mydraws-nums" v-on:click="toggleDraw()">
          <img class="icon-mydraws" src="@/assets/imgs/mycode.png" alt="">
          <div class="nums fontMiddle"> × 3 ></div>
        </div>
      </div>

      <!-- 点击多领抽奖券 -->
      <div class="result-btn fontMiddle">点击多领3张抽奖券</div>
    </div>
    <ul class="result-people">
      <li v-for="item in drawsNum" class="people-box">
        <template v-if="item == 2">
          <div class="showNum">2张</div>
          <img class="icon-people" src="@/assets/imgs/addcode.png" alt="">
          <div class="cir-empty"></div>
          <div class="cir-people"></div>
          <div class="word-people fontSmall">{{item}}人</div>
        </template>
        <template v-else-if="item == 4">
          <div class="showNum">3张</div>
          <img class="icon-people" src="@/assets/imgs/addcode.png" alt="">
          <div class="cir-empty"></div>
          <div class="cir-people"></div>
          <div class="word-people fontSmall">{{item}}人</div>
        </template>
        <template v-else-if="item == 8">
          <div class="showNum">4张</div>
          <img class="icon-people" src="@/assets/imgs/addcode.png" alt="">
          <div class="cir-empty"></div>
          <div class="cir-people"></div>
          <div class="word-people fontSmall">{{item}}人</div>
        </template>
        <template v-else-if="item == 15">
          <div class="showNum">6张</div>
          <img class="icon-people" src="@/assets/imgs/addcode.png" alt="">
          <div class="cir-empty"></div>
          <div class="cir-people"></div>
          <div class="word-people fontSmall">{{item}}人</div>
        </template>
        <template v-else-if="item == 30">
          <div class="showNum">10张</div>
          <img class="icon-people" src="@/assets/imgs/addcode.png" alt="">
          <div class="cir-empty"></div>
          <div class="cir-people"></div>
          <div class="word-people fontSmall">{{item}}人</div>
        </template>
        <template v-else>
          <img class="icon-people" src="@/assets/imgs/code.png" alt="">
          <div class="cir-empty"></div>
          <div class="cir-people"></div>
          <div class="word-people fontSmall">{{item}}人</div>
        </template>
      </li>
      <div class="result-line" v-bind:style="'width:'+(drawsNum * drawsWidth)+'%'"></div>
    </ul>
    <div class="result-tips fontMiddle">
      <div class="tips-current">
        下 1 位好友登记抽奖 = 再解锁 2 枚券
      </div>
      <div class="tips-more">
        邀请好友参与活动<br>
        可获得更多抽奖券哦
      </div>
    </div>
    <div class="result-success">
      <!-- 标题 -->
      <div class="success-legend">
        <div class="success-word">已登记好友</div>
      </div>

      <!-- 内容 -->
      <div class="nopeople">
        <div class="nopeople-word fontMiddle">你有 50 张抽奖券待领取，快去邀请好友登记吧</div>
        <img class="icon-empty" src="@/assets/imgs/empty.png" alt="">
      </div>

    </div>
    <!-- 倒计时 -->
    <div class="detail-progress">

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

      <img class="icon-progress" src="@/assets/imgs/step@3x.png" alt="">
      <div class="detail-rule fontMiddle" v-on:click="toggleRule()">查看抽签规则</div>
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

    <!-- 签到打卡 -->
    <div class="main-other">
      <div class="other-title fontMbig">
        签到打卡
      </div>
      <div class="sign-content swiper-container">
        <div class="swiper-wrapper">
          <div v-for="(item,index) in signs" class="swiper-slide">
            <div class="noSign" v-show="!item.isSign">
              <div class="noSign-btn">
                点击扫描打卡
              </div>
            </div>
            <img class="icon-swiper" v-bind:src="item.imgSrc" alt="">
          </div>
        </div>
      </div>
    </div>

    <!-- 抽签规则 -->
    <div class="rule" v-show="isShow">
      <div class="rule-box">
        <div class="rule-header fontMbig">
          抽签规则
          <div class="rule-close fontSbig" v-on:click="toggleRule()">x</div>
        </div>
        <div class="rule-content">
          内容
        </div>
      </div>
    </div>
    <!-- 我的抽奖券 -->
    <div class="mytickets" v-show="drawShow">
      <div class="mytickets-box">
        <div class="mytickets-header fontMbig">
          我的抽签码
          <div class="mytickets-close fontSbig" v-on:click="toggleDraw()">x</div>
        </div>
        <div class="mytickets-content fontBig">
          HQ3636835
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Loading from '@/components/Loading'
import pic from '@/assets/imgs/pic.png'
import Swiper from 'swiper'
export default {
  name: 'Result',
  components: {
    Loading
  },
  data() {
    return{
      // 抽奖次数
      drawsNum:50,
      // 宽度
      drawsWidth:24,

      isShow:false,

      drawShow:false,

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
      ],
      signs:[
        {
          id:1,
          imgSrc:pic,
          isSign:false
        },
        {
          id:2,
          imgSrc:pic,
          isSign:true
        },
        {
          id:3,
          imgSrc:pic,
          isSign:false
        }
      ]
    }
  },
  created() {

  },
  methods: {
    toggleRule() {
      if(this.isShow){
        this.isShow = false
      }else{
        this.isShow = true
      }
    },
    toggleDraw(){
      if(this.drawShow){
        this.drawShow = false
      }else{
        this.drawShow = true
      }
    }
  },
  mounted() {
    //do something after mounting vue instance
    var mySwiper = new Swiper('.swiper-container', {

    })
  }
}
</script>
