// 定义一个枚举
enum Gender { Male, Female, Secret }
// 定义一个接口
interface IStudent {
  name: string,
  age: number,
  gender: Gender,
  // 只读属性
  readonly id: number
  // 可选属性
  nickname?: string
  // 任意属性, 添加任意属性后, 可以添加任何属性
  [key: string]: any
}

// 实现接口
const stuOne: IStudent = {
  name: "Tom",
  age: 18,
  gender: Gender.Male,
  id: 1,
  nickname: "Tommy",
  hobbies: ['swimming', 'running']
}

console.log(stuOne);

// 尝试修改 id
// stuOne.id = 6 // 只读属性无法修改