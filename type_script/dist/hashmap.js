"use strict";
// let dict: Words = {
//     "this string" : "that string",
//     1: "aa",
//     "this string2" : "that string",
//     2: "aa"
// }
var Dict = /** @class */ (function () {
    function Dict() {
        this.words = {};
    }
    Dict.prototype.add = function (word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    };
    Dict.prototype.def = function (term) {
        return this.words[term];
    };
    Dict.prototype.update = function (word) {
        if (this.words[word.term] !== undefined) {
            this.words[word.term] = word.def;
        }
    };
    Dict.prototype.delete = function (term) {
        if (this.words[term] !== undefined) {
            delete this.words[term];
        }
    };
    return Dict;
}());
var Word = /** @class */ (function () {
    function Word(term, def) {
        this.term = term;
        this.def = def;
    }
    return Word;
}());
var kimchi = new Word("kimchi", "super cool food");
var pizza = new Word("pizza", "super nice piazza");
var dict = new Dict();
dict.add(kimchi);
dict.add(pizza);
console.log("KIMCHI:", dict.def("kimchi"));
console.log("PIZZA:", dict.def("pizza"));
dict.update(new Word("kimchi", "very incredible super food"));
console.log("UPDATE KIMCHI:", dict.def("kimchi"));
console.log("NOT UPDATE PIZZA:", dict.def("pizza"));
dict.delete("pizza");
console.log("DELETE PIZZA", dict.def("pizza"));
console.log("NOT DELETE KIMCHI:", dict.def("kimchi"));
