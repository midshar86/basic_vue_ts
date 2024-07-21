import { ref } from 'vue'
const count = ref(0)
const addCount = (val) => {
  count.value += val
}

export { count, addCount }