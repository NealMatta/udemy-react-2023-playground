import React from 'react';

export default function FormModalContent() {
	return (
		<section>
			<h2>Checkout</h2>
			<div className="control">
				<label htmlFor="full-name">Full Name</label>
				<input id="full-name" type="text" name="full-name" required />
			</div>
			<div className="control">
				<label htmlFor="email">Email</label>
				<input id="email" type="email" name="email" required />
			</div>
			<div className="control">
				<label htmlFor="street">Street</label>
				<input id="street" type="text" name="street" required />
			</div>

			<div className="control-row">
				<div className="control">
					<label htmlFor="postal-code">Postal Code</label>
					<input id="postal-code" type="text" name="postal-code" required />
				</div>

				<div className="control">
					<label htmlFor="city">City</label>
					<input id="city" type="text" name="city" required />
				</div>
			</div>
		</section>
	);
}
