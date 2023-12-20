import { useState } from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import GameOver from './components/GameOver';
import { WINNING_COMBINATIONS } from './winning-combinations';

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

function helperDeriveActivePlayer(gameTurns) {
	let currentPlayer = 'X';

	if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
		currentPlayer = 'O';
	}

	return currentPlayer;
}

function App() {
	const [gameTurns, setGameTurns] = useState([]);
	const [players, setPlayers] = useState({
		X: 'Player 1',
		O: 'Player 2',
	});

	const activePlayer = helperDeriveActivePlayer(gameTurns);

	// 92 - Making a deep copy is necessary because there is a restart capability. That
	// means that the gameBoard needs to be reset back to the original value
	let gameBoard = [...initialGameBoard.map((array) => [...array])];

	for (const turn of gameTurns) {
		const { square, player } = turn;
		gameBoard[square.row][square.col] = player;
	}

	let winner = null;

	for (const combination of WINNING_COMBINATIONS) {
		const firstSquareSymbol =
			gameBoard[combination[0].row][combination[0].column];
		const secondSquareSymbol =
			gameBoard[combination[1].row][combination[1].column];
		const thirdSquareSymbol =
			gameBoard[combination[2].row][combination[2].column];

		if (
			firstSquareSymbol &&
			firstSquareSymbol === secondSquareSymbol &&
			firstSquareSymbol === thirdSquareSymbol
		) {
			winner = players[firstSquareSymbol];
		}
	}

	const hasDraw = gameTurns.length === 9 && !winner;

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

	function handleRestart() {
		setGameTurns([]);
	}

	function handlePlayerNameChange(symbol, newName) {
		// 90 - Need to do it this way so to not overwrite the names that aren't being set
		setPlayers((prevPlayers) => {
			return {
				...prevPlayers,
				[symbol]: newName,
			};
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
						onChangeName={handlePlayerNameChange}
					/>
					<Player
						initialName="Player 2"
						symbol="O"
						isActive={activePlayer === 'O'}
						onChangeName={handlePlayerNameChange}
					/>
				</ol>
				{(winner || hasDraw) && (
					<GameOver winner={winner} onRestart={handleRestart} />
				)}
				<GameBoard
					onSelectSquare={handleSelectSquare}
					board={gameBoard}
				/>
			</div>
			<Log turns={gameTurns} />
		</main>
	);
}

export default App;
