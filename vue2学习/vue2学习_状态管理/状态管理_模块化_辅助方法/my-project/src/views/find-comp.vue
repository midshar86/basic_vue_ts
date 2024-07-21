<template>
  <div class="find-root">
    <h3>辅助方法访问模块中的数据</h3>
    <div class="module">
      <div>
        <p>{{ add_count }}</p>
        <span>加运算</span>:<span>{{ showAddNum }}</span>
      </div>
      <div>
        <p>{{ sub_count }}</p>
        <span>减运算</span>:<span>{{ showSubNum }}</span>
      </div>
      <div>
        <button @click="addCount(5)">点击执行加法运算</button
        ><button @click="SUBCOUNT(1)">点击执行减法运算</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState('addModule', { add_count: 'count' }),
    ...mapState('subModule', { sub_count: 'count' }),
    ...mapGetters('addModule', ['showAddNum']),
    ...mapGetters('subModule', ['showSubNum'])
  },
  methods: {
    ...mapActions('addModule', ['addCount']),
    ...mapMutations('subModule', ['SUBCOUNT'])
  },
  mounted() {
    console.log(this)
  }
}
</script>

<style lang="less" scoped>
.find-root {
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
