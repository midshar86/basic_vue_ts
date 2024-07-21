"use strict";
// 创建一个类
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log(`This is an instance of ${this.constructor.name}.`);
    }
}
// 创建一个实例对象
const person = new Person("Midsahr", 18);
person.sayHi();
