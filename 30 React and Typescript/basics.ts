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
