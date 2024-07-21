// 创建一个类
class Peo {
  // 默认的属性类型就是 public
  public name: string
  public age: number

  // 使用 protected 声明一个私有属性私有属性, 该属性可以在定义它的类与子类中使用
  protected id: number
  constructor(name: string, age: number, id: number) {
    this.name = name
    this.age = age
    this.id = id
  }
  public sayHi(): void {
    console.log(`This is an instance of ${this.constructor.name}.`);
  }
  showId(): number {
    return this.id
  }
}

// 创建一个实例对象
const peo = new Peo("Midsahr", 18, 1)
peo.sayHi()
// 访问公共属性
console.log(peo.name);
// 访问私有属性, 无法在实例中访问
// console.log(peo.id); // 无法访问

// 声明一个子类
class Stu extends Peo {
  gender: string
  constructor(name: string, age: number, id: number, gender: string) {
    super(name, age, id)
    this.gender = gender
  }
  sayHi(): void {
    super.sayHi()
  }
  showId(): number {
    // 在子类中也可以直接访问 id
    return this.id
  }
}

// 创建一个子类
const student = new Stu("Bob", 20, 5, "male")
student.sayHi()
console.log(student.showId());
