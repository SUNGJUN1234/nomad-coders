"use strict";
var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
        this.storage = {};
    }
    LocalStorage.prototype.set = function (key, value) {
        this.storage[key] = value;
    };
    LocalStorage.prototype.remove = function (key) {
        delete this.storage[key];
    };
    LocalStorage.prototype.get = function (key) {
        return this.storage[key];
    };
    LocalStorage.prototype.clear = function () {
        this.storage = {};
    };
    return LocalStorage;
}());
var stringsStorage = new LocalStorage();
stringsStorage.set("SS", "hi");
stringsStorage.get("SS");
var booleansStroage = new LocalStorage();
booleansStroage.set("BB", false);
booleansStroage.get("BB");
