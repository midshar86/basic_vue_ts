"use strict";
// 可选参数
// 创建一个函数, 默认返回一个数值的两倍; 如果传递了第二个参数, 那么返回指定的倍数
function createDouble(base, times) {
    if (times === undefined) {
        return base * 2;
    }
    else {
        return base * times;
    }
}
console.log(createDouble(10));
console.log(createDouble(10, 5));
// 默认参数, 当然在函数中也可以使用
// 创建一个类
class Student {
    // 设置默认参数
    constructor(name = "midshar", age = 18, gender = "male") {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    sayHi() {
        console.log(`The student name is ${this.name}, and ${this.gender === "male" ? "he" : "she"} is now ${this.age} years old.`);
    }
    introduction() {
        console.log(`This is an instsnce of ${this.constructor.name}`);
    }
}
// 创建一个类实例, 不传递任何参数, 使用默认参数
const stu = new Student();
stu.sayHi();
stu.introduction();
// 创建一个类实例, 传递参数
const specificStu = new Student("Lucy", 25, "female");
specificStu.sayHi();
specificStu.introduction();
