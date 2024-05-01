import React from 'react';

export default function CartModalContent() {
	return (
		<section className="cart">
			<h2>Your Cart</h2>
			<ul>
				<li className="cart-item">
					<p>Seafood Paella - 1x $10.00</p>
					<div className="cart-item-actions">
						<button>-</button>
						<p>5</p>
						<button>+</button>
					</div>
				</li>
			</ul>
			<div className="cart-total">$100.00</div>
		</section>
	);
}
