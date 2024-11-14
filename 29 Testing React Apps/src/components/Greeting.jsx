import { useState } from 'react';
import Output from './Output';

export default function Greeting() {
	const [changedText, setChangedText] = useState(false);

	function changeTextHandler() {
		setChangedText(true);
	}
	return (
		<>
			<h2>Greeting</h2>
			{!changedText && <Output>It's good to see you</Output>}
			{changedText && <p>Changed</p>}
			<button onClick={changeTextHandler} />
		</>
	);
}
