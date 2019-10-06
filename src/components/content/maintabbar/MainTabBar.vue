<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/home.png" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/home-active.png" alt />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/play">
      <img slot="item-icon" src="~assets/img/tabbar/play.png" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/play-active.png" alt />
      <div slot="item-text">玩转</div>
    </tab-bar-item>
    <tab-bar-item path="/card">
      <img slot="item-icon" src="~assets/img/tabbar/card.png" alt />
      <!-- <img slot="item-icon-active" src="~assets/img/tabbar/card-active.png" alt /> -->
      <div slot="item-text">卡包</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/profile-active.png" alt />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
</style>