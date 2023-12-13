import { useState } from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';

function helperDeriveActivePlayer(gameTurns) {
	let currentPlayer = 'X';

	if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
		currentPlayer = 'O';
	}

	return currentPlayer;
}

function App() {
	const [gameTurns, setGameTurns] = useState([]);

	const activePlayer = helperDeriveActivePlayer(gameTurns);

	function handleSelectSquare(rowIndex, colIndex) {
		setGameTurns((prevTurns) => {
			/* 83 - This approach for current player helps us ensure that we're not combining state values
			let currentPlayer = 'X';

			if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
				currentPlayer = 'O';
			}*/

			const currentPlayer = helperDeriveActivePlayer(prevTurns);
			const updatedTurns = [
				{
					square: { row: rowIndex, col: colIndex },
					player: currentPlayer,
				},
				...prevTurns,
			];

			return updatedTurns;
		});
	}
	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player
						initialName="Player 1"
						symbol="X"
						isActive={activePlayer === 'X'}
					/>
					<Player
						initialName="Player 2"
						symbol="O"
						isActive={activePlayer === 'O'}
					/>
				</ol>
				<GameBoard
					onSelectSquare={handleSelectSquare}
					turns={gameTurns}
				/>
			</div>
			<Log turns={gameTurns} />
		</main>
	);
}

export default App;
