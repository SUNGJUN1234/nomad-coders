type Team = "red" | "blue" | "yellow"
type Health = 1 | 5 | 10

interface TeamPlayer {
    nickname: string,
    team: Team,
    health: Health
}

const sj: TeamPlayer = {
    nickname: "junhere",
    team: "red",
    health: 1
}


// abstract class AbsUser {
//     constructor(
//         protected firstName: string,
//         protected lastName: string,
//     ) {}
//     abstract sayHi(name: string): string
//     abstract fullName(): string
// }

// 추상 클래스는 인스턴스를 만들 수 없다
// new AbsUser();  // Cannot create an instance of an abstract class

// 추상 클래스는 js 컴파일 시 클래스로 남지만
// 인터페이스는 js 컴파일 시 사라진다

// 위 추상 클래스를 인터페이스로 변경
interface AbsUser {
    firstName: string,
    lastName: string,
    sayHi(name: string): string
    fullName(): string
}

interface Human {
    health: number
}

class AbsPlayer implements AbsUser, Human {
    constructor(
        public firstName: string,
        public lastName: string,
        public health: number
    ) {}

    sayHi(name: string): string {
        return `hi ${name}, my name is ${this.fullName()}`;
    }
    fullName(): string {
        return `${this.firstName} + ${this.lastName}`;
    }
}

const makeUser = (user: AbsUser) => {
    return "hi";
}

makeUser({
    firstName: "sj",
    lastName: "cho",
    fullName: () => "xx",
    sayHi: (name) => "string"
})