type PlayerA = {
    name: string
}
type PlayerAA = PlayerA & {
    lastName: string
}
const playerA: PlayerAA = {
    name: "sjcho",
    lastName: "xx",
}

// 

interface playerB {
    name: string
}
interface playerBB extends playerB {
    lastName: string
}
interface playerBB {
    health: number
}
const PlayerB: playerBB = {
    name: "junhere",
    lastName: "xx",
    health: 10
}

// type과 interface는 다음과 같이 유사하다
// 타입스크립트 커뮤니티에서는 다음과 같이 사용법을 제시한다
// interface: 클래스, 오브젝트
// type: 다른 모든 경우

type PlayerC= {
    firstName: string,
}
interface PlayerD {
    firstName: string,
}
class UserC implements PlayerC {
    constructor(
        public firstName: string
    ) {}
}
class UserD implements PlayerD {
    constructor(
        public firstName: string
    ) {}
}