import Column from '../column/Column';
import './Board.css';

function Board() {
	const statusColumns = ['To Do', 'Doing', 'Done'];

	return (
		<div className="board">
			{statusColumns.map(col => (
				<Column name={col} />
			))}
		</div>
	);
}

export default Board;