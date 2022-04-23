import { useState } from 'react';
import WorkCard from '../work-card/WorkCard';
import './Column.css';

function Column(props) {
  const name = props.name ?? 'Untitled';
  const [cards, setCards] = useState(["🍰 Cake", "🍩 Donut", "🍎 Apple", "🍕 Pizza"]);
  const [dragItem, setDragItem] = useState(null);
  const [dragItemIdx, setDragItemIdx] = useState(null);

  const onDragStart = (e, idx) => {
    console.log(`on drag [${cards[idx]}]`);
    setDragItem(cards[idx]);
    setDragItemIdx(idx);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  const onDragOver = (e, idx) => {
    e.preventDefault();
    console.log(`drag from [${dragItemIdx}] to [${idx}]`);

    if (idx === dragItemIdx) return;

    let tmp = cards.filter(c => c !== dragItem);
    tmp.splice(idx, 0, dragItem);
    setCards(tmp);
  }

  const onDragEnd = () => {
    setDragItem(null);
    setDragItemIdx(null);
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