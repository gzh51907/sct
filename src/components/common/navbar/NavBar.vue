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
  name: "NavBar"
};
</script>

<style>
.nav-bar {
  /* 本身的样式 */
  height: 44px;
  line-height: 44px;
  text-align: center;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 6;
  font-size: 14px;
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>