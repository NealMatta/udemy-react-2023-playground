import { useState } from 'react';

// Components
import UserInput from './components/UserInput';
import Results from './components/Results';

function App() {
	// Set a high level state since both components need to be
	// updated every time a change is made
	const [investmentValues, setInvestmentValues] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	const inputIsValid = investmentValues.duration >= 1;

	// Pass a function to set the state outside of where it's used
	function handleChange(label, newInput) {
		setInvestmentValues((prevState) => {
			/* Doing this maintains the old state values and just 
			sets the new object key/pair value */
			return { ...prevState, [label]: +newInput };
		});
	}

	return (
		<>
			{/* Decided to remove the header from here since I didn't want it to be re-rendered */}
			<div id="user-input">
				<div className="input-group">
					<UserInput
						label="Initial Investment"
						id="initialInvestment"
						value={investmentValues.initialInvestment}
						onChangeValue={handleChange}
					/>
					<UserInput
						label="Annual Investment"
						id="annualInvestment"
						value={investmentValues.annualInvestment}
						onChangeValue={handleChange}
					/>
				</div>
				<div className="input-group">
					<UserInput
						label="Expected Return"
						id="expectedReturn"
						value={investmentValues.expectedReturn}
						onChangeValue={handleChange}
					/>
					<UserInput
						label="Duration"
						id="duration"
						value={investmentValues.duration}
						onChangeValue={handleChange}
					/>
				</div>
			</div>
			{inputIsValid && <Results values={investmentValues} />}
			{!inputIsValid && (
				<p className="center">Please enter a duration greater than 0</p>
			)}
		</>
	);
}

export default App;
