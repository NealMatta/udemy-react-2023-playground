import logo from '../assets/logo.jpg';
import { MealsContext } from '../store/meals-context';
import { useContext } from 'react';

export default function Header({ openModal }) {
	const { cart } = useContext(MealsContext);

	return (
		<header id="main-header">
			<div id="title">
				<img src={logo} alt="ReactFoodLogo" />
				<h1 id="title">ReactFood</h1>
			</div>
			<button className="text-button" onClick={openModal}>
				Cart ( {cart.length} )
			</button>
		</header>
	);
}
