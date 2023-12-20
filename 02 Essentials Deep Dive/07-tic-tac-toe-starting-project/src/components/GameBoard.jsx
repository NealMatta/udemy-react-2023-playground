export default function GameBoard({ onSelectSquare, board }) {
	// 88. Finding more ways to derive a single state only
	// let gameBoard = initialGameBoard;

	// // 84 - You should manage as little state as possible but rather derive values from a state
	// for (const turn of turns) {
	// 	const { square, player } = turn;
	// 	gameBoard[square.row][square.col] = player;
	// }

	/* 82 - While this works, the data captured here needs to be referenced 
    in multiple components. So rather than have two separate states, I can life 
    this state to the parent component and then pass it to this component */

	// const [gameBoard, setGameBoard] = useState(initialGameBoard);

	// function handleSelectSquare(rowIndex, colIndex) {
	// 	// 79 - If the state is an object or an array, you want to update it in an immutable way
	// 	// https://academind.com/tutorials/reference-vs-primitive-values
	// 	setGameBoard((prevGameBoard) => {
	// 		const updatedBoard = [
	// 			...prevGameBoard.map((innerArray) => [...innerArray]),
	// 		];
	// 		updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
	// 		return updatedBoard;
	// 	});

	// 	onSelectSquare();
	// }

	return (
		<ol id="game-board">
			{board.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<button
									onClick={() =>
										onSelectSquare(rowIndex, colIndex)
									}
									disabled={playerSymbol !== null}
								>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
