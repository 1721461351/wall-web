<template>
  <div>
    <!-- <el-container> -->
      <div>
      <el-header>
        <!-- 导航栏 -->
        <home-header></home-header>
        <!-- <slide-and-type></slide-and-type> -->
      </el-header>

      <div class="scrolltext-title">
        <el-carousel height="30px" direction="vertical" :autoplay="true">
          <el-carousel-item v-for="item in 3" :key="item">
            <div class="scrolltext-content">
              <i class="el-icon-message-solid"></i>
              <span>{{ item }}</span>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 轮播图+分类 -->
      <!-- <div class="slide_and_type">
        <Slide></Slide>
        <Tag></Tag>
      </div>-->
      <slide-and-type></slide-and-type>
     
   
    <!-- 网站数据 -->
      <div class="data">
        <div class="data-title">网站信息</div>
        <ul>
          <li>文章总数:</li>
          <li>标签总数:</li>
          <li>分类总数:</li>
          <li>留言数量:</li>
          <li>在线人数:</li>
          <li>运行天数:</li>
          <li>最后更新时间:</li>
        </ul>
      </div>
      <!-- 写文章+分页-->
      <blogs-list></blogs-list>

      <!-- <el-footer></el-footer> -->

      <!-- foot -->
      <home-foot></home-foot>
 
</div>      
  </div>
</template>



<script>
import HomeHeader from "@/components/pages/head/HomeHeader";
import SlideAndType from "@/components/pages/content/SlideAndType";
import HomeFoot from "@/components/pages/foot/HomeFoot";
import Slide from "@/components/pages/content/Slide";
import Tag from "@/components/pages/content/Tag";
import BlogsList from "@/components/pages/content/BlogsList";

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
    HomeHeader,
    SlideAndType,
    HomeFoot,
    Slide,
    Tag,
    BlogsList
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
.el-footer,
.el-main {
  background-color: #f8f8f8;
  color: #333;
  /* text-align: center; */
  line-height: 60px;
}

.el-main {
  background-color: #f8f8f8;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

/* .el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
} */

/* 写文章 */
.articles_and_recommends {
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 20px;
}

.article {
  width: 850px;
  height: 200px;
  background: #f8f8f8;
  border-radius: 15px;
}

/* 子绝父相 */
.article-img {
  position: relative;
  width: 150px;
  height: 150px;
  float: left;
  padding: 20px;
}

/* 文章图片和分类 */
.article-img span {
  position: absolute;
  top: 22px;
  left: 22px;
  background: #009a61;
  padding: 2px;
}

.article-type a {
  color: #fff !important;
  text-decoration: none;
  display: block;
  padding: 3px;
  font-size: 14px;
}

/* 文章标题 */
.article-header {
  float: left;
  margin: 10px;
}

.article-header h4 a {
  text-decoration: none;
  color: #333;
}
/* 文章内容 */
.article-content {
  /* clear: both; */
  /* margin-left: 230px; */
  width: 630px;
  /* border: 1px solid blue; */
  overflow: hidden;
  color: #777777;
}

/* 文章其他内容  */
/* 日期，浏览，评论，赞 */
.other {
  position: relative;
  width: 630px;
}
.article-other {
  float: left;
  /* border: 2px solid greenyellow; */
  /* height: 60px; */
  /* margin-bottom: 100px; */
  margin-top: 20px;

  position: absolute;
  left: 190px;
  top: 150px;

  width: 635px;
}
.article-other div {
  font-size: 12px;
  font-weight: 400;
  font-style: inherit;
  font-family: inherit;
  float: left;
  padding: 0 10px;
  color: #999999;
  /* padding-bottom: 20px;
  padding-top: 20px; */

  /* border: 2px solid red; */
}

/* 阅读全文 */
.more {
  /* position: relative; */
}
.article-more {
  float: right !important;
  background: #009a61;
  padding: 10px;
  font-size: 14px !important;
}

.article-more a {
  display: block;
  padding: 3px;
  color: #fff;
  text-decoration: none;
}
/* 清除浮动 */
/* .clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.clearfix {
  *zoom: 1;
} */
/* 文章之间间距 */
.article {
  margin-bottom: 20px;
}

/* 推荐阅读 */
.recommend-read {
  width: 340px;
  /* border: 1px solid red; */
  float: right;
  margin-top: 25px;
  background: #f8f8f8;
}
.recommend-read a {
  color: #777777;
  text-decoration: none;
  display: inline-block;
}
ul {
  list-style: none; /*去掉li标签中的小点 */
}
.recommend-read ul li {
  /* border: 1px dotted greenyellow; */
  padding: 5px 0px;
  margin-left: -20px;
}
.recommend-read div {
  padding-left: 18px;
  padding-top: 4px;
}

.wall-info {
  width: 340px;
  border: 1px solid red;
  float: right;
}

/* 轮播图+分类 */
.slide_and_type {
  /* width: 1200px; */
  width: 1200px;

  height: 260px;
  margin: 5px auto;
}

/* 滚动条 */
.scrolltext-title {
  width: 1200px;
  height: 30px;
  background: #f8f8f8;
  margin: 20px auto;
  margin-bottom: 0px;
}

.scrolltext-content {
  line-height: 30px;
  text-decoration: none;
}
.scrolltext-content span {
  padding: 5px;
}
/* 网站统计 */
.data{
  width: 340px;
  height: 200px;
  /* background: red; */
    background: #f8f8f8;

  margin-right: 60px;
  /* margin: 0 auto;  */
  /* float: right !important; */
  /* margin-right: 500px; */
  float: right;
  /* right: 0px; */
}
</style>