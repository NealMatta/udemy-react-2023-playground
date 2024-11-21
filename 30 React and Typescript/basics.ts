// Primitives: number, string, boolean
// More complex types: array, objects
// Function types, parameters

// Primitives
let age: number = 24;
let userName: string = 'tester';
let isInstructor: boolean = true;

// More Complex Types
let hobbies: string[] = ['Sports', 'Cooking'];
let person: { name: string; age: number } = { name: 'Neal', age: 13 };
let people: { name: string; age: number }[] = [
	{ name: 'Neal', age: 13 },
	{ name: 'Neal', age: 13 },
];

// Type inference
let course = 'React - The complete guide';
// When you immediatelly initialize a variable, it'll automatically understand the type that needs to be set

// Union Types
// When a value can be two different types
let union: string | number = 'String Value';
union = 123;

// Type Aliases
// Helps reduce code duplication
type Person = {
	name: string;
	age: number;
	single: boolean;
};

let morePeople: Person[];

// Functions & Function Types
function add(a: number, b: number): number | string {
	return a + b;
}

// If you don't return anything, the return type would be void
function printValues(value: any) {
	console.log(value);
}
