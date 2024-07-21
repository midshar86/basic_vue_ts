"use strict";
// 定义一个 Dog 类
// 使用 implements 实现多个类
class Dog {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    sayHi() {
        console.log("Hello, this is a class dog!");
    }
}
// 创建一个 Dog 实例
const dog = new Dog(18, "kitty");
console.log(dog);
// 调用实例中的 sayHi 方法
dog.sayHi();
