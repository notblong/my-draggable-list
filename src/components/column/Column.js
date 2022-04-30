import { useState } from 'react';
import WorkCard from '../work-card/WorkCard';
import './Column.css';

function Column(props) {
  const column = props.column;
  const name = column.name ?? 'Untitled';
  const [cards, setCards] = useState(column.cards);
  const [dragItem, setDragItem] = useState(null);
  const [dragItemIdx, setDragItemIdx] = useState(null);

  const onDragStart = (e, index) => {
    console.log(`[${column.uuid}] on drag [${cards[index]}]`);
    setDragItem(cards[index]);
    setDragItemIdx(index);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  const onDragOver = (e, index) => {
    e.preventDefault();
    console.log(`[${column.uuid}] drag from [${dragItemIdx}] to [${index}]`);
    let tmp = cards.filter(c => c !== dragItem);
    tmp.splice(index, 0, dragItem);
    setCards(tmp);
  }

  const onDragEnd = () => {
    setDragItem(null);
    setDragItemIdx(null);
    console.log(`[${column.uuid}] drag end`);
  }

  return (
    <div className="column">
      {name}
      <ul onDragOver={(e) => e.preventDefault}>
        {cards.map((card, idx) => (
          <li key={idx} onDragOver={(e) => onDragOver(e, idx)}>
            <div
              draggable
              onDragStart={e => onDragStart(e, idx)}
              onDragEnd={onDragEnd}
            >
              <WorkCard name={card}></WorkCard>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Column;