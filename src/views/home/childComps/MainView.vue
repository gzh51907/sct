<template>
  <div class="tools">
    <use-tools>
      <use-tools-item backColor="rgba(250,124,125,0.8)">
        <span slot="box" >
          <i class="el-icon-full-screen"></i>
        </span>
        <span slot="text">必去景点</span>
      </use-tools-item>
      <use-tools-item backColor="rgba(248,132,75,0.8)">
        <span slot="box" >
          <i class="el-icon-wallet"></i>
        </span>
        <span slot="text">地道美食</span>
      </use-tools-item>
      <use-tools-item backColor="rgba(248,203,75,0.8)">
        <span slot="box" >
          <i class="el-icon-shopping-bag-1"></i>
        </span>
        <span slot="text">特色酒店</span>
      </use-tools-item>
      <use-tools-item backColor="rgba(105,201,63,0.8)">
        <span slot="box" >
          <i class="el-icon-thumb"></i>
        </span>
        <span slot="text">优质特产</span>
      </use-tools-item>
    </use-tools>
   <use-tools>
      <use-tools-item backColor="rgba(250,187,91,0.8)">
        <span slot="box" >
          <i class="el-icon-full-screen"></i>
        </span>
        <span slot="text">景区活动</span>
      </use-tools-item>
      <use-tools-item backColor="rgba(174,95,221,0.8)">
        <span slot="box" >
          <i class="el-icon-wallet"></i>
        </span>
        <span slot="text">旅游资讯</span>
      </use-tools-item>
      <use-tools-item backColor="rgba(54,220,170,0.8)">
        <span slot="box" >
          <i class="el-icon-shopping-bag-1"></i>
        </span>
        <span slot="text">精品路线</span>
      </use-tools-item>
      <use-tools-item backColor="rgba(81,175,253,0.8)">
        <span slot="box" >
          <i class="el-icon-thumb"></i>
        </span>
        <span slot="text">四季重庆</span>
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
