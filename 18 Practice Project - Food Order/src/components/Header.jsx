import logo from '../assets/logo.jpg';
import { MealsContext } from '../store/meals-context';
import { useContext } from 'react';

export default function Header({ openModal }) {
	const { cartDetails } = useContext(MealsContext);
	const { quantity } = cartDetails;

	return (
		<header id="main-header">
			<div id="title">
				<img src={logo} alt="ReactFoodLogo" />
				<h1 id="title">ReactFood</h1>
			</div>
			<button className="text-button" onClick={openModal}>
				Cart ( {quantity} )
			</button>
		</header>
	);
}
