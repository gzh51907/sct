<template>
  <!-- 因为一个网站可能有几个导航，用id不合适  -->
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: "NavBar", 
};
</script>

<style>
.nav-bar {
  /* 本身的样式 */
  height: 44px;
  line-height: 44px;
  text-align: center;
  /* border-bottom: 1px solid #f6f6ff; */
  /* box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.1); */
  /* 利用flex进行布局 */
  display: flex;
  position: fixed;
  top: 0;
  left:0;
  right: 0;
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
} 
</style>