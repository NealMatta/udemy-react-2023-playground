import { useState } from 'react';

export default function Greeting() {
	const [changedText, setChangedText] = useState(false);

	function changeTextHandler() {
		setChangedText(true);
	}
	return (
		<>
			<h2>Greeting</h2>
			{!changedText && <p>It's good to see you</p>}
			{changedText && <p>Changed</p>}
			<button onClick={changeTextHandler} />
		</>
	);
}
