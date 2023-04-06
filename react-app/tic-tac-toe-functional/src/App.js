import { useState } from "react";


export function Square({ value , onSquareClick}) {

	return (<button class="square" onClick={onSquareClick}>{value}</button>);
}

export function Board() {
	const [xIsNext,setxIsNext] = useState(true);
	const [squares, setsquares] = useState(Array(9).fill(null));
	function handleClick(i){
		const nextSquare = squares.slice();
		if(calculateWinner(squares) || nextSquare[i]){
			return;
		}
		if(xIsNext){
       nextSquare[i] = 'X';
		}else{
      nextSquare[i] = 'O';
		}
		
		setsquares(nextSquare);
		setxIsNext(!xIsNext);
	}
	const winner = calculateWinner(squares);
	let status;
	if(winner){
     status = 'Winner : ' + winner;
	}else{
      status = 'Next Move : ' + ((xIsNext)?'X':'O');
	}
	return (
		<>
		<div class="status">{status}</div>
		<div class="board">
			<div class="board-row">
				<Square value={squares[0]} onSquareClick={()=>  handleClick(0)}/>
				<Square value={squares[1]} onSquareClick={()=>  handleClick(1)}/>
				<Square value={squares[2]} onSquareClick={()=>  handleClick(2)}/>
			</div>
			<div class="board-row">
				<Square value={squares[3]} onSquareClick={()=>  handleClick(3)}/>
				<Square value={squares[4]} onSquareClick={()=>  handleClick(4)}/>
				<Square value={squares[5]} onSquareClick={()=>  handleClick(5)}/>
			</div>
			<div class="board-row">
				<Square value={squares[6]} onSquareClick={()=>  handleClick(6)}/>
				<Square value={squares[7]} onSquareClick={()=>  handleClick(7)}/>
				<Square value={squares[8]} onSquareClick={()=>  handleClick(8)}/>
			</div>
		</div>
		</>
	);
}

export default function App() {
	return (<Board />);

}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
