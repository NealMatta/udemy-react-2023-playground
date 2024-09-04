import Link from 'next/link';
import logoImg from '@/assets/logo.png';
// Adding the .module suffix ensures that the classes are just for this page
import classes from './main-header.module.css';

export default function MainHeader() {
	return (
		<header className={classes.header}>
			<Link className={classes.logo} href="/">
				{/* Path to object stored in src  */}
				<img src={logoImg.src} alt="A plate with Food on it" />
				NextLevel Food
			</Link>

			<nav className={classes.nav}>
				<ul>
					<li>
						<Link href="/meals">Browse Meals</Link>
					</li>
					<li>
						<Link href="/community">Food Community</Link>
					</li>
					<li>
						<Link href="/meals">Browse Meals</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
