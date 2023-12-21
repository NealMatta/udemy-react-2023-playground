import { useState } from 'react';

export default function UserInput({ label, id, value, onChangeValue }) {
	// const [newVal, setNewVal] = useState(value);
	function handleChange(e) {
		onChangeValue(id, e.target.value);
	}

	return (
		<p>
			<label>{label}</label>
			<input
				type="number"
				id={id}
				value={value}
				onChange={handleChange}
			/>
		</p>
	);
}
