<template>
  <div id="login-comp">
    <el-form
      :model="userinfo"
      status-icon
      :rules="rules"
      ref="userinfo"
      label-width="100px"
      class="userinfo"
    >
      <!-- 用户名输入框 -->
      <!-- prop属性表示按照校验对应的校验规则校验 -->
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="userinfo.username"></el-input>
      </el-form-item>
      <!-- 密码输入框 -->
      <el-form-item label="用户密码" prop="password">
        <el-input type="password" v-model="userinfo.password"></el-input>
      </el-form-item>
      <!-- 表单按钮 -->
      <el-form-item>
        <el-button type="primary" @click="submitForm('userinfo')"
          >提交</el-button
        >
        <el-button @click="resetForm('userinfo')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Message } from 'element-ui'

export default {
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('用户名不能为空!'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空!'))
      } else {
        callback()
      }
    }
    return {
      // 存放用户信息
      userinfo: {
        username: '',
        password: ''
      },
      // 校验规则
      rules: {
        username: [{ validator: validateUsername, trigger: 'blur' }],
        password: [{ validator: validatePassword, trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 提交表单数据
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 通过校验规则
          Message({
            message: '用户登录成功! 3s 后将跳转至首页...',
            type: 'success',
            duration: 2000,
            center: true
          })
          if (this.userinfo.username && this.userinfo.password) {
            this.$store.dispatch('handlerUserInfo', {
              username: this.userinfo.username,
              password: this.userinfo.password
            })
          } else {
            return false
          }
        } else {
          // 未通过校验规则
          Message({
            message: '用户登录失败!',
            type: 'warning',
            duration: 1000,
            center: true
          })
          return false
        }
      })
    },
    // 重置表单数据
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
#login-comp {
  height: 100vh;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  .userinfo {
    width: 500px;
    height: 300px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #cdcdcd;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .el-form-item {
      // width: 100%;
      text-align: center;
      .el-form-item--feedback {
        margin-left: 0px !important;
      }
      .el-input {
        width: 300px;
      }
      &:last-child {
        margin-left: -100px;
      }
    }
  }
}
</style>
