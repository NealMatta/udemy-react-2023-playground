export default function MealItem({ imgSrc, title, price, description }) {
	return (
		<section className="meal-item">
			<div className="article">
				<img src={imgSrc} alt="" />
				<h3>{title}</h3>
				<div className="meal-item-price">{price}</div>
				<p className="meal-item-description">{description}</p>
				<div className="meal-item-actions">
					<button className="button">Add to Cart</button>
				</div>
			</div>
		</section>
	);
}
