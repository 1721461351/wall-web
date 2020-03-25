<template>
    <div>

    <h1 class="logo">沈农博客</h1>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1" class="el-menu-title">首页</el-menu-item>
  <el-submenu index="2" class="el-menu-title">
    <template slot="title">专栏</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <!-- <el-submenu index="2-4">
      <template slot="title">头像</template>
      <el-menu-item index="2-4-1">时光轴</el-menu-item>
      <el-menu-item index="2-4-2">我的文章</el-menu-item>
      <el-menu-item index="2-4-3">退出</el-menu-item>
    </el-submenu> -->
  </el-submenu>

  <el-submenu index="3" class="el-menu-title">
    <template slot="title">头像</template>
    <el-menu-item index="3-1">时光轴</el-menu-item>
    <el-menu-item index="3-2">我的文章</el-menu-item>
    <el-menu-item index="3-3">退出</el-menu-item>
    
  </el-submenu>
  <el-menu-item index="3" class="el-menu-title">写文章</el-menu-item>
  <el-menu-item index="4" class="el-menu-title"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
  <el-menu-item index="5" class="el-menu-title"><el-button type="primary" icon="el-icon-search">搜索</el-button></el-menu-item>
</el-menu>
<div class="line"></div>


    </div>
</template>

<script>

export default {
    name:'Header',
     data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  
}
</script>

<style>
  .el-menu{
    background-color:  #F8F8F8;
    float: right;
    
  }

    .el-menu-title {
    padding: 0 40px;
  }

  .logo{
    text-decoration: none;
    display: inline;
    color: #009A61;

  }

    .el-menu-title template{
    padding: 0 100px;
  }

  .el-header, .el-footer {
    background-color: #F8F8F8;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }


  
  .el-main {
    background-color: #E9EEF3;
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
</style>