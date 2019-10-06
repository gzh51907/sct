<template>
  <nav-bars>
    <div slot="left">重庆</div>
    <div slot="center">
      <div class="search">
        <input type="text" placeholder="搜索周边景区享受生活"/>
      </div>
    </div>
    <div slot="right">
      <div class="el-icon-full-screen"></div>
    </div>
  </nav-bars>
</template>

<script>
import NavBars from "components/common/navbar/NavBar";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    NavBars
  }
};
</script>

<style scoped>
.search {
  width: 100%;
  background-color: #fff;
  text-align: center;
  /* border: 1px solid #000; */
  border-radius: 10px;
  height: 30px;
  margin-top: 5px;
  box-sizing: border-box;
  position: relative;
}
.search input {
  outline: none;
  border: none;
  position: absolute;
  text-align: center; 
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
}
</style>
