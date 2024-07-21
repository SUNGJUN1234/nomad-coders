"use strict";
var sj = {
    nickname: "junhere",
    team: "red",
    health: 1
};
var AbsPlayer = /** @class */ (function () {
    function AbsPlayer(firstName, lastName, health) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.health = health;
    }
    AbsPlayer.prototype.sayHi = function (name) {
        return "hi ".concat(name, ", my name is ").concat(this.fullName());
    };
    AbsPlayer.prototype.fullName = function () {
        return "".concat(this.firstName, " + ").concat(this.lastName);
    };
    return AbsPlayer;
}());
var makeUser = function (user) {
    return "hi";
};
makeUser({
    firstName: "sj",
    lastName: "cho",
    fullName: function () { return "xx"; },
    sayHi: function (name) { return "string"; }
});
