<template>
  <div class="news">
    <span class="text">{{news}}</span>
    <i class="el-icon-arrow-right"></i>
  </div>
</template>

<script>
export default {
  name: "News",
  props:{
      news:{
          type:String,
          default(){
              return '';
          }
      }
  },
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.news{
    width: 96%;
    
    font-size: 14px;
    border-bottom: 1px solid #f6f6f6;
    box-sizing: border-box;
    margin: 0 auto;
}
.text{
    padding:5px 8px;
    padding-left: 50px;
}
.news i{
    float: right;
}
</style>
