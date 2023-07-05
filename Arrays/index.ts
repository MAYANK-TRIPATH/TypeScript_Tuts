// In Js we define array as:-
let number = [1, 2, '4'];   // here '4' different data type

// for this we use TS

let number: number[] = [1, 2, '4'];  // here we see error immeidiately im  '4'.

// so basically we can use the syntax number[] as above so as this we can also datatypes
// (eg. string[] for string type and so on.)

const superHero: string[] = []
const heropower: number[] = []
// can also define as
const heroPower: Array<number> = []

type User = {
    name: stringisActive: boolean
}

const allUsers: User[]= []


superHero.push("Ironman")
heroPower.push(2)

allUsers.push({name: " ", isActive: true})