<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'
// 在 vue3 中使用 vue2 的语法访问 store 的数据
export default {
  mounted() {
    console.log(this.$store)
  },
  methods: {
    ...mapActions(['changeCount']),
    ...mapMutations(['CHANGE_COUNT'])
  },
  computed: {
    ...mapGetters(['showCount']),
    ...mapState(['count'])
  }
}
</script>

<template>
  <div>
    <p>直接展示 count => {{ $store.state.count }}</p>
    <p>使用辅助函数展示 count => {{ count }}</p>
    <p>直接访问 getters => {{ $store.getters.showCount }}</p>
    <p>使用辅助函数访问 getters => {{ showCount }}</p>
    <p>直接访问： <button @click="$store.dispatch('changeCount', 5)">点击更改count</button></p>
    <p>使用辅助函数： <button @click="changeCount(1)">点击更改count</button></p>
    <p>
      直接commit mutations: <button @click="$store.commit('CHANGE_COUNT', 3)">点击更改count</button>
    </p>
    <p>使用辅助函数访问 mutations: <button @click="CHANGE_COUNT(10)">点击更改count</button></p>
  </div>
</template>

<style scoped></style>
