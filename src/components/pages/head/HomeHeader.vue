<template>
  <div>
    <h1 class="logo">沈农博客</h1>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <!-- <h1 class="logo">沈农博客</h1> -->

      <el-menu-item index="1" class="el-menu-title">首页</el-menu-item>
      <el-submenu index="2" class="el-menu-title">
        <template slot="title">分类</template>
        <el-menu-item
          :index="category.categoryId"
          v-for="category in categoryList"
          :key="category.categoryId"
          @click="handCategoryList(category.categoryId)"
        >{{category.categoryName}}</el-menu-item>
      </el-submenu>

      <el-menu-item index="4" class="el-menu-title">
        <span>友链</span>
      </el-menu-item>
      <!-- <el-submenu index="3" class="el-menu-title">
        <template slot="title">头像</template>
        <el-menu-item index="3-1">时光轴</el-menu-item>
        <el-menu-item index="3-2">我的文章</el-menu-item>
        <el-menu-item index="3-3">退出</el-menu-item>

      </el-submenu>
      <el-menu-item index="3" class="el-menu-title">写文章</el-menu-item>
      <el-menu-item index="4" class="el-menu-title"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
      <!-- <el-menu-item index="5" class="el-menu-title">
        <el-input style="height:20px"></el-input>
        <el-button icon="el-icon-search" style="">搜索</el-button>
      </el-menu-item> -->
        <el-menu-item index="5" class="el-menu-title">
        <span>关于</span>
      </el-menu-item>
       <el-menu-item index="7" class="el-menu-title" v-if="!isLogin">
        <span><a href="http://127.0.0.1:8080/login">登录/注册</a></span>
      </el-menu-item>
       <el-submenu index="6" class="el-menu-title" v-if="isLogin">
        <template slot="title"><img src="https://profile.csdnimg.cn/0/8/9/3_qq_41346335" height="32" width="32" style="border-radius: 50%;"></template>
        <el-menu-item index="6-1">时光轴</el-menu-item>
        <el-menu-item index="6-2">我的文章</el-menu-item>
        <el-menu-item index="6-3">退出</el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props:{
    user:Object
  },
  name: "Header",
  data() {
    return {
      isLogin:false,
      activeIndex: "1",
      activeIndex2: "1",
      categoryList: []
    };
  },
  watch:{
user:{
  handler(newValue,oldValue){
    if(this.user!=null&&this.user!=undefined){
      console.log("headuser",this.user);
      this.isLogin = true;
    }else{
      this.isLogin=false;
    }
  },
    // deep为深度监听，设置deep为true可以监听到对象属性
      deep: true,
      // immediate可以在第一次的时候就能监听到数据的改变
      immediate: true
}
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    getData(response) {
      console.log("头", response);
      this.categoryList = response.data.dataInfo;
      console.log(this.categoryList);
    },

    // 按照分类进行查询
    handCategoryList(categoryId) {
      this.$router.push({path:"/type/"+categoryId});
      alert(categoryId);
      // 把子组件的categoryId传递给父组件，让他来进行分类查询
      this.$emit("selectbycategoryid", categoryId);
    }
  },

  mounted() {
    axios.get("http://localhost:9200/category/list").then(this.getData);
  }
};
</script>

<style>
a{
  text-decoration: none;
}
.el-menu {
  background-color: #fffffe;
  float: right;
  margin-right: 20px;
  
}

.el-menu-title {
  padding: 0 30px;
}

.logo {
  text-decoration: none;
  display: inline;

  margin-right: 450px;
  /* float: left; */
  color: #009a61;
}

.el-menu-title template {
  padding: 0 100px;
}

.el-header,
.el-footer {
  background-color: #fffffe;
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

/* 头像下拉框 */
.el-dropdown-link {
  /* border: 1px solid red; */
  cursor: pointer;
  color: #409eff;
  display: inline-block;
  padding-left: 6px;
  /* padding-top: 20px; */
  margin-bottom: -6px;
  /* width: 40px; */
  /* height: 40px; */
}

/* 头像 */
.user-head-img {
  float: right;
  
  /* border-radius: 5; */
}

.user-head-img img {
  /* border: 1px solid greenyellow; */
  padding-top: 10px;
  /* padding-left: 16px; */
  border-radius: 50%;
  width: 32;
  height: 32;
  display: block;
  /* position: relative; */
  /* padding: 10px; */
}
/* 按钮+头像模块结束 */
</style>
