// 추상 클래스
// : 다른 클래스가 상속받을 수 있는 클래스
// : 오직 다른곳에서 상속 받을 수만 있는 클래스
abstract class User {
    constructor(
        private firstName: string,
        private lastName: string,
        protected nickname: string,
    ) {}

    // 추상 메서드
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    abstract getNickname():void
}

// 추상 클래스는 인스턴스를 만들 수 없다
// const p = new User();    // Cannot create an instance of an abstract class.

class Player3 extends User {
    getNickname(): void {
        console.log(this.nickname);
    }
};

const junhere = new Player3( "sj", "cho", "junhere");

// junhere.firstName    // Property 'firstName' is private and only accessible within class 'Player3'.ts(2341)
// junhere.nickname;    // Property 'nickname' is protected and only accessible within class 'User' and its subclasses.ts(2445)
console.log(junhere.getFullName());

junhere.getNickname();