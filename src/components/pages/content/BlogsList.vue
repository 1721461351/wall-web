<template>
  <div>
    <!-- 写文章 -->

    <div class="articles_and_recommends">
      <div>
        <article class="article soild-shadow" v-for="blog in list" :key="blog.blogId">
          <!-- 文章图片 -->
          <div class="article-img">
            <a :href="'/blogContent/'+blog.blogId">
              <img :src="blog.blogImage" alt width="150px" height="150px" />
            </a>
            <!-- 文章分类标签 -->
            <span class="article-type">
              <a href="#">{{blog.category.categoryName}}</a>
            </span>
          </div>
          <!-- 文章标题和内容 -->
          <div class="article-header">
            <h4>
              <a :href="'/blogContent/'+blog.blogId">{{blog.blogTitle}}</a>
            </h4>
            <!-- 文章内容 -->
            <div class="article-content">{{blog.blogDigest}}</div>
          </div>

          <!-- 文章其他内容 -->
          <!-- 日期，浏览，评论，赞 -->
          <div class="other">
            <div class="article-other">
              <div class="article-username">{{blog.username}}</div>
              <div class="artcle-date">2020-03-24</div>
              <div class="article-read">浏览({{blog.readNum}})</div>
              <div class="article-comment">评论(1)</div>
              <div class="article-zan" @click="thubmbClick(blog)">赞({{blog.likeNum}})</div>
              <!-- 阅读全文 -->
              <div class="article-more">
                <a :href="'/blogContent/'+blog.blogId">阅读全文</a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
    <!-- 分   页 -->
    <div class="block">
      <!-- <span class="demonstration">页数较少时的效果</span> -->
      <el-pagination
        layout="prev, pager, next"
        :total="total*5"
        :current-page.sync="currentPage"
        :page-size.sync="pageSize"
        @current-change="handleCurrentChange"
        @thumbs="getLikeNum"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    list: Array,
    total: Number,
    user: Object, //用户信息
    page: {
      type: Number,
      default: 1
    },
    size: Number
  },
  name: "BlogsList",
  data() {
    return {
      blog: "",
      likeNum: "",
      currentPage: this.page,
      pageSize: this.size
    };
  },

  methods: {
    handleCurrentChange(currentPage) {
      this.$emit("getCurrentPage", currentPage);
      // alert("handleCurrentChange");
      // console.log("handleCurrentChange",val);
    },

    getLikeNum(response) {
      console.log("点赞", response);
      //  this.$emit("likeNum", response.data.dataInfo);
      this.likeNum = response.data.dataInfo;
      console.log(blog);
    },
    // 点赞
    thubmbClick(blog) {
      console.log("username", this.user);
      //判断是否登录
      if (this.user != "" && this.user != undefined) {
        // 登录的情况下
        // alert(blogId);
        axios
          .get("http://localhost:9200/blog/thumbs", {
            params: {
              username: this.user.username,
              blogId: blog.blogId
            }
          })
          .then(response => {
            // 原来点赞数是这么做的，把blog整个对象传了进来，而不仅仅是blogId
            if (response.data.dataInfo != -1) {
              blog.likeNum += 1;
              console.log(blog);
              this.$message.success("点赞 +1");
            }else{
              this.$message.warning("不可重复点赞!");
            }
          });
      } else {
        this.$message.warning("请先登录!");
      }
    }
  }
};
</script>

<style>
/* 写文章 */
.articles_and_recommends {
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 20px;
}

.article {
  width: 850px;
  height: 200px;
  background: #fffffe;
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
  text-overflow: ellipsis;
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
  background: #fffffe;
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

/* 分页 */
.block {
  margin-top: 20px;
  margin-left: 75px;
}
</style>
