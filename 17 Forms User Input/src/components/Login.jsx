import { useState } from 'react';

export default function Login() {
	/* Method to have separate state for each input 
  const [enteredEmail, setEnteredEmail] = useState();
	const [enteredPassword, setEnteredPassword] = useState();
  function handleEmailChange(e) {
		setEnteredEmail(e.target.value);
	}

	function handlePasswordChange(e) {
		setEnteredPassword(e.target.value);
	} */

	// Method to have a single state and updating function
	const [enteredValues, setEnteredValues] = useState({
		email: '',
		password: '',
	});

	function handleInputChange(id, value) {
		setEnteredValues((prevValues) => ({
			...prevValues,
			[id]: value,
		}));
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log(enteredValues);
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className="control-row">
				<div className="control no-margin">
					<label htmlFor="email">Email</label>
					<input
						id="email"
						type="email"
						name="email"
						onChange={(event) => {
							handleInputChange('email', event.target.value);
						}}
						value={enteredValues.email}
					/>
				</div>

				<div className="control no-margin">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						name="password"
						onChange={(event) => {
							handleInputChange('password', event.target.value);
						}}
						value={enteredValues.password}
					/>
				</div>
			</div>

			<p className="form-actions">
				<button className="button button-flat">Reset</button>
				<button className="button">Login</button>
			</p>
		</form>
	);
}
