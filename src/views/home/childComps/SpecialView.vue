<template>
  <div class="special-view">
    <h4 class="title">特色互动</h4>
    <div class="special-box">
      <div class="box">
        <img :src="baseURL+interaction['marker1']" class="miniImg" />
        <img :src="baseURL+interaction['picpath1']" class="bigImg" />
      </div>
      <div class="box1">
        <div class="box1-box">
          <img :src="baseURL+interaction['marker2']" class="miniImg" />
          <img :src="baseURL+interaction['picpath2']" />
        </div>
        <div class="box1-box">
          <img :src="baseURL+interaction['marker3']" class="miniImg" />
          <img :src="baseURL+interaction['picpath3']" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpecialView",
  props: {
    interaction: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      baseURL: ""
    };
  },
  created() {
    this.baseURL = this.$axios.defaults.baseURL;
  }
};
</script>

<style scoped>
.special-view {
  padding-bottom: 10px;
  border-bottom: 8px solid #eee;
}
.title {
  padding: 10px 20px;
  color: #000;
}
.special-box {
  display: flex;
  padding: 0px 5px;
}
.special-box .box ,.box1{
  flex: 1;
  height: 100px;
  overflow: hidden;
  position: relative;
  margin-left: 8px;
}
.box1-box {
  position: relative;
  height: 50px;
}
.miniImg {
  position: absolute;
  top: 0px;
  left: 0px;
}
.box .bigImg {
  height: 100px;
  width: 100%;
}
.box .miniImg {
  width: 103px;
  height: 23px;
}
.box1 .miniImg {
  width: 67px;
  height: 20px;
}
.box1 .box1-box {
  height: 50%;
}
.box1 .box1-box img {
  height: 50px;
}
.box1 .box1-box .miniImg {
  height: 20px;
}
</style>
