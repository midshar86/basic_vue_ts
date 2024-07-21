import { setItem, getItem } from '@/utils/saveToStorage'

export const piniaPlugin = () => {
  return {
    constObj: '自定义pinia插件返回的静态数据'
  }
}

export const funPlugin = ({ store }) => {
  // 读取 localStorage 中的数据到 store 中的 state
  if (getItem('count') && store.$id === 'countPart') {
    store.count = Number(getItem('count'))
  }
  store.extra = '自定义pinia插件返回的函数数据'
  store.$subscribe(() => {
    console.log('订阅到数据发生了改变, 仓库名称: ', store.$id)
    if (store.$id === 'countPart') {
      // 当目标仓库改变时, 将数据存入本地
      setItem('count', store.count)
    }
  })
}