<template>
  <div>
    <!-- <el-container> -->
    <div v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading">
      <el-header class="soild-shadow">
        <!-- 导航栏 -->
        <home-header @selectbycategoryid="selectByCategoryId" :user="this.user"></home-header>
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
      <div class="data soild-shadow">
        <div class="data-title">网站信息</div>
        <ul>
          <li>
            <span class="el-icon-document" style="padding-right:10px"></span>
            <span>文章总数:</span>
            {{webInfo.blogTotal}}
          </li>
          <li>
            <span class="el-icon-info" style="padding-right:10px"></span>
            <span>标签总数:</span>
            {{webInfo.tagTotal}}
          </li>
          <li>
            <span class="el-icon-data-analysis" style="padding-right:10px"></span>
            <span>分类总数:</span>
            {{webInfo.typeTotal}}
          </li>
          <li>
            <span class="el-icon-s-custom" style="padding-right:10px"></span>
            <span>总人数:</span>
            {{webInfo.userTotal}}
          </li>
          <li>
            <span class="el-icon-s-opportunity" style="padding-right:10px"></span>
            <span>在线人数:</span>
            {{webInfo.onlineTotal}}
          </li>
        </ul>
      </div>
      <!-- 写文章+分页-->
      <blogs-list
        :list="blogList"
        :total="total"
        :page="page"
        :size="size"
        :user="user"
        @getCurrentPage="getpage"
      ></blogs-list>

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
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      loading: true,
      fullscreenLoading: false,
      webInfo: {}, // 文章详情信息
      slideShow: [
        "https://jwc.syau.edu.cn/img/1.JPG",
        "https://jwc.syau.edu.cn/img/3.jpg"
      ],
      blogList: [],
      token: "",
      user: {
        username: ""
      },
      selectContent: {
        page: 1,
        size: 5,
        total: 0,
        categoryId: ""
      },
      page: 1,
      size: 5,
      total: 0,
      categoryId: ""
    };
  },

  // 监听器
  watch: {
    // 监听某一个对象的值发送改变，而做出相应的操作
    // selectContent: {
    //   // 参数的第一个值为改变值的新值，第二个为旧值。这里是对象
    //   handler(newname, old) {
    //     console.log("new", newname);
    //     console.log("old", old);
    //     // 发送请求
    //     axios
    //       .get("http://localhost:9200/blog/list", {
    //         params: {
    //           page: this.selectContent.page,
    //           size: this.selectContent.size,
    //           categoryId: this.selectContent.categoryId
    //         }
    //       })
    //       .then(this.getData);

    //   },
    //   // deep为深度监听，设置deep为true可以监听到对象属性
    //   deep: true,
    //   // immediate可以在第一次的时候就能监听到数据的改变
    //   immediate: true
    // },
    token: {
      handler(newname, oldname) {
        this.token = this.$cookie.get("user_token");
        // alert(this.token);
        // 根据token获取用户信息
        axios
          .get("http://localhost:9200/user/login", {
            params: {
              token: this.token
            }
          })
          .then(response => {
            console.log(response);
            this.user = response.data.dataInfo;
            console.log("user", this.user);
          });
      },
      // deep为深度监听，设置deep为true可以监听到对象属性
      deep: true,
      // immediate可以在第一次的时候就能监听到数据的改变
      immediate: true
    }
  },
  mounted() {
    // 获取类型的第几个
    alert(this.$route.path.charAt(this.$route.path.length - 1));
    // 判断当前界面的类型
    if (this.$route.path == "/") {
      axios
        .get("http://localhost:9200/blog/list", {
          params: {
            page: this.selectContent.page,
            size: this.selectContent.size,
            categoryId: this.selectContent.categoryId
          }
        })
        .then(this.getData);
    } else {
      axios
        .get("http://localhost:9200/blog/list", {
          params: {
            page: this.selectContent.page,
            size: this.selectContent.size,
            categoryId: this.$route.path.charAt(this.$route.path.length - 1)
          }
        })
        .then(this.getData);
    }
    // 检测登录状态
    this.token = this.$cookie.get("user_token");
    // alert(this.token);
    // 根据token获取用户信息
    axios
      .get("http://localhost:9200/user/login", {
        params: {
          token: this.token
        }
      })
      .then(response => {
        console.log(response);
        this.user = response.data.dataInfo;
        console.log("user", this.user);
      });

    // 获取网站信息
    axios.get("http://localhost:9200/blog/webinfo").then(response => {
      console.log(response);
      this.webInfo = response.data.dataInfo;
    });
  },

  // updated() {
  //   // alert("updated");
  //   console.log(this.data);
  //   axios
  //     .get("http://localhost:9200/blog/list", {
  //       params: {
  //         page: this.page,
  //         size: this.size,
  //         categoryId: this.categoryId
  //       }
  //     })
  //     .then(this.getData);
  // },
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
    // 喜欢数
    getlikenum(likeNum) {
      // alert("喜欢" + likeNum);
    },
    // 根据分类进行查询
    selectByCategoryId(categoryId) {
      // alert(categoryId);
      this.selectContent.categoryId = categoryId;
      axios
        .get("http://localhost:9200/blog/list", {
          params: {
            page: this.selectContent.page,
            size: this.selectContent.size,
            categoryId: this.selectContent.categoryId
          }
        })
        .then(this.getData);
    },
    getpage(currentPage) {
      // alert("当前页" + currentPage);
      this.selectContent.page = currentPage;
      // axios
      //   .get("http://localhost:9200/blog/list", {
      //     params: {
      //       page: this.page,
      //       size: this.size
      //     }
      //   })
      //   .then(this.getData);
      console.log("page", this.page);
    },
    getData(response) {
      response = response.data;
      if (response) {
        // console.log(response);
        this.blogList = response.dataInfo.contents;
        // console.log(this.blogList);
        // 总页数
        this.total = response.dataInfo.total;
        this.loading = false;
      }
    }
  }
};
</script>

<style>
body {
  background: #f8f8f8;
}
/* 图片阴影加边框 */
.soild-shadow {
  border: 1px solid #e6e2e2;
  box-shadow: 0 1px 4px 0 #e6e2e2;
}
.el-menu {
  background-color: #fffffe;
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
  background-color: #fffffe;
  color: #333;
  /* text-align: center; */
  line-height: 60px;
}

.el-main {
  background-color: #fffffe;
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
  background: #fffffe;
  margin: 20px auto;
  margin-bottom: 0px;
  border: 1px solid #e6e2e2;
  box-shadow: 0 1px 4px 0 #e6e2e2;
}

.scrolltext-content {
  line-height: 30px;
  text-decoration: none;
}
.scrolltext-content span {
  padding: 5px;
}
/* 网站统计 */
.data {
  width: 340px;
  height: 220px;
  /* background: red; */
  background: #fffffe;
  border-radius: 8px;

  margin-right: 60px;
  /* margin: 0 auto;  */
  /* float: right !important; */
  /* margin-right: 500px; */
  float: right;
  /* right: 0px; */
}
/* webinfo */
.data li {
  /* display:block; */
  /* background: aquamarine  ; */
  padding-top: 10px;
}
</style>
