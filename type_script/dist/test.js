"use strict";
var a = 123;
var b = 'A';
var c = true;
var d = [1, 2, 3];
var e = undefined;
var f = null;
var one = {
    name: "aaa",
    age: 1,
};
var two = {
    name: "bbb",
    age: 2,
};
if (one.age && one.age < 10) {
}
function playerMaker(name) {
    return {
        name: name,
    };
}
;
var playerMaker2 = function (name) { return ({ name: name }); };
var nico = playerMaker("nico");
nico.age = 12;
var tuple = ["123", 123, true];
// any 는 ts 를 빠져나간다
var anyArr = [1, 2, 3];
var anyBln = true;
anyArr + anyBln;
var g;
if (typeof g === 'number') {
    var a_1 = g + 1;
}
if (typeof g === 'string') {
    var b_1 = g.toUpperCase();
}
function hello() {
    console.log("hello");
}
// never는 오류 반환
function noReturn() {
    throw new Error("never return function");
}
// name은 string 이거나 number
function test(name) {
    if (typeof name === "string") {
        name; // string
    }
    else if (typeof name === "number") {
        name; // number
    }
    else {
        name; // never
    }
}
var add = function (a, b) { return a + b; }; // call signature로 return을 해줄 필요가 없다.
console.log(add(2, 6));
var push = function (config) {
    if (typeof config === "string") {
        console.log(config);
    }
    else {
        console.log(config.path);
    }
};
var div = function (a, b, c) {
    return a + b;
};
var superPrint = function (arr) { return arr[0]; };
var aa = superPrint([1, 2, 3, 4]); // const aa: number
var bb = superPrint([true, false, true]); // const bb: boolean
var cc = superPrint(["true", 0, true]); // const cc: string | number | boolean
