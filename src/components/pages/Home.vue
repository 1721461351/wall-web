<template>
  <div>
    <el-container>
      <el-header>
        <!-- 导航栏 -->
        <home-header></home-header>
      </el-header>

      <!-- 轮播图+分类 -->
      <div class="slide_and_type">
        <template>
          <el-carousel indicator-position="outside" class="slideshow" height="250px">
            <el-carousel-item v-for="item in slideShow" :key="item">
              <h3>
                <img :src="item" alt="沈农" />
              </h3>
            </el-carousel-item>
          </el-carousel>
        </template>
        <!-- 分类标签 -->
        <div class="type">分类</div>
      </div>

      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>


    </div>
</template>

<script>
import HomeHeader from "@/components/pages/head/HomeHeader";

export default {
  name: "Home",

  data() {
    return {
      slideShow: [
        "https://jwc.syau.edu.cn/img/1.JPG",
        "https://jwc.syau.edu.cn/img/3.jpg"
      ]
    };
  },
  // 小写，小写啊
  components: {
    HomeHeader
  },
  methods: {}
};
</script>

<style>
.el-menu {
  background-color: #f8f8f8;
  float: right;
}

.el-menu-title {
  padding: 0 40px;
}

.logo {
  text-decoration: none;
  display: inline;
  color: #009a61;
}

.el-menu-title template {
  padding: 0 100px;
}

.el-header,
.el-footer {
  background-color: #f8f8f8;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

/* 滚动条 */
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item h3 img {
  margin-top: 20px;
}

.slide_and_type {
  width: 1200px;
  height: 280px;
  /* border: 1px solid red; */
  margin: 5px auto;
}

.slideshow {
  width: 850px;
  float: left;
  /* margin-top: 30px; */
  /* margin-left: 50px; */
}
.type {
  width: 340px;
  height: 220px;
  /* border: 1px solid blue; */
  float: right;
  margin-top: 20px;
  background: #f8f8f8;
}
</style>