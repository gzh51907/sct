<template>
  <div id="app">
    <router-view></router-view>
    <MainTabBar v-if="$route.name!=='card'"/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/maintabbar/MainTabBar'
export default {
  name: 'app',
  components: {
    MainTabBar,
  }
}
</script>

<style>
 @import "assets/css/base.css";
</style>
