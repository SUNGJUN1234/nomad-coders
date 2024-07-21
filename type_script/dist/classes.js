"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 추상 클래스
// : 다른 클래스가 상속받을 수 있는 클래스
// : 오직 다른곳에서 상속 받을 수만 있는 클래스
var User = /** @class */ (function () {
    function User(firstName, lastName, nickname) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
    }
    // 추상 메서드
    User.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return User;
}());
// 추상 클래스는 인스턴스를 만들 수 없다
// const p = new User();    // Cannot create an instance of an abstract class.
var Player3 = /** @class */ (function (_super) {
    __extends(Player3, _super);
    function Player3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Player3.prototype.getNickname = function () {
        console.log(this.nickname);
    };
    return Player3;
}(User));
;
var junhere = new Player3("sj", "cho", "junhere");
// junhere.firstName    // Property 'firstName' is private and only accessible within class 'Player3'.ts(2341)
// junhere.nickname;    // Property 'nickname' is protected and only accessible within class 'User' and its subclasses.ts(2445)
console.log(junhere.getFullName());
junhere.getNickname();
