<template>
  <div class="logo-box">
    <div class="logo-item" v-for="item in logo" :key="item.id">
      <div class="box-circle">
        <img :src="baseURL+item.picpath" :alt="item.title">
      </div>
      <p class="text">{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayLogo",
  props: {
    logo: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {},
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
.logo-box{
    padding: 0 10px;
    font-size: 12px;
    color: #000;
}
.box-circle{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
}
.box-circle img{
    width: 100%;
    height: 100%;
}
.logo-item{
    width: 33%;
    display: inline-block;
    text-align: center;
    padding-top: 10px;
}
.text{
  padding: 10px 0px;
}
</style>
