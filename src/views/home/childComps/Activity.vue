<template>
  <div class="activity-view">
    <h4 class="title">附近活动</h4>
    <div class="activity">
      <div class="box" v-for="item in activity" :key="item.id">
        <img :src="baseURL+item.pic_path" :alt="item.title" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Activity",
  props: {
    activity: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  created() {
    this.baseURL = this.$axios.defaults.baseURL;
  },
  data() {
    return {
      baseURL: ""
    };
  }
};
</script>

<style scoped>
.activity-view{
  padding-bottom: 10px;
  border-bottom: 8px solid #eee;
}
.title{
    padding: 10px 20px;
    color: #000;
}
.activity {
  width: 100%;
  height: 94px;
  overflow: hidden;
  display: flex;
}
.box {
  flex-wrap: nowrap;
  margin: 0 5px;
}
.activity img {
  height: 94px;
}
</style>
