<template>
  <div>
    <div class="article-head">
      <div class="article-manage">
        <a href="http://www.baidu.com">
          <i class="el-icon-arrow-left"></i>
          <span>文章管理</span>
        </a>
      </div>

      
      <!-- <el-form :model="ruleForm" :rules="rules" ref="ruleFormRef" label-width="100px" class="demo-ruleForm"> -->
        
    
      <!-- 文章标题 -->
      <el-input
        class="article-title"
        type="text"
        placeholder="请输入标题"
        v-model="form.title"
        maxlength="10"
        show-word-limit
      ></el-input>
      <div class="head3">
        <!-- 按钮 -->
        <el-button round>保存草稿</el-button>
        <el-button type="success" @click="publishBlog" round>发布文章</el-button>
        <!-- 头像 -->
        <div class="user-head-img">
          <a href>
            <img src="https://profile.csdnimg.cn/0/8/9/3_qq_41346335" height="32" width="32" />
          </a>
        </div>
      </div>
    </div>
    <div class="markdown">
      <!-- markdown界面 -->
      <mavon-editor
        v-model="form.content"
        style="height: 100%; min-height: 550px; min-width: 200px; z-index: 1500;"
        :toolbars="toolbars"
      />
    </div>

    <!-- 点击发布按钮触发的对话框 -->
    <div class="dialog">
      <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->

      <el-dialog title="发布博客" :visible.sync="dialogFormVisible">
        <!-- 标签 -->
        <!-- 注意：prop属性中不要用: -->
        <el-form :model="form"
        ref="ruleFormRef"
        :rules="rules">
          <div class="form-native">请勿发布涉及政治、广告、营销、翻墙、违反国家法律法规等内容</div>
          <el-form-item label="文章标签" 
          :label-width="formLabelWidth"
          prop="tagRule"
          >
            <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
            >{{tag}}</el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            ></el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>

            <!-- 标签表 -->
            <div class="tag-table">
              <div>
                <el-checkbox-group v-model="dynamicTags" @change="tagChange">
                  <el-checkbox v-for="(tag,index) in tags" :label="tag" :key="index">{{tag}}</el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
            <!-- <el-input v-model="form.name" autocomplete="off"></el-input> -->
          </el-form-item>
          <!-- 循环要写在option中，而不是select中 -->
          <el-form-item label="文章类型" :label-width="formLabelWidth" prop="category">
            <el-select v-model="form.category" placeholder="请选择类别">
              <el-option
                v-for="category in categoryList"
                :key="category.categoryId"
                :label="category.categoryName"
                :value="category.categoryId"
              ></el-option>
              <!-- <el-option :label="category" value="beijing"></el-option> -->
            </el-select>
          </el-form-item>
          <!-- 发布形式 -->
          <el-form-item label="发布形式:" :label-width="formLabelWidth" prop="pubishStatus">
            <el-radio-group v-model="form.publishStatus">  
              <el-radio :label="0">私密</el-radio>
              <el-radio :label="1">公开</el-radio>
              <el-radio :label="2">粉丝可见</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="success" @click="publishBlog1('ruleFormRef')" :plain="true">发布文章</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import HomeHeader from "@/components/pages/head/HomeHeader";
import axios from 'axios';
export default {
  name: "WriterBlog",
  components: {
    HomeHeader
  },
  methods: {


    tagChange(value) {
      console.log("value",value);
      console.log("dyn",this.dynamicTags)
      this.dynamicTags = value;
      // console.log(dynamicTags.tagName);
      // this.checkedCities = value;
    },
    publishBlog() {
      this.dialogFormVisible = true;
      console.log(this);
    },

      // 发布文章终极
      publishBlog1(forName){
        console.log("title",this.form.title);
          if(this.form.title==""){
            this.$message({
              message:"请输入标题!",
              type:"warning"
            });
            return;
          }
          if(this.form.content==""){
            this.$message({
              message:"请输入内容!",
              type:"warning"
            });
            return;
          }
        console.log("this",this);
        this.$refs[forName].validate((valid)=>{
        
          if(valid){
            alert("submit");
            this.form.selectTag = this.dynamicTags;
           this.dialogFormVisible = false;
          //  发布博客
          axios.post("http://127.0.0.1:9200/blog/writerblog",this.form)
          .then(response=>{
            console.log(response);
          })
          .catch(error=>{
            console.log("提交失败",error);
          })
            console.log("form",this.form);
          }else{
            alert("error");
            return false;
          }
        })
        console.log(this.form);
      },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
        this.tags.push(inputValue);
        // 把内容加到表单中
        // this.form.selectTag.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    }
  },
  mounted(){
      axios.get('http://127.0.0.1:9200/category/list')
      .then((res)=>{
        console.log(res);
        res = res.data;
        this.categoryList = res.dataInfo;
      });
      // 这里参数要这么传递
      axios.get('http://127.0.0.1:9200/tag/list',{params:{
        username:this.form.username
      }
      })
      .then((res)=>{
        console.log("tag",res);
        this.tags = res.data.dataInfo;
      });
  },
  data() {
    return {
      dynamicTag:{
        
      },
      // 是否公开
      radio:"",
      // 分类
      categoryList: [],
      tags: ["标签一", "标签二", "标签三"],
      // tags:[],
      checkedCities: [],
      // dynamicTags: ["标签一", "标签二", "标签三"],
      // 开始要把dynamicTags置为空
      // dynamicTags为我们要设置的标签
      dynamicTags: [],
      inputVisible: false,
      inputValue: "",
      text: "",
      value: "",
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      },

      dialogFormVisible: false,
      form: {
        username:"2016188023",
        selectTag:[],
        content:"",
        // radio:"",
        publishStatus:"",
        title:"",
        tag:[],
        // name: "",
        category:"",
        // date1: "",
        // date2: "",
        // delivery: false,
        // type: [],
        // resource: "",
        desc: ""
      },
      // 表单验证
      rules:{
        category:[
          {required: true, message: '请选择博客类别', trigger: 'change'}
        ],
        publishStatus:[
          {required: true, message: '请选择发布形式', trigger: 'change'}
        ],
        tagRule:
        [
          //  { 
          //    validator: (rule,value)=>value==='xiaohei',
          //  message:'输入有误',
          //  trigger: 'blur' },
          //  {required:true,message:'请输入标签',trigger:'change'}
        ]
      },
      formLabelWidth: "120px"
    };

    var isRepetitiveTag = (rule,value,callback)=>{
      alert("????");
      console.log("tagValue",value);
      if (value === '') {
        
      }else{
      callback();

      }
    }
  }
};
</script>
<style scope>
/* 初始化 */
* {
  text-decoration: none;
  margin: 0;
  /* padding: 0; */
}
/* 文章头部开始 */
.article-head {
  width: 100%;
  height: 55px;
  /* border: 1px solid red; */
}
.article-head .head3 {
  float: left;
}
/* 三大模块左浮动 */
.article-manage,
.article-title,
.head3 {
  float: left;
}
/* 管理博客模块开始 */
.article-manage {
  float: left;
  margin-top: 16px;
  margin-left: 20px;
}

.article-manage span {
  font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  padding: 3px;
  padding-left: 0px;
  color: #737373;
  font-size:18px;   

}
/* 管理博客模块结束 */

/* 文章标题模块开始 */
.article-title {
  float: left;
  width: 926px;
  margin-top: 8px;
}
/* 文章标题模块结束 */

/* 按钮+头像模块开始 */
/* 按钮 */
.head3 {
  padding-left: 16px;

  margin-top: 8px;
}
/* 头像 */
.user-head-img {
  float: right;
  /* border-radius: 5; */
}

.user-head-img img {
  margin-top: 3px;
  padding-left: 16px;
  border-radius: 50%;
  width: 24;
  height: 24;
  display: block;
  /* padding: 10px; */
}
/* 按钮+头像模块结束 */

/* 文章头部结束 */

/* markdown界面开始 */
.markdown {
  margin-top: 10px;
}

/* 弹出框 */
/* 发文注意事项 */
.form-native {
  background: #fff6e5;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 550px;
  height: 36px;
  line-height: 36px;
  color: #e33e33;
}


/* 标签 */
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}

.tag-table {
  width: 470px;
  height: 160px;
  border: 1px solid #E8E8EE;
  margin-top: 20px;
}
</style>