<template>
    <nav-bars>
        <div slot="left">重庆</div>
        <div slot="center">
          <input type="text" placeholder="">
        </div>
        <div slot="right">
           <div class="el-icon-full-screen"></div>
        </div>
    </nav-bars>
</template>

<script>
import NavBars from 'components/common/navbar/NavBar'
export default {
  name:'',
  data() {
    return {

    }
  },
  components: {
      NavBars,
  }
}
</script>

<style scoped>

</style>
