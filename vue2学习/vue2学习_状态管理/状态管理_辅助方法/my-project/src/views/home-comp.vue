<template>
  <div class="home-root">
    <h3>一般方法修改与使用vuex</h3>
    <p>
      <span>用户名</span>:<span>{{ $store.state.userinfo.username }}</span>
    </p>
    <p>
      <span>地址</span>:<span>{{ $store.state.userinfo.location }}</span>
    </p>
    <p>
      <span>购物清单</span>:<ul class="list">
        <li v-for="item in $store.state.userinfo.products" :key="item">{{ item }}</li>
      </ul>
    </p>
    <p>
      <span>总价</span>:<span>{{$store.getters.showPrice }}</span>
    </p>
    <div class="btns">
      <button @click="changeUser">点击更改用户名</button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this)
  },
  methods: {
    changeUser() {
      this.$store.dispatch('changeUser', 'Tom')
    }
  }
}
</script>

<style lang="less" scoped>
.home-root{
  h3{
    line-height: 40px;
    margin-left: 30px;
  }
  p{
    font-size: 16px;
    margin: 0 20px;
    span{
      &:first-child{
      display: inline-block;
      width: 80px;
      box-sizing: border-box;
      text-align-last: justify;
      height: 30px;
      line-height: 30px;
      margin: 0 10px;
      }
      &:last-child{
        display: inline-block;
        line-height: 30px;
        margin-left: 10px;
      }
    }

    ul{
      list-style: none;
      display: inline-block;
      vertical-align: top;
      margin-left: 10px;
      li{
        line-height: 30px;
      }
    }
  }
  .btns{
    display: flex;
    justify-content: space-around;
    button{
      width: fit-content;
      padding: 5px 10px;
      font-size: 14px;
      border-radius: 5px;
      outline: none;
      border: 1px solid #eee;
      cursor: pointer;
      &:hover{
        background-color: #ccc;
      }
      &:active{
        background-color: #aaa;
        color: black;
      }
    }
  }
}
</style>
