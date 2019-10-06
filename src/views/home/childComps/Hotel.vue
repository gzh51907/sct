<template>
  <div class="hotel">
    <div class="hotel-nav">
      <el-button type="text" @click.native="changeAll">
        综合
        <i :class="[flagAll? 'el-icon-arrow-up':'el-icon-arrow-down']"></i>
      </el-button>
      <el-button type="text" @click.native="changeSell">
        销量
        <i :class="[flagSell? 'el-icon-arrow-down':'el-icon-arrow-up']"></i>
      </el-button>
      <el-button type="text" @click.native="changeDist">
        距离
        <i :class="[flagDist? 'el-icon-arrow-down':'el-icon-arrow-up']"></i>
      </el-button>
      <el-button type="text"></el-button>
      <el-button type="text" icon="el-icon-s-open" class="search">筛选</el-button>
    </div>
    <div class="hotelviews" v-for="item in hotel" :key="item.id">
      <div class="hotel-info">
        <img :src="baseURL+item.title_pic" class="img-info" />
        <div class="hotel-detail">
          <h4>{{item.name}}</h4>
          <p class="price">{{getPrice(item)}}</p>
          <span class="desc">{{item.special_desc}}</span>
          <div class="dist">{{getDist(item)}}</div>
        </div>
      </div>
      <div :class="[flag(item) ? 'oneClass':'someClass']" class="hotel-recommends">
        <img v-for="items in getPics(item)" :key="items" :src="baseURL+items" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hotel",
  props: {
    hotel: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      baseURL: "",
      recommands: [],
      flagAll: true,
      flagSell: true,
      flagDist: true,
      currentIdx:0,
    };
  },
  created() {
    this.baseURL = this.$axios.defaults.baseURL;
  },
  methods: {
    getPrice(item) {
      return "￥" + Number(item.price / 100) + "/人";
    },
    getDist(item) {
      let dist =
        item.cistance / 1000 > 1
          ? (item.cistance / 1000).toFixed(1) + "km"
          : parseInt(item.cistance) + "m";
      return "离重庆市" + dist;
    },
    getPics(item) {
      return item.banner_pics.split(",").splice(0, 3);
    },
    flag(item) {
      return item.id == "34111cb0";
    },
    changeAll() {
      this.flagAll = !this.flagAll;
      this.$emit("listenChangeAll", this.flagAll);
    },
    changeSell() {
      this.flagSell = !this.flagSell;
      this.$emit("listenChangeSell", this.flagSell);      
    },
    changeDist() {
      this.flagDist = !this.flagDist;
      this.$emit("listenChangeDist", this.flagDist);
    }
  }
};
</script>

<style scoped>
.hotel {
  font-size: 14px;
  color: #000;
  padding: 0 10px;
}
.hotel-nav {
  display: flex;
}
.hotel-nav .el-button {
  flex: 1;
}
.desc {
  display: inline-block;
  width: 128px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dist {
  float: right;
}
.hotel-info {
  clear: both;
}
.hotel-info img {
  width: 64px;
  height: 64px;
  margin: 10px;
  vertical-align: middle;
}
.hotel-detail {
  width: 250px;
  display: inline-block;
  vertical-align: middle;
}
.price {
  color: orange;
}
.hotel-recommends {
  display: flex;
  position: relative;
}
.oneClass img:nth-child(2),
.oneClass img:nth-child(3) {
  width: 45%;
  height: 60px;
}
.oneClass img:nth-child(2) {
  position: absolute;
  right: 0;
  top: 0;
}
.oneClass img:nth-child(3) {
  position: absolute;
  right: 0;
  bottom: 0;
  padding-top: 5px;
}
.oneClass img:nth-child(1) {
  width: 50%;
  height: 120px;
  background-color: red;
}
.someClass img {
  width: 104px;
  flex: 1;
  height: 103px;
}
.someClass img:nth-child(2) {
  padding: 0 10px;
}
.disActive{
  color: #000;
}
</style>
