<template>
  <div id="home">
    <nav-bar />
    <home-swiper :banner="banner" />
    <news :news="news" />
    <tools />
    <Activity :activity="activity" />
    <special-view :interaction="interaction" />
    <hot-view :scene="scene" />
    <main-view />
    <hotel
      :hotel="hotel"
      v-on:listenChangeAll="showChangeAll"
      v-on:listenChangeSell="showChangeSell"
      v-on:listenChangeDist="showChangeDist"
    />
    <div style="padding-top:60px"></div>
  </div>
</template>
    
<script>
import NavBar from "./childComps/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import News from "./childComps/News";
import Tools from "./childComps/Tools";
import Activity from "./childComps/Activity";
import SpecialView from "./childComps/SpecialView";
import HotView from "./childComps/HotView";
import MainView from "./childComps/MainView";
import Hotel from "./childComps/Hotel";

// 方法
import {
  homeMultidate,
  hotel_com_asc,
  hotel_com_desc,
  hotel_sell_asc,
  hotel_sell_desc,
  hotel_distance_asc,
  hotel_distance_desc
} from "network/home";
export default {
  name: "Home",
  data() {
    return {
      banner: [],
      news: "",
      activity: [],
      interaction: {},
      scene: {},
      hotel: []
    };
  },
  created() {
    this.getHomeMultidate();
    this.getHotel();
  },
  methods: {
    getHomeMultidate() {
      homeMultidate().then(res => {
        this.banner = res.banner;
        this.news = res.news[0].title;
        this.activity = res.activity;
        this.interaction = res.interaction[0];
        this.scene = res.scene[0];
      });
    },
    getHotel() {
      hotel_com_asc().then(res => {
        this.hotel = res.rows;
      });
    },
    showChangeAll(flagAll) {
      if (flagAll) {
        hotel_com_asc().then(res => {
          this.hotel = res.rows;
        });
      } else {
        hotel_com_desc().then(res => {
          this.hotel = res.rows;
        });
      }
    },
    showChangeSell(flagSell) {
      if (flagSell) {
        hotel_sell_asc().then(res => {
          this.hotel = res.rows;
        });
      } else {
        hotel_sell_desc().then(res => {
          this.hotel = res.rows;
        });
      }
    },
    showChangeDist(flagDist) {
      if (flagDist) {
        hotel_distance_asc().then(res => {
          this.hotel = res.rows;
        });
      } else {
        hotel_distance_desc().then(res => {
          this.hotel = res.rows;
        });
      }
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    News,
    Tools,
    Activity,
    SpecialView,
    HotView,
    MainView,
    Hotel
  }
};
</script>

<style scoped>
</style>
