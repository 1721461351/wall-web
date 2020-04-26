<template>
  <div class="article-guard">
    <!-- 导航部分 -->
    <div class="article-nav">
      <span>
        <a href="https://element.eleme.io">全部()</a>
      </span>
      <span>
        <a href="https://element.eleme.io">公开()</a>
      </span>
      <span>
        <a href="https://element.eleme.io">私密()</a>
      </span>
    </div>

    <!-- 搜索部分 -->
    <div class="search-box">
      <div class="search-box-content">
        <div class="screen">筛选:</div>
        <!-- 按照时间筛选 -->
        <div class="screen-date">
          <el-select v-model="search.year" placeholder="年">
            <el-option
              v-for="(item,index) in yearoptions"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>

          <el-select v-model="search.month" placeholder="月">
            <el-option
              v-for="item in monthoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <!-- 按照类型和标签筛选 -->
        <el-select class="select_category" v-model="search.categoryId" placeholder="文章分类">
          <el-option
            v-for="item in categoryOptions"
            :key="item.categoryId"
            :label="item.categoryName"
            :value="item.categoryId"
          ></el-option>
        </el-select>

        <el-select class="select_tag" v-model="search.tagId" placeholder="文章标签">
          <el-option
            v-for="item in articleOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>

        <!-- 输入框 -->
        <el-input v-model="search.keyWord" placeholder="请输入关键字"></el-input>
        <!-- 搜索框 -->
        <el-button type="success" round class="search-button" @click="searchButton">搜索</el-button>
      </div>
    </div>

    <!--文章列表部分  -->
    <div class="content-list" v-for="item in articles.contents" :key="item.blogId">
      <div class="content-list-title">
         <el-link :href="'http://localhost:8080/writerblog?blogId='+item.blogId" target="_blank"> {{item.blogTitle}}</el-link>
       </div>
      <div class="info">
        <div class="content-list-info">
          <span>{{item.category.categoryName}}</span>
          <span>{{item.creatTime}}</span>
          <span>阅读量({{item.readNum}})</span>
          <span>点赞数({{item.likeNum}})</span>
        </div>
        <div class="content-list-link">
          <el-link type="primary">查看</el-link>
          <el-link type="danger">删除</el-link>
        </div>
      </div>
    </div>

    <!--文章列表部分  -->
    <div class="content-list">
      <div class="content-list-title">我的大学生涯</div>
      <div class="info">
        <div class="content-list-info">
          <span>心情</span>
          <span>2020年4月18日</span>
          <span>阅读量()</span>
          <span>评论数()</span>
        </div>
        <div class="content-list-link">
          <el-link type="primary">查看</el-link>
          <el-link type="danger">删除</el-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ArticleGuard",
  data() {
    return {
      search: {
        year: "",
        month: "",
        categoryId: "",
        tagId: "",
        keyWord: "",
        username: "2016188023"
      },
      input: "",
      monthoptions: [
        {
          value: "1",
          label: "1月"
        },
        {
          value: "2",
          label: "2月"
        },
        {
          value: "3",
          label: "3月"
        },
        {
          value: "4",
          label: "4月"
        },
        {
          value: "5",
          label: "5月"
        },
        {
          value: "6",
          label: "6月"
        },
        {
          value: "7",
          label: "7月"
        },
        {
          value: "8",
          label: "8月"
        },
        {
          value: "9",
          label: "9月"
        },
        {
          value: "10",
          label: "10月"
        },
        {
          value: "11",
          label: "11月"
        },
        {
          value: "12",
          label: "12月"
        }
      ],

      yearoptions: [
        {
          value: "",
          label: "不限"
        },
        {
          value: "2020",
          label: "2020"
        },
        {
          value: "2019",
          label: "2019"
        },
        {
          value: "2018",
          label: "2018"
        }
      ],

      options: [
        {
          value: "选项1",
          label: "不限"
        },
        {
          value: "选项2",
          label: "2020"
        },
        {
          value: "选项3",
          label: "2019"
        },
        {
          value: "选项4",
          label: "2018"
        }
      ],
      value: "",
      articleOptions: [],
      categoryOptions: [],
      articles: [] //文章内容
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    searchButton() {
      alert("搜索");
      console.log(this.search);
      axios
        .get("http://localhost:9200/guard/blog", {
          params: {
            categoryId: this.search.categoryId,
            keyWord: this.search.keyWord,
            year: this.search.year,
            month: this.search.month,
            tagId: this.search.tagId,
            username: this.search.username
          }
        })
        .then(this.getCategoryList);
    },
    getCategoryList(res) {
      this.categoryOptions = res.data.dataInfo;
    },
    getSearchData(res) {
      console.log("watch", res);
      this.articles = res.data.dataInfo;
      console.log("articles", this.articles);
    }
  },
  // 监听
  watch: {
    search: {
      deep: true,
      immediate: true,
      handler(newname, oldbname) {
        axios
          .get("http://localhost:9200/guard/blog", {
            params: {
              categoryId: this.search.categoryId,
              keyWord: this.search.keyWord,
              year: this.search.year,
              month: this.search.month,
              tagId: this.search.tagId,
              username: this.search.username
            }
          })
          .then(this.getSearchData);
      }
    }
  },
  mounted() {
    axios.get("http://localhost:9200/category/list").then(this.getCategoryList);
  }
};
</script>

<style scoped>
/* 文章管理 */
.article-guard {
  margin: 0 auto;
  float: left;
  width: 1017px;
  /* height: 100px; */
  background: #ffffff;
}
.article-nav {
  width: 980px;
  height: 45px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 5px;
  border-bottom: 2px solid #e9e9e9;
  box-sizing: border-box;
}
.article-nav span {
  padding-right: 60px;
  display: inline-block;
  position: relative;
}
.article-nav a {
  position: absolute;
  z-index: 10000;
  color: #999999;
  font-weight: bold;
  padding-bottom: 5px;
  display: block;
}
.article-nav a:hover {
  color: #ca0c18;
  border-bottom: 2px solid red;
}

/*筛选开始 */
.search-box {
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 20px;
  width: 980px;
  height: 65px;
  background: #f2f5f7;
  /* border: 2px solid yellow; */
  overflow: hidden;
}
.search-box-content {
  height: 40px;
  width: 100%;
  /* background: chartreuse; */
  margin-top: 12px;
}
.screen {
  float: left;
  line-height: 40px;
}
.el-select {
  width: 80px;
  float: left;
  margin-left: 18px;
  border-radius: 10px;
}

.select_category {
  margin-left: 50px;
  width: 150px;
}
.select_tag {
  width: 150px;
}
.el-input {
  margin-left: 50px;
  width: 200px;
}
.search-button {
  margin-left: 20px;
}
/* 文章列表开始 */
.content-list {
  /* background: pink; */
  width: 980px;
  height: 80px;
  margin: 0 auto;
  border-bottom: 1px dotted #dddddd;
  /* margin-top: 10px; */
}
.content-list-title {
  height: 25px;
  /* background: red; */
  padding-top: 18px;
  font-size: 18px;
  color: #4d4d4d;
}
.content-list-info span {
  display: inline-block;
  padding-right: 10px;
  padding-top: 5px;
  font-size: 12px;
  color: #999999;
  float: left;
}
.content-list-info {
  float: left;
}
.content-list-link {
  float: right;
  margin-right: 30px;
}
</style>