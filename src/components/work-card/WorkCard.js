import './WorkCard.css';

function WorkCard(props) {
  const name = props.name ?? 'Untitled task';

  return (
    <div className='work-card'>
      <div className='draggable-icon'></div>
      {name}
    </div>
  );
}

export default WorkCard;