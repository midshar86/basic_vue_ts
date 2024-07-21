<template>
  <div class="friend-root">
    <h3>一般方法访问模块中的数据</h3>
    <div class="module">
      <div>
        <p>{{ $store.getters['addModule/showAddNum'] }}</p>
        <span>加运算</span>:<span>{{ $store.state.addModule.count }}</span>
      </div>
      <div>
        <p>{{ $store.getters['subModule/showSubNum'] }}</p>
        <span>减运算</span>:<span>{{ $store.state.subModule.count }}</span>
      </div>
      <div>
        <button @click="addCount">点击执行加法运算</button
        ><button @click="subCount">点击执行减法运算</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this)
  },
  methods: {
    addCount() {
      this.$store.dispatch('addModule/addCount', 2)
    },
    subCount() {
      this.$store.dispatch('subModule/subCount', 1)
    }
  }
}
</script>

<style lang="less" scoped>
.friend-root {
  h3 {
    line-height: 40px;
    margin-left: 30px;
  }
  .module {
    margin-left: 30px;
    div:last-child {
      display: flex;
      justify-content: space-around;
      button {
        height: 25px;
        padding: 0 10px;
        border-radius: 5px;
        background-color: skyblue;
        border: 1px solid #eee;
        &:hover {
          background-color: rgb(117, 176, 199);
        }
        &:active {
          background-color: rgb(67, 103, 117);
          color: white;
        }
      }
    }
  }
}
</style>
