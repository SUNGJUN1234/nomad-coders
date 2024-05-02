let a: number = 123;
let b: string = 'A';
let c: boolean = true;
let d: number[] = [1,2,3];
let e: undefined = undefined;
let f: null = null;

type Player = {
    readonly name: string,
    age?: number,
}

let one: Player =  {
    name: "aaa",
    age: 1,
}

let two: Player = {
    name: "bbb",
    age: 2,
}

if(one.age && one.age < 10){

}

function playerMaker(name:string): Player{
    return {
        name: name,
    }
};

const playerMaker2 = (name:string): Player => ({name});

const nico = playerMaker("nico");
nico.age = 12;

const tuple: [string, number, boolean] = ["123", 123, true];

let g: unknown;

if(typeof g === 'number'){
    let a = g + 1;
}
if(typeof g === 'string') {
    let b = g.toUpperCase();
}

function hello(): void {
    console.log("hello");
}

// never는 오류 반환
function noReturn(): never {
    throw new Error("never return function");
}

// name은 string 이거나 number
function test(name:string|number) {
    if(typeof name === "string"){
        name;   // string
    } else if(typeof name === "number"){
        name;   // number
    } else {
        name;   // never
    }
}