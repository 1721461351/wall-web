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
          <el-carousel indicator-position="inside" class="slideshow" height="250px">
            <el-carousel-item v-for="item in slideShow" :key="item">
              <h3>
                <img :src="item" alt="沈农" />
              </h3>
            </el-carousel-item>
          </el-carousel>
        </template>
        <div>
          <!-- 分类标签 -->
          <div class="type">
            <i class="el-icon-info">分类</i>

            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
          </div>
        </div>

        <!-- 推荐阅读 -->
        <div class="recommend-read">
          <div>推荐阅读:</div>
          <ul>
            <li>
              <i class="el-icon-reading"></i>
              <a href="#">新手到站长的必经之路</a>
            </li>
            <li>
              <i class="el-icon-reading"></i>
              <a href="#">新手到站长的必经之路</a>
            </li>
          </ul>
        </div>

        <!-- 网站信息 -->
        <div class="wall-info">网站信息</div>
      </div>

      <!-- 写文章 -->
      <div class="articles_and_recommends">
        <article class="article">
          <!-- 文章图片 -->
          <div class="article-img">
            <a href="https://jwc.syau.edu.cn">
              <img src="http://oss.94rg.com/oneblog/20200321162655133.png-94rg001" alt="必经之路" />
            </a>
            <!-- 文章分类标签 -->
            <span class="article-type">
              <a href="#">站长之家</a>
            </span>
          </div>
          <!-- 文章标题和内容 -->
          <div class="article-header">
            <h4>
              <a href="https://jwc.syau.edu.cn">新手到站长的必经之路</a>
            </h4>
            <!-- 文章内容 -->
            <div class="article-content">很容易被误诊为心脏病发作。。</div>
          </div>

          <!-- 文章其他内容 -->
          <!-- 日期，浏览，评论，赞 -->
          <div class="other">
            <div class="article-other">
              <div class="artcle-date">2020-03-24</div>
              <div class="article-read">浏览(10)</div>
              <div class="article-comment">评论(1)</div>
              <div class="article-zan">赞(7)</div>
              <!-- 阅读全文 -->
              <div class="article-more">
                <a href="#">阅读全文</a>
              </div>
            </div>
          </div>
        </article>

        <article class="article">
          <!-- 文章图片 -->
          <div class="article-img">
            <a href="https://jwc.syau.edu.cn">
              <img src="http://oss.94rg.com/oneblog/20200321162655133.png-94rg001" alt="必经之路" />
            </a>
            <!-- 文章分类标签 -->
            <span class="article-type">
              <a href="#">站长之家</a>
            </span>
          </div>
          <!-- 文章标题和内容 -->
          <div class="article-header">
            <h4>
              <a href="https://jwc.syau.edu.cn">新手到站长的必经之路</a>
            </h4>
            <!-- 文章内容 -->
            <div
              class="article-content"
            >很容易被误诊为心脏病发作。很容易被误诊为心脏病发作。当深层情绪引起过度焦虑导致胸痛或呼吸短促等症状时，就容易出现破碎心脏综合症。这往往更容易发生在女性身上，很容易被误诊为心脏病发作。</div>
          </div>

          <!-- 文章其他内容 -->
          <!-- 日期，浏览，评论，赞 -->
          <div class="other">
            <div class="article-other">
              <div class="artcle-date">2020-03-24</div>
              <div class="article-read">浏览(10)</div>
              <div class="article-comment">评论(1)</div>
              <div class="article-zan">赞(7)</div>
              <!-- 阅读全文 -->
              <div class="article-more">
                <a href="#">阅读全文</a>
              </div>
            </div>
          </div>
        </article>
      </div>

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
.el-footer,
.el-main {
  background-color: #f8f8f8;
  color: #333;
  text-align: center;
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
  height: 260px;
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

.el-tag {
  margin: 5px;
}
.el-icon-info {
  margin: 5px;
}

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
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.clearfix {
  *zoom: 1;
}
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
</style>