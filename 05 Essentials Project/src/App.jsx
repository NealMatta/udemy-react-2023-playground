import { useState } from 'react';

// Components
import UserInput from './components/UserInput';
import Results from './components/Results';

function App() {
	const [values, setValues] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	function handleChange(label, newInput) {
		setValues((prevState) => {
			// console.log(prevState);
			return { ...prevState, [label]: newInput };
		});
	}

	return (
		<>
			{/* Decided to remove the header from here since I didn't want it to be re-rendered */}
			{/* <Header /> */}
			<div id="user-input">
				<UserInput
					label="Initial Investment"
					id="initialInvestment"
					value={values.initialInvestment}
					onChangeValue={handleChange}
				/>
				<UserInput
					label="Annual Investment"
					id="annualInvestment"
					value={values.annualInvestment}
					onChangeValue={handleChange}
				/>
				<UserInput
					label="Expected Return"
					id="expectedReturn"
					value={values.expectedReturn}
					onChangeValue={handleChange}
				/>
				<UserInput
					label="Duration"
					id="duration"
					value={values.duration}
					onChangeValue={handleChange}
				/>
			</div>
			<Results values={values} />
		</>
	);
}

export default App;
