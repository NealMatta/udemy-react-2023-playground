import React, { useState, useCallback } from 'react';
import QUESTIONS from '../questions';
import quizCompleteImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer';

export default function Quiz() {
	const [userAnswers, setUserAnswers] = useState([]);

	const activeQuestionIndex = userAnswers.length;
	// Checking if QUiz is Complete
	const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

	const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
		setUserAnswers((prevUserAnswers) => {
			return [...prevUserAnswers, selectedAnswer];
		});
	}, []);

	const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), handleSelectAnswer);

	if (quizIsComplete) {
		return (
			<div id="summary">
				<img src={quizCompleteImg} alt="Trophy Icon" />
				<h2>Quiz Compelted</h2>
			</div>
		);
	}

	// Randomizing the answers
	const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
	shuffledAnswers.sort(() => Math.random() - 0.5);

	return (
		<div id="quiz">
			<div id="question">
				<QuestionTimer timeout={10000} onTimeout={handleSkipAnswer} />
				<h2>{QUESTIONS[activeQuestionIndex].text}</h2>
				<ul id="answers">
					{shuffledAnswers.map((answer) => {
						return (
							<li key={answer} className="answer">
								<button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}