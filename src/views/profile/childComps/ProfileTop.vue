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
.profile-photo .login{
  padding-left: 20px;
  vertical-align: middle;
  font-size: 12px;
  color: #fff;
}
</style>
