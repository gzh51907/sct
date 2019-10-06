<template>
  <div id="play">
    <play-banner :banner="banner" />
    <play-logo :logo="logo"/>
    <div style="padding-top:60px"></div>
  </div>
</template>
    
<script>
// 组件
import PlayBanner from "./childComps/PlayBanner";
import PlayLogo from './childComps/PlayLogo'

//方法
import { playBannerData, playLogoData } from "network/play";

export default {
  name: "Play",
  data() {
    return {
      banner: [],
      logo: []
    };
  },
  created() {
    this.getPlayBanner();
    this.getplayLogo();
  },
  methods: {
    getPlayBanner() {
      playBannerData().then(res => {
        this.banner = res.rows;
      });
    },
    getplayLogo() {
      playLogoData().then(res => {
        this.logo = res.rows; 
      });
    }
  },
  components: {
    PlayBanner,
    PlayLogo
  }
};
</script>

<style scoped>
</style>
