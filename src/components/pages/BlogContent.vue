<template>
  <div>
    <el-container>
      <el-header>
        <!-- 导航栏 -->
        <home-header></home-header>
      </el-header>

      <!-- 标题 -->
      <div class="title">
        <nav>
          <div>首页</div>
          <div>></div>
          <div>站长之家</div>
          <div>></div>
          <div>正文</div>
        </nav>
      </div>
      <!-- 轮播图+分类 -->
      <div class="slide_and_type">
        <!-- <Slide></Slide> -->
        <Tag></Tag>

        <!-- 文章内容 -->
        <div class="a-content">
          、导读
          自己喜欢的域名 94rg.com。苦心经营了一段时间，后续也打算一直努力下去，直到今天无意中在一个查询域名被墙的网站上，发现自己的这个域名被墙了，为了保证了准确性，我又去了其他几个类似的网站查询了一把，结果一样令人揪心，思考了很久，决定记录一把。
          2、什么是域名
          域名就是一段类似个人身份证的网络资源的标识，做开发的同学可以类比数据库主键。那么为啥域名这么重要你。这里我来总结一下
          没有域名，用户只能通过ip来访问你的服务器，但是多主机场景怎么覆盖；服务器从国内迁移到国外亦或重新购买了一台云服务器（ip变了），难道从前的努力就付诸东流。
          同类型的网站这么多，仅凭搜索引擎可能区分不了，那么域名是你的一个重要的身份凭证
          2、域名的分类
          目前域名分国际域名和国度域名。比如com就是国际顶级通用域名，cn就是中国独有的国内顶级域名。类似的很多ge cx cc org tech site...;
          面对这么多的域名后缀我们改怎么选？
          优先com这种老牌的顶级域名，不要问为什么？你所熟知的域名有哪些不是com的？cn net org等次之，尽量不要选那些少见的域名，以来国内备案不支持，而来seo也是有一定的差别的。虽然官方说没有，实测还是存在的
          域名最好做到和品牌内容相关联，做到见名知其意。不能跟风，认为越短越好，画了大价钱去买所谓的天价域名。（土豪除外），对于我们这种小打小闹的相差个几位影响不到，你看 google bytedance segmentfault 不是一样很长。
        </div>

        <!-- 作者信息 -->
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
            <li>  <el-link href="https://element.eleme.io" target="_blank">文章1</el-link>
</li>
            <li><el-link href="https://element.eleme.io" target="_blank">文章1</el-link></li>
            <li><el-link href="https://element.eleme.io" target="_blank">文章1</el-link></li>
            <li><el-link href="https://element.eleme.io" target="_blank">文章1</el-link></li>
          </ul>
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
          <!-- 发表评论按钮 -->
          <el-button type="success" round class="comment-button">发布评论</el-button>
        </div>

        <!-- 推荐阅读 -->
        <div class="read">
          <Blogs-list></Blogs-list>
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

export default {
  name: "Home",

  data() {
    return {
      slideShow: [
        "https://jwc.syau.edu.cn/img/1.JPG",
        "https://jwc.syau.edu.cn/img/3.jpg"
      ],
      issubfield: false,
      textarea2: ""
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
  width: 850px;
  margin-top: 20px;
}
.comment-button {
  margin-top: 10px;
  float: right;
}
/* 作者信息 */
.author-info {
  width: 340px;
  /* height: 340px; */
  /* border: 1px solid red; */
  background: #f8f8f8;
  float: right;
  margin-top: 20px;
}
.profile-intro {
  /* background: greenyellow; */
  padding: 20px auto;
  width: 340px;
  height: 140px;
  border-bottom: 1px solid #EEEEEE;
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
.author-article li{
  padding: 10px;
  }
/* 推荐阅读底部 */
.read {
  margin-top: 60px;
}
</style>