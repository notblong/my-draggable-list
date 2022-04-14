import './WorkCard.css';

function WorkCard(props) {
  const name = props.name ?? 'Untitled task'
  return (
    <div className='work-card'>
      {name}
    </div>
  );
}

export default WorkCard;