<template>
  <div id="home">
    <nav-bar />
    <home-swiper :banner="banner" />
  </div>
</template>
    
<script>
import NavBar from "./childComps/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";

// 方法
import { getHomeMultidate } from "network/home";
export default {
  name: "Home",
  data() {
    return {
      banner: []
    };
  },
  components: {
    NavBar,
    HomeSwiper
  },
  async created() { 
    let data=await this.$axios.get("http://ykt1.cqaxfpw.com:5010/rs/main_page?_=1569941354771");
    console.log(data);
    
  },
  methods: {}
};
</script>

<style scoped>
</style>
