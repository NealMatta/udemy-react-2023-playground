import logo from '../assets/logo.jpg';

export default function Header({ openModal }) {
	return (
		<header id="main-header">
			<div id="title">
				<img src={logo} alt="ReactFoodLogo" />
				<h1 id="title">ReactFood</h1>
			</div>
			<button onClick={openModal}>Cart</button>
		</header>
	);
}
