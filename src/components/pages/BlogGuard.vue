<template>
  <div class="body">
    <div class="content">
      <!-- 侧边栏 -->
      <div class="menu-aside">
        <el-row class="aside">
          <el-col :span="12">
            <!-- <h5>自定义颜色</h5> -->
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              text-color="#3D3D3D"
            >
     
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
              </el-menu-item>

<!-- 复制的 -->
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>博客管理</span>
                </template>
                <el-menu-item-group>
                  <!-- <template slot="title">分组一</template> -->
                  <el-menu-item index="1-1" @click="guardClick">文章管理</el-menu-item>
                  <el-menu-item index="1-2">评论管理</el-menu-item>
                </el-menu-item-group>
                <!-- <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group> -->
                <!-- <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu> -->
              </el-submenu>

              <!-- <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item> -->
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">标签管理</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <!-- 主要部分 -->
      <article-guard v-if="articleIsshow"></article-guard>
    </div>
  </div>
</template>

<script>
import ArticleGuard from "@/components/pages/content/ArticleGuard";

export default {
    components:{
        ArticleGuard
    },
  name: "BlogGuard",
  data() {
    return {
        articleIsshow:false,
      input: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    guardClick(){
        console.log("1",this.articleIsshow);
        this.articleIsshow = true;
    }
  }
};
</script>

<style scoped>
.el-submenu .el-menu-item{
    min-width: 180px;
}
a {
  text-decoration: none;
}
li {
  text-decoration: none;
  list-style: none;
  margin: 0;
  padding: 0;
}
.aside {
  width: 180px;
}
.body {
  background: #f5f6f7;
}

.content {
  background: #ffffff;
  width: 1200px;
  margin: 0 auto;
  border: 1px solid red;
  box-sizing: border-box;
  /* 父元素高度不确定，子元素浮动，父元素不能撑开盒子，这时候我们就要在这里加上这个属性 */
  overflow: hidden;
}
/* el-menu */
.el-menu-vertical-demo {
  width: 180px;
  /* float: left; */
}
/* 包裹侧边栏最外层的div，因为menu没有包裹，散乱的情况下浮不起来，或者浮动乱了 */
.menu-aside {
  float: left;
}
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
.info {
  /* background: springgreen; */
}
</style>