<template>
  <div class="mine-root">
    <h3>使用辅助方法获取与操作vuex</h3>
    <p>
      <span>用户名</span>:<span>{{ userinfo.username }}</span>
    </p>
    <p>
      <span>地址</span>:<span>{{ userinfo.location }}</span>
    </p>
    <p>
      <span>购物清单</span>:<ul class="list">
        <li v-for="item in userinfo.products" :key="item">{{ item }}</li>
      </ul>
    </p>
    <p>
      <span>总价</span>:<span>{{showPrice }}</span>
    </p>
    <div class="btns">
      <!-- 注意从数据仓库中取出来的参数需要传递参数 -->
      <button @click="changeUser('Bob')">点击更改地址</button>
      <button @click="CHANGEPRODUCTS(['Computer','Books'])">点击更改商品</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex'
export default {
  mounted() {
    console.log(this)
  },
  methods: {
    ...mapActions(['changeUser']),
    ...mapMutations(['CHANGEPRODUCTS'])
  },
  computed: {
    ...mapState(['userinfo']),
    ...mapGetters(['showPrice'])
  }
}
</script>

<style lang="less" scoped>
.mine-root{
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
