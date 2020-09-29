//! Red highlights for lines that would cause an error
/**
 * * Typescript knows JavaScript and can infer the type of things in many cases
 */

let hello = "hello"
//! hello = 1
let hello2 = 2
let hello3 = { name: 2 }
hello3 = { name: 4 }
//! hello3 = { name: 4, age: 12 }

/**
 * * Defining Types
 * * You can use typescript to infer the types of the object members or you can explictly define a type using the `inerface` declaration
 */

const obj1 = {
	name: "Yannick Nandury",
	age: 12,
	isFreud: true,
}

interface freud {
	name: string
	age: number
	isFreud: boolean
}

// const obj2: freud = {
// 	name: "Charles Altman",
// 	age: 44,
// 	isFreud: false,
// }

//! const obj3: freud = {
//! 	name: "not nice",
//! 	age: 12,
//! 	isFreud: false,
//! 	isNice: false,
//! }

const printObj = (obj: freud) => {
	console.log(obj.name, obj.age, "Is freud? " + obj.isFreud)
}
// printObj(obj1)
// printObj(obj2)

//* declare the types to be used in the class
class Freudling {
	name: string
	age: number
	isFreud: boolean
	constructor(name: string, age: number, isFreud: boolean) {
		this.name = name
		this.age = age
		this.isFreud = isFreud
	}
	print = () => {
		console.log(this.name, this.age, "Is Freud? " + this.isFreud)
	}

	getName(): string {
		return this.name
	}

	printFreudlings(freuds: string[] | string): void {
		if (typeof freuds === "string") {
			console.log(freuds)
		} else if (Array.isArray(freuds)) {
			for (let x of freuds) {
				console.log(x)
			}
		}
	}
}

//* ensure that the Freudling passed in is a freud type
const freudling: freud = new Freudling("Charles Alman III", 33, true)
//* still runs because it has all the values but print function not declared in freud type
freudling.print()

//* can append to an existing interface but it affects all previous freud instances
interface freud {
	print: Function
	getName: Function
	printFreudlings: Function
}
let freudName = freudling.getName()
console.log(freudName)
const freudlings = [freudName, "Yannick Nandury", "Charlie Charlie"]
freudling.printFreudlings(freudName)
freudling.printFreudlings(freudlings)

/**
 * Type	Predicate
	string	typeof s === "string"
	number	typeof n === "number"
	boolean	typeof b === "boolean"
	undefined	typeof undefined === "undefined"
	function	typeof f === "function"
	array	Array.isArray(a)
 */

/**
 * * Generics: generics provide variables to types and describe the values that the thing can contain
 */
type StringArray = Array<string>
let strarr: StringArray = ["yannick", "nandury"]
type StringObjArr = Array<{ name: string }>
let objarr: StringObjArr = [{ name: "Yannick Nandury" }]

//* can declare own types that use generics

interface Backpack<Type> {
	add: (obj: Type) => void
	get: () => Type
}

//* This line is a shortcut to tell TypeScript there is a
//* constant called `backpack`, and to not worry about where it came from.
// declare const backpack: Backpack<string>
// const object = backpack.get()
// console.log(object)
// //! backpack.add(23) can't do this because the type was inferred to be string
// backpack.add("It's in the backpack")

/**
 * * Structural Type Stream: Typescript checking focuses on 'shape' that values have and if two objects have the same 'shape' the type can be inferred as the same
 */
interface Point {
	x: number
	y: number
}

const printPoint = (point: Point) => {
	console.log(`${point.x}, ${point.y}`)
}
const p = { x: 420, y: 69 }
printPoint(p)
const p2 = { x: -2, y: -2, z: 100 }
// printPoint(p2) //! still prints because the p2 object contains an x and y member that are both numbers
const p3 = { x: 12, y: "12", z: 12 }
// printPoint(p3) //! still prints because this is allowed in JavaScript but TypeScript gives a warning that the types don't match

//* there is no difference between how objects and classes conform to shape

/**
 * * TYPES
 * * Primitives: string, number, and boolean
 * * Arrays: number[], string[], Array<number>, Array<string>, ...
 * * Any: Can be any type like regular JS variable
 */

/**
 * * Function expressions: when a function expression occurs and typescript can determine how it will be called, parameters will be given types
 */
const names = ["Charlie", "Yannick"]
names.forEach(s => {
	console.log(s.toUpperCase())
})
const nums = [1, 2]
nums.forEach(s => {
	console.log(s)
})

//* typescript can infer the type from the parameters used in the forEach

/**
 * * Object types: some or all of the parameters to the function can be optional by adding ? after property name
 */
interface name {
	firstName: string
	lastName?: string
}

const printName = (obj: name) => {
	if (obj.lastName === undefined) {
		console.log(obj.firstName)
	} else {
		console.log(obj.firstName, obj.lastName)
	}
}

let yawn: name = { firstName: "Yannick" }
printName(yawn)
yawn = {
	...yawn,
	lastName: "Nandury",
}
printName(yawn)
