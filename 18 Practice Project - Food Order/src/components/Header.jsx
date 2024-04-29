import logo from '../assets/logo.jpg';

export default function Header() {
	return (
		<header id="main-header">
			<div id="title">
				<img src={logo} alt="ReactFoodLogo" />
				<h1 id="title">ReactFood</h1>
			</div>
			<button>Cart</button>
		</header>
	);
}
