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
    </div>
  </div>
</template>

<script>
export default {
  // 这里要加引号引起来
  name: "Slide",
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

</style>