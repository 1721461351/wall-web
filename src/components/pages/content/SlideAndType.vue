<template>
  <div>
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
      <p>
        <i class="el-icon-info">我的标签</i>
      </p>
      <span v-for="(tag,index) in tags" :key="index">
        <!-- <el-tag>{{tag.tag}}</el-tag> -->
        <el-tag>
          <el-link type="success" :href="tag.href">{{tag.tag}}</el-link>
        </el-tag>
      </span>
      <!-- <el-tag>标签一</el-tag>
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
      <el-tag type="danger">标签五</el-tag>-->
    </div>
        <!-- 推荐阅读 -->
        <!-- <div class="recommend-read">
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
        </div>-->

        <!-- 网站信息 -->
        <!-- <div class="wall-info">网站信息</div> -->
      </div>
    </div>


  </div>
</template>

<script>
export default {
  // 这里要加引号引起来
  name: "SlideAndType",
  data() {
    return {
      slideShow: [
        "https://jwc.syau.edu.cn/img/1.JPG",
        "https://jwc.syau.edu.cn/img/3.jpg"
      ],
      tags: ["java", "python"],
      tags: [
        {
          tag: "java",
          href: "http://www.baidu.com"
        },
        {
          tag: "c",
          href: "http://www.souhu.com"
        }
      ]
    };
  }
};
</script>


<style scoped>
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
  /* width: 1200px; */
    width: 1200px;

  height: 260px;
  margin: 5px auto;
}

.slideshow {
  width: 850px;
  /* width: 1200px; */
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
  /* margin-right: 50px; */
}

.el-tag {
  margin: 5px;
}
.el-icon-info {
  margin: 5px;
}
</style>