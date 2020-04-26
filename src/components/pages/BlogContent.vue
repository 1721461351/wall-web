<template>
  <div>
    <el-container>
      <el-header>
        <!-- 导航栏 -->
        <home-header></home-header>
      </el-header>

      <!-- 标题 -->
      <div class="title">
        <nav style="padding-left:20px">
          <div>首页</div>
          <div>></div>
          <div>{{blog.blogTitle}}</div>
          <div>></div>
          <div>正文</div>
        </nav>
      </div>
      <!-- 轮播图+分类 -->
      <!-- <div class="slide_and_type"> -->
      <!-- <Slide></Slide> -->
      <!-- <Tag></Tag> -->

      <div class="content">
        <!-- 文章内容 -->
        <div class="a-content">
          <div style="width:850px">
            <div class="content-edit">
              <div>小黑</div>
              <div>2020-03-01</div>
              <div>10</div>
              <span>
                <el-link type="primary">编辑</el-link>
              </span>
            </div>
            <div class="content-info" v-html="blog.htmlContent"></div>
          </div>
          <!-- 评论 -->
          <div class="comment">
            <el-input
              class="comment"
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="想对作者说些什么"
              v-model="textarea2"
            ></el-input>
            <div class="comment-button">
              <el-button type="success" round style="float:right">发布评论</el-button>
            </div>
          </div>

          <!-- 推荐 -->
          <div class="b-content">
            <div class="b-content-info">
              <span style="float:left;padding-left:25px">我当摸金校尉的那些年</span>
              <span style="float:right">500</span>
              <span style="float:right;padding-right:20px">小黑</span>
            </div>
          </div>

          <!-- 推荐 -->
          <div class="b-content">
            <div class="b-content-info">
              <span style="float:left;padding-left:25px">我当摸金校尉的那些年</span>
              <span style="float:right">500</span>
              <span style="float:right;padding-right:20px">小黑</span>
            </div>
          </div>
        </div>
        <!-- 推荐阅读 -->
        <!-- <div class="read">
          <Blogs-list></Blogs-list>
        </div>-->
        <!-- </div>   -->

        <!-- 作者信息 -->
        <div class="author">
          <div class="author-info">
            <div class="profile-intro">
              <div class="head-image">
                <img
                  src="https://upload.jianshu.io/users/upload_avatars/20513214/57fc3c23-c1d7-4d5b-83a4-a7990137dcc5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
                  alt
                />
              </div>
              <div class="name-and-fous">
                <div class="author-name">网名</div>
                <div class="author-focus">
                  <el-button round size="mini" class="focus-bt">关注</el-button>
                </div>
              </div>
              <!-- 专业 -->
              <div class="more-info">信息与电气工程学院</div>
            </div>
            <!-- 作者文章 -->
            <ul class="author-article">
              <li>
                <el-link href="https://element.eleme.io" target="_blank">文章1</el-link>
              </li>
              <li>
                <el-link href="https://element.eleme.io" target="_blank">文章1</el-link>
              </li>
              <li>
                <el-link href="https://element.eleme.io" target="_blank">文章1</el-link>
              </li>
              <li>
                <el-link href="https://element.eleme.io" target="_blank">文章1</el-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <slide-and-type></slide-and-type> -->

      <!-- 写文章+分页-->

      <!-- <el-footer></el-footer> -->

      <!-- <mavon-editor :subfield="issubfield" editable="false" v-model="value"/> -->

      <!-- foot -->
      <home-foot></home-foot>
      <!-- <div >123435</div> -->
    </el-container>
  </div>
</template>


     
<script>
import HomeHeader from "@/components/pages/head/HomeHeader";
import SlideAndType from "@/components/pages/content/SlideAndType";
import HomeFoot from "@/components/pages/foot/HomeFoot";
import Slide from "@/components/pages/content/Slide";
import Tag from "@/components/pages/content/Tag";
import BlogsList from "@/components/pages/content/BlogsList";
import axios from "axios";
export default {
  name: "Home",

  data() {
    return {
      slideShow: [
        "https://jwc.syau.edu.cn/img/1.JPG",
        "https://jwc.syau.edu.cn/img/3.jpg"
      ],
      issubfield: false,
      textarea2: "",
      blogId: this.$route.params.blogId,
      blog: {}
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
  methods: {
    getData(response) {
      console.log("data", response);
      if (response) {
        this.blog = response.data.dataInfo;
      }
    }
  },

  mounted() {
    // alert("updated");
    console.log("this", this.blogId);
    // 获取文章内容啦
    axios
      .get("http://localhost:9200/blog/singleBlog/" + this.blogId)
      .then(this.getData);
  }
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

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
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

/* 轮播图+分类 */
.slide_and_type {
  /* width: 1200px; */
  width: 1200px;

  /* height: 260px; */
  margin: 5px auto;
}

/* 标题 */
.title {
  width: 1200px;
  margin: 20px auto;
  margin-bottom: 0px;
  background: #f8f8f8;
  height: 30px;
}

.title div {
  display: inline-block;
  padding: 2px 5px;
  line-height: 30px;
}
.title nav {
  padding-left: 10px;
}

/* 文章内容 */
.a-content {
  width: 850px;
  /* height: 800px; */
  background: #f8f8f8;
  float: left;
  margin-top: 20px;
}
/* 评论 */
.comment {
  background: #ffffff;
  width: 850px;
  margin-top: 20px;
}
.comment-button {
  margin-top: 10px;
  float: right;
  margin-bottom: 10px;
  width: 850px;
}
/* 作者信息 */
.author-info {
  width: 340px;
  /* height: 340px; */
  /* border: 1px solid red; */
  background: #f8f8f8;
  float: left;
  margin-top: 20px;
  margin-left: 10px;
  /* position: absolute; */
  /* top: 150px; */
  /* left: 340px; */
  /* margin-left: 1200px; */
}
/* 父亲 */
.author {
  position: relative;
  float: left;
  /* width: 340px; */
  /* height: 100px; */
}
.profile-intro {
  /* background: greenyellow; */
  padding: 20px auto;
  width: 340px;
  height: 140px;
  border-bottom: 1px solid #eeeeee;
}

.head-image {
  float: left;
}
.head-image img {
  border-radius: 50%;
  width: 90px;
  height: 90px;
  display: block;
  padding: 25px;
}

.name-and-fous {
  width: 170px;
  height: 50px;
  /* background: red; */
  float: left;
  margin: 20px 30px;
  /* margin-top: 20px; */
  margin-left: 0px;
}
/* 昵称 */
.author-name {
  display: block;
  float: left;
  margin: 15px;
  /* margin-left: 0px; */
  /* background: grey; */
}
/* 关注 */
.author-focus {
  float: right;
  margin: 12px;
}
/* 专业 */
.more-info {
  float: right;
  width: 170px;
  height: 30px;
  /* background: chocolate; */
  margin-right: 12px;
}
.focus-bt {
  border: 1px solid blue;
}
/* 作者的其他文章 */
.author-article li {
  padding: 10px;
}
/* 推荐阅读底部 */
.read {
  margin-top: 60px;
}

/* 总体内容布局 */
.content {
  width: 1200px;
  margin: 0 auto;
}
.comment-button {
  /* height:40px; */
}
.b-content {
  width: 850px;
  height: 60px;
  /* background: red; */
  border-bottom: 1px solid #f8f8f8;
  background: #ffffff;
  /* float: left; */
  clear: both;
}
.content-edit {
  width: 800px;
  height: 30px;
  margin: 0 auto;
 background: #ffffff;
  margin-top: 10px;
}

.content-edit div{
  float: left;
  display: inline-block;
  padding-left: 20px;
  line-height: 30px;
}
.content-edit div:first-child{
  padding-left: 0;
}
.content-edit span {
  float: right;
  line-height: 26px;
  padding-right: 10px;
}
.content-info {
  width: 800px;
  margin: 0 auto;
  padding-top: 25px;
  padding-bottom: 20px;
}
.b-content-info {
  width: 800px;
  margin: 0 auto;
  line-height: 60px;
}
.b-content-info {
  display: inline-block;
}
</style>