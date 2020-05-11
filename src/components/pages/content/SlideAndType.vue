<template>
  <div>
    <div>
    <!-- 轮播图+分类 -->
    <div class="slide_and_type" >
      <template>
        <el-carousel indicator-position="inside" class="slideshow" height="250px" @change="slideChange">
          <el-carousel-item v-for="item in slideShow" :key="item.id" >
            <h3>
              <img :src="item.headImg" alt="沈农" width="976" height="220"/>
            </h3>
          </el-carousel-item>
        </el-carousel>
      </template>
      <div>
        <!-- 分类标签 -->
    <div class="type soild-shadow">
      <p>
        <i class="el-icon-info" style="font-weight:bold;font-size:20px;"><span style="padding-left:20px">{{singleSlide.title==null||this.singleSlide.title==''?slideShow[0].title:singleSlide.title}}</span></i>
        <ul>
          <li>
             {{singleSlide.description==null||singleSlide.description==''?slideShow[0].description:singleSlide.description}}
          </li>
          <li>
            <el-button type="primary" style="margin-top:5px" v-if="singleSlide.isShowButton"><a href="http://www.baidu.com"></a>详情</el-button>
          </li>
        </ul>
      </p>
      <span>
        <!-- {{item.content}} -->
        <!-- <el-tag>{{tag.tag}}</el-tag> -->
        <!-- <el-tag>
          <el-link type="success" :href="tag.href">{{tag.tag}}</el-link>
        </el-tag> -->
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
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  // 这里要加引号引起来
  name: "SlideAndType",
  data() {
    return {
      singleSlide:{
        title:'',
        description:'',
        isShowButton:false,
      },
      
      slideShow: [
        // {
        //   picture:"https://jwc.syau.edu.cn/img/1.JPG",
        //     title:"我是标题1",
        //     description:"我是内容1"
        // },
        //      {
        //   picture:"https://jwc.syau.edu.cn/img/3.JPG",
        //     title:"我是标题2",
        //     content:"我是内容2"
        // },
        // "https://jwc.syau.edu.cn/img/1.JPG",
        // "https://jwc.syau.edu.cn/img/3.jpg"
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
  },
  methods:{
    // 这里传的参数是索引
    slideChange(index){
      console.log("this",index);
      // 把当前的轮播图传给singleSlide。
      this.singleSlide = this.slideShow[index];
      console.log("single",this.singleSlide);
      if(this.singleSlide.buttonHref!=null){
this.singleSlide.isShowButton = true;
      }
    }
  },
  mounted(){
    Axios.get("http://localhost:9200/carousel").then(res=>{
      console.log("轮播",res);
      this.slideShow = res.data.dataInfo;
      if(this.slideShow[0].buttonHref != null){
this.singleSlide.isShowButton=true;
      }

    })
  }
  
};
</script>


<style scoped>
a{
text-decoration: none;
}
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
  border-radius: 0;
}

.slide_and_type {
  /* width: 1200px; */
    width: 1200px;
border-bottom: 1px solid #f0f0f0;
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