import { MealsContext } from '../store/meals-context';
import { useContext } from 'react';

export default function MealItem({ meal }) {
	const { cart, addItemToCart } = useContext(MealsContext);

	return (
		<section className="meal-item">
			<div className="article">
				<img src={'http://localhost:3000/' + meal.image} alt="" />
				<h3>{meal.name}</h3>
				<div className="meal-item-price">{meal.price}</div>
				<p className="meal-item-description">{meal.description}</p>
				<div className="meal-item-actions">
					<button className="button" onClick={() => addItemToCart(meal)}>
						Add to Cart
					</button>
				</div>
			</div>
		</section>
	);
}
