// number类型
const addFun = (m: number, n: number): number => {
  return m + n
}
console.log("number类型", addFun(2, 3));


// boolean 类型
const toggleFun = (bool: boolean): boolean => {
  return !bool
}
console.log("boolean类型", toggleFun(true));


// string类型
const concatFun = (target: string, str: string): string => {
  return target.concat(str)
}
console.log("string类型", concatFun("Hello", "World"));


// 数组类型
const strToArray = (str: string | number): (string | number)[] => {
  if (typeof str === 'number') {
    let res = str.toString().split("").map(item => Number(item))
    return res
  }
  return str.split("")
}
console.log("数组类型", strToArray(222));
console.log("数组类型", strToArray("666"));


// 元组类型
const changePos = (arr: [string, number]): [number, string] => {
  return [arr[1], arr[0]]
}
console.log("元组类型", changePos(['6', 6]));


// void类型
const sayHi = (): void => {
  console.log("void类型", "Hello Typescript!")
}
sayHi()

// enum 类型
enum Gender { Male, Female, Secret }
let boy: Gender = Gender.Male
let girl: Gender = Gender.Female
let strBoy = Gender[0]
let strGirl = Gender[1]
console.log("enum类型", boy, girl, strBoy, strGirl);


// any 类型
let showParams = (val: any): any => {
  return val
}
console.log("any类型", showParams(666));
console.log("any类型", showParams("666"));


// 使用类型断言
const notSureType: any = [1, 2, 3, 4, 5]
const res = (notSureType as number[]).join("")
console.log("类型断言", res);
