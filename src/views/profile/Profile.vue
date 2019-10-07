<template>
    <div id="profile">
        <ProfileTop/>
        <main-enter/>
        <vice-enter/>
        <div style="padding-top:60px"></div>
    </div>
</template>
    
<script>
import ProfileTop from './childComps/ProfileTop'
import MainEnter from './childComps/MainEnter'
import ViceEnter from './childComps/ViceEnter'
export default {
  name:'Profile',
  data() {
    return {

    }
  },
  components: {
    ProfileTop,
    MainEnter,
    ViceEnter
  }
}
</script>

<style scoped>
</style>
