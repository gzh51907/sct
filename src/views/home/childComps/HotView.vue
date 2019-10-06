<template>
  <div class="special-view">
    <h4 class="title">特色场景</h4>
    <div class="special-box">
      <div class="box">
        <img :src="baseURL+scene['marker1']" class="miniImg" />
        <img :src="baseURL+scene['picpath1']" class="bigImg" />
      </div>
      <div class="box1">
        <div class="box1-box">
          <img :src="baseURL+scene['marker2']" class="miniImg" />
          <img :src="baseURL+scene['picpath2']" class="bigImg" />
        </div>
        <div class="box1-box">
          <img :src="baseURL+scene['marker3']" class="miniImg" />
          <img :src="baseURL+scene['picpath3']" class="bigImg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpecialView",
  props: {
    scene: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      baseURL: ""
    };
  },
  created() {
    this.baseURL = this.$axios.defaults.baseURL;
  }
};
</script>

<style scoped>
.special-view {
  padding-bottom: 10px;
  border-bottom: 8px solid #eee;
}
.title {
  padding: 10px 20px;
  color: #000;
}
.special-box {
  display: flex;
  padding: 0px 5px;
}
.special-box .box {
  flex: 4;
  height: 130px;
  overflow: hidden;
  position: relative;
}
.box1 {
  flex: 6;
  height: 130px;
  margin-left: 8px;
}
.box1-box {
  position: relative;
  height: 50px;
}

.box .bigImg {
  height: 100%;
  width: 100%;
}

.box1 .box1-box {
  height: 50%;
}
.box1 .box1-box .bigImg {
  width: 100%;
  height: 100%;
}
.miniImg {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 40px;
  height: 20px;
}
</style>
