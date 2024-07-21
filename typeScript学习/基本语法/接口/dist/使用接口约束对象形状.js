"use strict";
// 定义一个枚举
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Secret"] = 2] = "Secret";
})(Gender || (Gender = {}));
// 实现接口
const stuOne = {
    name: "Tom",
    age: 18,
    gender: Gender.Male,
    id: 1,
    nickname: "Tommy",
    hobbies: ['swimming', 'running']
};
console.log(stuOne);
// 尝试修改 id
// stuOne.id = 6 // 只读属性无法修改
