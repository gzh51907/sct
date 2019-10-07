<template>
  <div class="vice-enter">
    <p>辅助入口</p>
    <div class="vice-icon">
      <div class="enter-icon">
          <img src="~assets/img/profile/erweima.png" alt="">
          <p>分享二维码</p>
      </div>
      <div class="enter-icon">
          <img src="~assets/img/profile/jifen.png" alt="">
          <p>积分</p>
      </div>
      <div class="enter-icon">
          <img src="~assets/img/profile/lvyoutousu.png" alt="">
          <p>旅游投诉</p>
      </div>
      <div class="enter-icon">
          <img src="~assets/img/profile/yijianfankui.png" alt="">
          <p>意见反馈</p>
      </div>
    </div>
    <div class="vice-icon">
      <div class="enter-icon">
          <img src="~assets/img/profile/ruzhushenqing.png" alt="">
          <p>入驻申请</p>
      </div>
      <div class="enter-icon">
          <img src="~assets/img/profile/shangdaishenqing.png" alt="">
          <p>商贷申请</p>
      </div>
      <div class="enter-icon">
          <img src="~assets/img/profile/shiyongbangzhu.png" alt="">
          <p>使用帮助</p>
      </div>
      <div class="enter-icon">
          <img src="~assets/img/profile/guanyuwomen.png" alt="">
          <p>关于我们</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViceEnter",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.vice-enter{
    width: 90%;
    margin: 0 auto;
    font-size: 14px;
    color: #000;
    margin-top: 10px;
}
.vice-icon{
    display: flex;
    padding: 10px 0px;
}
.vice-icon .enter-icon{
    flex: 1;
    text-align: center;
}
.vice-icon .enter-icon img{
    width: 32px;
    height: 32px;
}
</style>
