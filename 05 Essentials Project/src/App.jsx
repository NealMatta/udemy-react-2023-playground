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
			return { ...prevState, [label]: newInput };
		});
	}

	return (
		<>
			{/* Decided to remove the header from here since I didn't want it to be re-rendered */}
			{/* <Header /> */}
			<UserInput values={values} onChangeValue={handleChange} />
			<Results values={values} />
		</>
	);
}

export default App;
