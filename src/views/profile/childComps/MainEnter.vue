<template>
  <div class="main-enter">
    <p>常用入口</p>
    <div class="main-icon">
      <div class="enter-icon">
          <img src="~assets/img/profile/erweima.png" alt="">
          <p>我的付款码</p>
      </div>
      <div class="enter-icon">
          <img src="~assets/img/profile/dingdan.png" alt="">
          <p>我的订单</p>
      </div>
      <div class="enter-icon">
          <img src="~assets/img/profile/yinliu.png" alt="">
          <p>我的引流</p>
      </div>
      <div class="enter-icon">
          <img src="~assets/img/profile/xiaofeimingxi.png" alt="">
          <p>消费明细</p>
      </div>
    </div>
    <div class="main-icon">
      <div class="enter-icon">
          <img src="~assets/img/profile/dizhi.png" alt="">
          <p>我的地址</p>
      </div>
      <div class="enter-icon">
          <img src="~assets/img/profile/pingjia.png" alt="">
          <p>评价管理</p>
      </div>
      <div class="enter-icon">
          <img src="~assets/img/profile/liulanjilu.png" alt="">
          <p>浏览记录</p>
      </div>
      <div class="enter-icon">
          <img src="~assets/img/profile/shoucang.png" alt="">
          <p>我的收藏</p>
      </div>
    </div>
    <div class="main-icon">
      <div class="enter-icon">
          <img src="~assets/img/profile/youhuiquan.png" alt="">
          <p>优惠卷</p>
      </div>
      <div class="enter-icon">
          <img src="~assets/img/profile/kabao.png" alt="">
          <p>卡包</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainEnter",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.main-enter{
    width: 90%;
    margin: 0 auto;
    font-size: 14px;
    color: #000;
    margin-top: 10px;
}
.main-icon{
    display: flex;
    padding: 10px 0px;
}
.main-icon .enter-icon{
    flex: 1;
    text-align: center;
}
.main-icon .enter-icon img{
    width: 32px;
    height: 32px;
}
</style>
