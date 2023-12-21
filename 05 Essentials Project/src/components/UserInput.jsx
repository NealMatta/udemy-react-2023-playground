import { useState } from 'react';

export default function UserInput({ label, id, value, onChangeValue }) {
	// const [newVal, setNewVal] = useState(value);
	function handleChange(e) {
		onChangeValue(id, Number(e.target.value));
	}

	return (
		<div className="input-group">
			<label>{label}</label>
			<input
				type="number"
				id={id}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
}
