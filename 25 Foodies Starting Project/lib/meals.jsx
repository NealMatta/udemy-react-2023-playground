import fs from 'node:fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

// Doesn't return a promise
export function getMeals() {
	// All is used to fetch data
	// Get is used for a single row
	// throw new Error('Loading meals failed');
	return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
	// Do it this way to prevent against SQL attacks
	return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
	meal.slug = slugify(meal.title, { lower: true });
	meal.instructions = xss(meal.instructions);

	const extension = meal.image.name.split('.').pop();
	const fileName = `${meal.slug}.${extension}`;

	const stream = fs.createWriteStream(`public/images/${fileName}`);
	const bufferedImage = await meal.image.arrayBuffer();

	stream.write(Buffer.from(bufferedImage), (error) => {
		if (error) {
			throw new Error('Saving image Failed!');
		}
	});

	meal.image = `/images/${fileName}`;

	db.prepare(
		`
		INSERT into meals
			(title, summary, instructions, creator, creator_email, image, slug)
		VALUES (
         	@title,
			@summary,
			@instructions,
			@creator,
			@creator_email,
			@image,
			@slug
		)
	`
	).run(meal);
}
