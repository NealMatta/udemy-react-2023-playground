import { useState } from 'react';
import Input from './Input';

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

	const [didEdit, setDidEdit] = useState({
		email: false,
		password: false,
	});

	const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
	const passwordIsInvalid = didEdit.password && enteredValues.password.trim().length < 6;

	function handleInputChange(id, value) {
		setEnteredValues((prevValues) => ({
			...prevValues,
			[id]: value,
		}));
		setDidEdit((prevEdit) => ({
			...prevEdit,
			[id]: false,
		}));
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log(enteredValues);
	}

	function handleEventBlur(id) {
		setDidEdit((prevEdit) => ({
			...prevEdit,
			[id]: true,
		}));
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className="control-row">
				<Input
					label="Email"
					id="email"
					type="email"
					name="email"
					onChange={(event) => {
						handleInputChange('email', event.target.value);
					}}
					onBlur={() => handleEventBlur('email')}
					value={enteredValues.email}
					error={emailIsInvalid && 'Please enter a valid email'}
				/>

				<Input
					label="Password"
					id="password"
					type="password"
					name="password"
					onChange={(event) => {
						handleInputChange('password', event.target.value);
					}}
					onBlur={() => handleEventBlur('password')}
					value={enteredValues.password}
					error={passwordIsInvalid && 'Please enter a valid password'}
				/>
			</div>

			<p className="form-actions">
				<button className="button button-flat">Reset</button>
				<button className="button">Login</button>
			</p>
		</form>
	);
}
