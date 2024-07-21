// 创建一个类
class People {
  // 默认的属性类型就是 public
  public name: string
  public age: number

  // 使用 private 声明一个私有属性私有属性, 该属性只能够在定义它的类中使用
  private id: number
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
const people = new People("Midsahr", 18, 1)
people.sayHi()
// 访问公共属性
console.log(people.name);
console.log(people.age);
// 访问私有属性
// console.log(people.id); // 无法访问

// 声明一个子类
class Student extends People {
  gender: string
  constructor(name: string, age: number, id: number, gender: string) {
    super(name, age, id)
    this.gender = gender
  }
  sayHi(): void {
    super.sayHi()
  }
  showId(): number {
    // 在子类中也无法直接访问 id
    // return this.id
    // 只能够通过父类间接访问
    return super.showId()
  }
}

// 创建一个子类
const stu = new Student("Tom", 22, 6, "male")
stu.sayHi()
console.log(stu.showId());
