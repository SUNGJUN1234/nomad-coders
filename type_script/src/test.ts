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

// any 는 ts 를 빠져나간다
const anyArr : any[] = [1,2,3];
const anyBln : any = true;
anyArr + anyBln;

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

// call signature
type Add = (a:number, b:number) => Number;
const add:Add = (a, b) => a + b;   // call signature로 return을 해줄 필요가 없다.

console.log(add(2, 6));

// overloading
type Config = {
    path: string,
    state: object
}

type Push = {
    (path: string): void,
    (config: Config): void,
}

const push: Push = (config) => {
    if (typeof config === "string") {
        console.log(config);
    } else {
        console.log(config.path);   
    }
}

type Div = {
    (a: number, b: number): number,
    (a: number, b: number, c: number): number,
}

const div:Div = (a, b, c?: number) => {
    return a + b;
}

// polymorphism (다형성)
// Poly: many, much, several ... (많은, 여러)
// Morpho: form, structure  ... (형태, 구조)
type SuperPrint = {
    //  T = TypePlaceholder
    <T>(arr: T[]): T
}
const superPrint: SuperPrint = (arr) => arr[0];

const aa = superPrint([1,2,3,4]);           // const aa: number
const aa2 = superPrint<number>([1,2,3,4]);
const bb = superPrint([true, false, true]); // const bb: boolean
const cc = superPrint(["true", 0, true]);   // const cc: string | number | boolean

type SuperSuperPrint = {
    <T, M>(a: T[], b: M): T
}
const ssPrint:SuperSuperPrint = (a) => (a[0]);

const dd= ssPrint(["true", 0, true], "a");          // const ssPrint: <string | number | boolean, string>(a: (string | number | boolean)[], b: string) => string | number | boolean

// 결론
type Player2<E> = {
    name: string,
    extraInfo: E
}

const sjcho: Player2<{favFood: string}> = {
    name: "sjcho",
    extraInfo: {
        favFood: "hbg"
    }
}

const nullcho: Player2<null> = {
    name: "ncho",
    extraInfo: null
}