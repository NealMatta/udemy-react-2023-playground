import React, { useEffect, useState } from 'react';

export default function QuestionTimer({ timeout = 15000, onTimeout }) {
	const [remainingTime, setRemainingTime] = useState(timeout);
	// console.log('Quiz');

	useEffect(() => {
		const timer = setTimeout(onTimeout, timeout);

		return () => {
			clearTimeout(timer);
		};
	}, [timeout, onTimeout]);

	useEffect(() => {
		const interval = setInterval(() => {
			setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
		}, 100);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<>
			<progress id="question-time" max={timeout} value={remainingTime} />
		</>
	);
}
