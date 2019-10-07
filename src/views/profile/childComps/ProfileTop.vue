<template>
  <div class="profile-top">
    <div class="profile-msg">
      <el-button type="text" @click.native="goto('/login')" class="btnImg"></el-button>
    </div>
    <div class="profile-info">
      <div class="profile-photo">
        <img src="~assets/img/profile/moren170.png" alt />
      </div>
      <span class="login">立即登陆</span>
    </div>
    <div class="profile-activity">
      <dir class="activity-item">
        <img src="~assets/img/profile/huodong.png" alt="">
        <p>创建活动</p>
      </dir>
      <dir class="activity-item">
        <img src="~assets/img/profile/wodehuodong.png" alt="">
        <p>我的活动</p>
      </dir>
      <dir class="activity-item">
        <img src="~assets/img/profile/xinyongshenghuo.png" alt="">
        <p>信用生活</p>
      </dir>
      <dir class="activity-item">
        <img src="~assets/img/profile/jiucan.png" alt="">
        <p>信用就餐</p>
      </dir>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileTop",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.profile-top {
  background: url(~assets/img/profile/wodebg.png) no-repeat center center;
  background-size: cover;
  height: 204px;
  padding: 10px 15px;
  font-size: 14px;
}
.profile-msg{
  width: 100%;
  height: 24px;
}
.btnImg {
  width: 24px;
  height: 24px;
  float: right;
  background: url(~assets/img/profile/xiaoxi.png) no-repeat center center;
  background-size: cover;
}
.profile-photo {
  width: 71px;
  height: 71px;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
}
.profile-photo img {
  width: 100%;
  height: 100%;
  padding: 1px;
}
.profile-info .login{
  padding-left: 20px;
  vertical-align: middle;
  color: #fff;
}
.profile-activity{
  height: 90px;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 10px;
}
.activity-item{
  flex: 1;
  text-align: center;
}
.activity-item img{
  width: 36px;
  height: 36px;
}
</style>
