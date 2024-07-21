// 将数据持久化到本地
export const setItem = (key, val) => {
  localStorage.setItem(key, val)
}
export const getItem = (key) => {
  return localStorage.getItem(key)
}