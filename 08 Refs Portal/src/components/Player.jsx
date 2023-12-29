import { useState, useRef } from 'react';

export default function Player() {
	// const inputPlayerName = useRef();

	const [playerName, setPlayerName] = useState('');
	const [submitted, setSubmitted] = useState(false);

	function handleChange(e) {
		setPlayerName(e.target.value);
	}

	function handleClick() {
		setSubmitted(true);
	}

	return (
		<section id="player">
			<h2>Welcome {submitted ? playerName : 'unknown entity'}</h2>
			<p>
				<input
					ref={playerName}
					type="text"
					onChange={handleChange}
					value={playerName}
				/>
				<button onClick={handleClick}>Set Name</button>
			</p>
		</section>
	);
}
