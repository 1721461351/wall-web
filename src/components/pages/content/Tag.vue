<template>
  <div>
    <!-- 轮播图+分类 -->

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
    </div>
  </div>
</template>

<script>
export default {
  // 这里要加引号引起来
  name: "Tag",
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

.type {
  width: 340px;
  height: 220px;
  /* border: 1px solid blue; */
  float: right;
  margin-top: 20px;
  background: #fffffe;
  /* margin-right: 50px; */
}

.el-tag {
  margin: 5px;
}
.el-icon-info {
  margin: 5px;
}
</style>