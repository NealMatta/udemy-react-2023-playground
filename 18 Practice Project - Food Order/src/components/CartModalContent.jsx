import { useContext } from 'react';
import { MealsContext } from '../store/meals-context';

export default function CartModalContent() {
	const { cart } = useContext(MealsContext);
	return (
		<section className="cart">
			<h2>Your Cart</h2>
			<ul>
				{cart &&
					cart.map((meal) => {
						return (
							<li className="cart-item" key={meal.id}>
								<p>
									{/* Not so sure about quantity */}
									{meal.name} - 1x ${meal.price}
								</p>
								<div className="cart-item-actions">
									<button>-</button>
									<p>5</p>
									<button>+</button>
								</div>
							</li>
						);
					})}
			</ul>
			<div className="cart-total">$100.00</div>
		</section>
	);
}
