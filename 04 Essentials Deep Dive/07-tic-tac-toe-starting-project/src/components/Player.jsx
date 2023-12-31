import React from 'react';
import { useState } from 'react';

export default function Player({
	initialName,
	symbol,
	isActive,
	onChangeName,
}) {
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	function handleEditClick() {
		setIsEditing((prevState) => !prevState);
		if (isEditing) onChangeName(symbol, playerName);
	}

	function handleChange(e) {
		setPlayerName(e.target.value);
	}

	let editablePlayerName = <span className="player-name">{playerName}</span>;
	if (isEditing) {
		// 78. Getting a value out and feeding it back in is called two way binding
		editablePlayerName = (
			<input
				type="text"
				required
				value={playerName}
				onChange={handleChange}
			/>
		);
	}

	return (
		<li className={isActive ? 'active' : undefined}>
			<span className="player">
				{editablePlayerName}
				<span className="player-symbol">{symbol}</span>
				<button onClick={handleEditClick}>
					{!isEditing ? 'Edit' : 'Save'}
				</button>
			</span>
		</li>
	);
}
