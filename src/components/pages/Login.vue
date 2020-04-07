<template>
  <div>
    <div class="app">
      <div class="login-form">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleFormRef"
          label-width="50px"
          class="demo-ruleForm"
        >
          <!-- prop:校验规则，前面不用加rules -->
          <el-form-item label prop="username">
            <el-input
              v-model="ruleForm.username"
              autocomplete="off"
              prefix-icon="iconfont icon-denglu"
              placeholder="账号"
            ></el-input>
          </el-form-item>
          <el-form-item label prop="checkPass">
            <el-input
              type="password"
              v-model="ruleForm.checkPass"
              autocomplete="off"
              prefix-icon="iconfont icon-mima"
              placeholder="密码"
            ></el-input>
          </el-form-item>
          <el-form-item label prop="age">
            <el-input v-model.number="ruleForm.age" placeholder="验证码"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="btn-submit">
              <el-button type="primary" @click="submitForm('ruleFormRef')">提交</el-button>
              <el-button @click="resetForm('ruleFormRef')">重置</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value !== this.ruleForm.username) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        checkPass: "",
        age: ""
      },
      rules: {
        //   这里对应el-form-item的prop属性
        username: [
          {
            // 校验规则，用户名不能为空
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          },
          //   校验规则2
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        password: [
          {
            // 校验规则，密码不能为空
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          //   校验规则2
          { min: 3, max: 10, message: "密码长度在 3 到 10 个字符", trigger: "blur" }
        ],
        // username: [{ validator: validatePass, trigger: "blur" }],
        // checkPass: [{ validator: validatePass2, trigger: "blur" }],
        // age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit !!");
          return false;
        }
      });
    },
resetForm:function(formName){
     console.log(this)

      this.$refs[formName].resetFields();
},

// resetForm:(formName)=>{
//     console.log(this)

//       this.$refs[formName].resetFields();
// }
    // resetForm(formName) {
    //             console.log(this)

    //   this.$refs[formName].resetFields();
    // },
    // ruleFormRefReset:()=>{
    //     console.log(this)
    // },
    // ruleFormRefReset(){
    //     console.log(this)
    // }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: url(https://cn.bing.com/th?id=OHR.PascuaFlorida_EN-US1819624171_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp)
    no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}
.app {
  width: 400px;
  height: 360px;
  /* background: green; */
  border: 1px solid red;
  margin: 0 auto;
  border-radius: 6px;
  box-sizing: border-box;
  margin-top: 10%;
}
.login-form {
  width: 350px;
  margin: 0 auto;
  margin-top: 50px;
  margin-left: 0px;
}
/* 按钮 */
/* css3中的弹性盒子 */
.btn-submit {
  display: flex;
  box-sizing: border-box;
  justify-content: center;
}
</style>