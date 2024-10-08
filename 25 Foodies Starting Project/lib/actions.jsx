'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

function isInvalidText(text) {
	return !text || text.trim() === '';
}

export async function shareMeal(prevState, formData) {
	// Need to add this directive to execute on the server
	'use server';

	// Server side validation is much more important because client side validation can be easily changed
	const meal = {
		title: formData.get('title'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		image: formData.get('image'),
		creator: formData.get('name'),
		creator_email: formData.get('email'),
	};

	if (
		isInvalidText(meal.title) ||
		isInvalidText(meal.summary) ||
		isInvalidText(meal.instructions) ||
		isInvalidText(meal.creator) ||
		isInvalidText(meal.creator_email) ||
		!meal.creator_email.includes('@') ||
		!meal.image ||
		meal.image.size === 0
	) {
		// throw new Error('Invalid input');
		return { message: 'Invalid Input' };
	}

	await saveMeal(meal);
	// Tells NextJS to revalidate the cache that belongs to the path
	// You can revalidate the nested pages by in the second argument, adding the 'layout' word
	revalidatePath('/meals');
	redirect('/meals');
}
