<template>
    <el-carousel trigger="click" height="190px">
      <el-carousel-item  v-for="item in banner" :key="item.id">
        <a :href="item.urlpath">
          <img :src="baseURL+item.picpath" :alt="item.title" />
        </a>
      </el-carousel-item>
    </el-carousel>
</template>
<script>

export default {
    name:'PlayBanner',
    props:{
        banner:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components: {
  },
  data() {
    return {
      baseURL:'',
    }
  },
  created() {
    this.baseURL=this.$axios.defaults.baseURL;
  },
}
</script>

<style scoped>
.el-carousel__item img{
  width: 100%;
  height: 186px;
}
</style>