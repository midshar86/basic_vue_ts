<template>
  <h2>选项式API使用vuex</h2>
  <div class="show">
    <h3>fruitInfo</h3>
    <p>name: {{ fruitInfo.name }}</p>
    <p>type: {{ fruitInfo.type }}</p>
    <p>price: {{ packingPrice }}</p>
  </div>
  <div class="btns">
    <p><button @click="updatePrice(5)">点击更改price</button></p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  mounted() {
    console.log(this.$store)
  },
  computed: {
    ...mapState(['fruitInfo']),
    ...mapGetters(['packingPrice'])
  },
  methods: {
    updatePrice(val) {
      this.$store.dispatch('priceAdd', val)
    }
  }
}
</script>

<style lang="less" scoped></style>
