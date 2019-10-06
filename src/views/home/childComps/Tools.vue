<template>
  <div class="tools">
    <use-tools>
      <use-tools-item backColor="rgba(78,168,253,0.8)">
        <span slot="box" >
          <i class="el-icon-full-screen"></i>
        </span>
        <span slot="text">扫一扫</span>
      </use-tools-item>
      <use-tools-item backColor="rgba(61,216,164,0.8)">
        <span slot="box" >
          <i class="el-icon-wallet"></i>
        </span>
        <span slot="text">付款码</span>
      </use-tools-item>
      <use-tools-item backColor="rgba(251,185,64,0.8)">
        <span slot="box" >
          <i class="el-icon-shopping-bag-1"></i>
        </span>
        <span slot="text">领券</span>
      </use-tools-item>
      <use-tools-item backColor="rgba(155,65,255,0.8)">
        <span slot="box" >
          <i class="el-icon-thumb"></i>
        </span>
        <span slot="text">点餐</span>
      </use-tools-item>
      <use-tools-item backColor="rgba(249,90,90,0.8)">
        <span slot="box" >
          <i class="el-icon-office-building"></i>
        </span>
        <span slot="text">酒店</span>
      </use-tools-item>
    </use-tools>
   
  </div>
</template>

<script>
import UseTools from "components/common/usetools/UseTools";
import UseToolsItem from "components/common/usetools/UseToolsItem";
export default {
  name: "Tools",
  data() {
    return {};
  },
  components: {
    UseTools,
    UseToolsItem
  }
};
</script>

<style scoped>
.tools{
  padding: 5px 0px 20px;
  border-bottom: 8px solid #eee;
}
</style>
