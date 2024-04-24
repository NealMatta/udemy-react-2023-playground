import { useState } from 'react';
import Input from './Input';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation';
import useInput from '../hooks/useInput';

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

	/* Method to have a single state and updating function
	const [enteredValues, setEnteredValues] = useState({
		email: '',
		password: '',
	});

	const [didEdit, setDidEdit] = useState({
		email: false,
		password: false,
	});

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

	function handleEventBlur(id) {
		setDidEdit((prevEdit) => ({
			...prevEdit,
			[id]: true,
		}));
	}

	*/

	const {
		value: emailValue,
		handleInputChange: handleEmailChange,
		handleEventBlur: handleEmailBlur,
		hasError: emailHasError,
	} = useInput('', (value) => {
		return isEmail(value) && isNotEmpty(value);
	});

	const {
		value: passwordValue,
		handleInputChange: handlePasswordChange,
		handleEventBlur: handlePasswordBlur,
		hasError: passwordHasError,
	} = useInput('', (value) => {
		return hasMinLength(value, 6);
	});

	function handleSubmit(event) {
		event.preventDefault();
		if (emailHasError || passwordHasError) {
			return;
		}
		console.log(emailValue, passwordValue);
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
					onChange={handleEmailChange}
					onBlur={handleEmailBlur}
					value={emailValue}
					error={emailHasError && 'Please enter a valid email'}
				/>

				<Input
					label="Password"
					id="password"
					type="password"
					name="password"
					onChange={handlePasswordChange}
					onBlur={handlePasswordBlur}
					value={passwordValue}
					error={passwordHasError && 'Please enter a valid password'}
				/>
			</div>

			<p className="form-actions">
				<button className="button button-flat">Reset</button>
				<button className="button">Login</button>
			</p>
		</form>
	);
}
