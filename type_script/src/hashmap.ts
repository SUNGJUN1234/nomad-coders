type Words = {
    // key가 string 이라면 : value도 string 이어야 한다.
    [whatever:string]: string,
    // key가 number 라면 : value도 string 이어야 한다.
    [we: number]: string,
}

// let dict: Words = {
//     "this string" : "that string",
//     1: "aa",
//     "this string2" : "that string",
//     2: "aa"
// }

class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }
    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(term:string) {
        return this.words[term];
    }
    update(word: Word) {
        if (this.words[word.term] !== undefined) {
            this.words[word.term] = word.def;
        }
    }
    delete(term: string) {
        if (this.words[term] !== undefined) {
            delete this.words[term];
        }
    }
}

class Word {
    constructor(
        public term: string,
        public def: string
    ) {}
}

const kimchi = new Word("kimchi", "super cool food");
const pizza = new Word("pizza", "super nice piazza");
const dict = new Dict();

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