"use strict";
// 创建一个类
class Peo {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    sayHi() {
        console.log(`This is an instance of ${this.constructor.name}.`);
    }
    showId() {
        return this.id;
    }
}
// 创建一个实例对象
const peo = new Peo("Midsahr", 18, 1);
peo.sayHi();
// 访问公共属性
console.log(peo.name);
// 访问私有属性, 无法在实例中访问
// console.log(peo.id); // 无法访问
// 声明一个子类
class Stu extends Peo {
    constructor(name, age, id, gender) {
        super(name, age, id);
        this.gender = gender;
    }
    sayHi() {
        super.sayHi();
    }
    showId() {
        // 在子类中也可以直接访问 id
        return this.id;
    }
}
// 创建一个子类
const student = new Stu("Bob", 20, 5, "male");
student.sayHi();
console.log(student.showId());
