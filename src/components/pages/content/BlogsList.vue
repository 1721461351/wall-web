<template>
  <div>
    <!-- 写文章 -->
    
    <div class="articles_and_recommends">
      <article class="article">
        <!-- 文章图片 -->
        <div class="article-img">
          <a href="https://jwc.syau.edu.cn">
            <img src="http://oss.94rg.com/oneblog/20200321162655133.png-94rg001" alt="必经之路" />
          </a>
          <!-- 文章分类标签 -->
          <span class="article-type">
            <a href="#">站长之家</a>
          </span>
        </div>
        <!-- 文章标题和内容 -->
        <div class="article-header">
          <h4>
            <a href="https://jwc.syau.edu.cn">新手到站长的必经之路</a>
          </h4>
          <!-- 文章内容 -->
          <div class="article-content">很容易被误诊为心脏病发作。。</div>
        </div>

        <!-- 文章其他内容 -->
        <!-- 日期，浏览，评论，赞 -->
        <div class="other">
          <div class="article-other">
            <div class="artcle-date">2020-03-24</div>
            <div class="article-read">浏览(10)</div>
            <div class="article-comment">评论(1)</div>
            <div class="article-zan">赞(7)</div>
            <!-- 阅读全文 -->
            <div class="article-more">
              <a href="#">阅读全文</a>
            </div>
          </div>
        </div>
      </article>
 <article class="article">
        <!-- 文章图片 -->
        <div class="article-img">
          <a href="https://jwc.syau.edu.cn">
            <img src="http://oss.94rg.com/oneblog/20200321162655133.png-94rg001" alt="必经之路" />
          </a>
          <!-- 文章分类标签 -->
          <span class="article-type">
            <a href="#">站长之家</a>
          </span>
        </div>
        <!-- 文章标题和内容 -->
        <div class="article-header">
          <h4>
            <a href="https://jwc.syau.edu.cn">新手到站长的必经之路</a>
          </h4>
          <!-- 文章内容 -->
          <div class="article-content">很容易被误诊为心脏病发作。。</div>
        </div>

        <!-- 文章其他内容 -->
        <!-- 日期，浏览，评论，赞 -->
        <div class="other">
          <div class="article-other">
            <div class="artcle-date">2020-03-24</div>
            <div class="article-read">浏览(10)</div>
            <div class="article-comment">评论(1)</div>
            <div class="article-zan">赞(7)</div>
            <!-- 阅读全文 -->
            <div class="article-more">
              <a href="#">阅读全文</a>
            </div>
          </div>
        </div>
      </article>

      <article class="article">
        <!-- 文章图片 -->
        <div class="article-img">
          <a href="https://jwc.syau.edu.cn">
            <img src="http://oss.94rg.com/oneblog/20200321162655133.png-94rg001" alt="必经之路" />
          </a>
          <!-- 文章分类标签 -->
          <span class="article-type">
            <a href="#">站长之家</a>
          </span>
        </div>
        <!-- 文章标题和内容 -->
        <div class="article-header">
          <h4>
            <a href="https://jwc.syau.edu.cn">新手到站长的必经之路</a>
          </h4>
          <!-- 文章内容 -->
          <div
            class="article-content"
          >很容易被误诊为心脏病发作。很容易被误诊为心脏病发作。当深层情绪引起过度焦虑导致胸痛或呼吸短促等症状时，就容易出现破碎心脏综合症。这往往更容易发生在女性身上，很容易被误诊为心脏病发作。</div>
        </div>

        <!-- 文章其他内容 -->
        <!-- 日期，浏览，评论，赞 -->
        <div class="other">
          <div class="article-other">
            <div class="artcle-date">2020-03-24</div>
            <div class="article-read">浏览(10)</div>
            <div class="article-comment">评论(1)</div>
            <div class="article-zan">赞(7)</div>
            <!-- 阅读全文 -->
            <div class="article-more">
              <a href="#">阅读全文</a>
            </div>
          </div>
        </div>
      </article>
    </div>
    <!-- 分   页 -->
    <div class="block">
      <!-- <span class="demonstration">页数较少时的效果</span> -->
      <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogsList"
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
  background: #f8f8f8;
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
  background: #f8f8f8;
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