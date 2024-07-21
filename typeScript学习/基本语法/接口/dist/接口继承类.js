"use strict";
// 定义一个类
class Example {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    sayHi() {
        console.log(`This is an  ${this.constructor.name} class, and this is a function method.`);
    }
}
// 创建一个父类实例调用 sayHi 方法
const instanceOfExample = new Example("Lucy", 22, "female");
instanceOfExample.sayHi();
// 定义另一个类, 继承自 Example 类, 并且需要实现接口
class OneOfExample extends Example {
    constructor(name, age, gender, introduction) {
        // 调用父类
        super(name, age, gender);
        this.introduction = introduction;
    }
    sayHi() {
        super.sayHi();
    }
}
// 创建一个实例
const instanceOfOneOfExample = new OneOfExample("midshar", 18, "male", "This is an instance of OneOfExample.");
console.log(instanceOfOneOfExample);
// 调用子类实例中的方法
instanceOfOneOfExample.sayHi();
