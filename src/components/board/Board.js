import { useState } from 'react';
import Column from '../column/Column';
import './Board.css';

function Board() {
	const [columns, setcolumns] = useState([
		{
			uuid: '1',
			name: 'To Do',
			cards: ["🍰 Cake", "🍩 Donut", "🍎 Apple"]
		},
		{
			uuid: '2',
			name: 'Doing',
			cards: ["🍰 Cake", "🍩 Donut", "🍎 Apple", "🍕 Pizza"]
		},
		{
			uuid: '3',
			name: 'Done',
			cards: ["🍰 Cake", "🍩 Donut"]
		},
	]);

	return (
		<div className="board">
			{columns.map(col => (
				<Column key={col.uuid} column={col} />
			))}
		</div>
	);
}

export default Board;