<template>
  <h3>子组件</h3>
  <!-- 在子组件中实现一个模态框 -->
  <!-- 在使用less嵌套语法的情况下不要随便使用Teleport -->
  <div class="box">
    <div class="outer">
      <div class="middle">
        <div class="inner"><button @click="isShow = true">点击显示模态框</button></div>
        <Teleport to="body">
          <div class="modal" v-if="isShow">
            <div class="container">
              <div class="info">默认内容</div>
              <p><span @click="isShow = false">关闭</span></p>
            </div>
          </div>
        </Teleport>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isShow = ref(false)
</script>

<style lang="less" scoped>
.box {
  height: 70vh;
  background-color: #ddd;
  padding: 30px;
  .outer {
    margin: 50px;
    padding: 20px;
    height: 50vh;
    background-color: aquamarine;
    .middle {
      padding: 20px;
      height: 30vh;
      background-color: sandybrown;
      .inner {
        background-color: skyblue;
        height: 10vh;
      }
    }
  }
}
.modal {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    width: 400px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: pink;
    border-radius: 10px;
    .info {
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      padding-top: 20px;
    }
    p {
      width: 100%;
      display: flex;
      justify-content: space-around;
      span {
        display: inline-block;
        border: 1px solid #eee;
        width: 60px;
        height: 30px;
        line-height: 30px;
        background-color: honeydew;
        text-align: center;
        border-radius: 5px;
        cursor: default;
        &:hover {
          background-color: rgb(195, 208, 195);
        }
      }
    }
  }
}
</style>
