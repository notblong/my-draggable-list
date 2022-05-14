import { useState } from 'react';
import Column from '../column/Column';
import './Board.css';

function Board() {
	const [columns, setcolumns] = useState([
		{
			uuid: '2',
			name: 'Doing',
			cards: ["🍰 Cake", "🍩 Donut", "🍎 Apple", "🍕 Pizza"]
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