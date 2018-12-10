<style lang="less" scoped>
@import '../../assets/iconfont/iconfont.css';
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
      <div class="detail-btn fontMiddle" v-on:click="toggleChoice()">点击抽取免费资格</div>
      <img class="icon-progress" src="@/assets/imgs/step@3x.png" alt="">
      <div class="detail-rule fontMiddle" v-on:click="toggleRule()">查看抽签规则</div>
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

    <!-- 选择尺码 -->
    <div class="choice" v-show="choiceShow">
      <div class="choice-box" v-bind:class="[theme.mode == 2 ? 'choice-boxspe':'']">
        <div class="choice-header fontMbig">
          {{choiceTitle}}
          <div class="choice-close fontSbig" v-on:click="toggleChoice()">x</div>
        </div>
        <div class="choice-content">
          <div class="choice-choosetype" v-show="theme.mode == 1">
            <div class="choice-typeheader">
              <div class="choice-type fontMiddle">{{typeTitle}}</div>
              <div class="choice-ischoose fontSmall">已选：{{types[typeIndex].title}}</div>
            </div>
            <ul class="choice-typecontent">
              <li v-for="(item,index) in types" class="choice-item" v-bind:class="[typeIndex == index ? 'choosed-item' : '']" v-on:click="choosetype(index)">
                <img class="icon-choice" v-bind:src="item.img" alt="">
                <i class="icon iconfont icon-choose"></i>
              </li>
            </ul>
          </div>
          <div class="choice-choosetypespe" v-show="theme.mode == 2">
            <ul class="choice-typecontentspe">
              <li v-for="(item,index) in types" class="choice-itemspe" v-bind:class="[typeIndex == index ? 'choosed-item' : '']" v-on:click="choosetype(index)">
                <img class="icon-choice" v-bind:src="item.img" alt="">
                <i class="icon iconfont icon-choose"></i>
              </li>
            </ul>
          </div>
          <div class="choice-choosesize" v-show="theme.mode == 1">
            <div class="choosesize-header">
              <div class="choose-size fontMiddle">{{sizeTitle}}</div>
              <div class="choose-isSize fontSmall">已选：{{size[sizeIndex]}}</div>
            </div>
            <ul class="choose-sizegroup">
              <li v-for="(item,index) in size" class="choose-sizeitem" v-bind:class="[sizeIndex == index ? 'chosed-sizeitem' : '']" v-on:click="choosesize(index)">
                {{item}}
              </li>
            </ul>
          </div>
        </div>
        <div class="choice-footer">
          <div class="choice-btn fontMbig">提交</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
// 图片暂时使用 之后用链接图片直接替换下面的Imgs就好
import banner1 from '@/assets/imgs/banner-1.png'
import banner2 from '@/assets/imgs/banner-2.png'
import banner3 from '@/assets/imgs/banner-3.png'
export default {
  name: 'Detail',
  components: {
    Loading
  },
  data() {
    return{

      bannerShow:'banner1',
      theme:{
        // 整体背景颜色
        background:'#EDEDE3',
        // 模式 1 有尺寸 2 没尺寸
        mode:2
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
      ],
      isShow:false,
      choiceShow:false,
      // 选择的标题
      choiceTitle:"选择你想要的鞋款和尺码",
      // 尺寸的选择
      sizeIndex:0,
      // 尺寸的标题
      sizeTitle:"尺码",
      // 尺寸的所有规格
      size:['36','36.5','37','38','38.5','39','40','40.5','41','42','42.5','43','44','44.5','45','45.5','46'],

      // 选择类型
      typeIndex:0,
      //选择的标题
      typeTitle:"鞋款",
      // 类型的所有规格
      types:[
        {
          id:1,
          img:banner1,
          title:'经典Wave Runner'
        },
        {
          id:2,
          img:banner2,
          title:'棕色Mauve'
        },
        {
          id:3,
          img:banner3,
          title:'白色Static'
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
  },
  methods: {
    toggleRule() {
      if(this.isShow){
        this.isShow = false
      }else{
        this.isShow = true
      }
    },
    toggleChoice(){
      if(this.choiceShow){
        this.choiceShow = false
      }else{
        this.choiceShow = true
      }
    },
    choosetype(index){
      this.typeIndex = index
    },
    choosesize(index){
      this.sizeIndex = index
    }
  }
}
</script>
