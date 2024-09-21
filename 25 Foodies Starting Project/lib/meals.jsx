import sql from 'better-sqlite3';

const db = sql('meals.db');

// Doesn't return a promise
export function getMeals() {
	// All is used to fetch data
	// Get is used for a single row
	// throw new Error('Loading meals failed');
	return db.prepare('SELECT * FROM meals').all();
}
