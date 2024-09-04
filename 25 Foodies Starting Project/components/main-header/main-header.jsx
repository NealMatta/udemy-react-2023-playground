import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/assets/logo.png';
// Adding the .module suffix ensures that the classes are just for this page
import classes from './main-header.module.css';
import MainHeaderBackground from './main-header-background';

export default function MainHeader() {
	return (
		<>
			<MainHeaderBackground />

			<header className={classes.header}>
				<Link className={classes.logo} href="/">
					{/* Path to object stored in src 
				<img src={logoImg.src} alt="A plate with Food on it" /> */}
					<Image src={logoImg} alt="A plate with Food on it" priority />
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
		</>
	);
}
