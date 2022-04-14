import WorkCard from '../work-card/WorkCard';
import './Column.css';

function Column(props) {
  const name = props.name ?? 'Untitled';
  const cards = ["🍰 Cake", "🍩 Donut", "🍎 Apple", "🍕 Pizza"];

  return (
    <div className="column">
      {name}
      {cards.map(card => (
        <WorkCard name={card}></WorkCard>
      ))}
    </div>
  );
}

export default Column;