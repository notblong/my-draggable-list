import './App.css';
import Column from './components/column/Column';

function App() {
  const column = {
    name: '✨ Draggable list ✨',
    cards: ['😺 Cat', '🐶 Dog', '👽 UFO', '🦄 Unicorn']
  };

  return (
    <div className='App'>
      <div className='center'>
        <Column column={column} />
      </div>
    </div>
  );
}

export default App;
