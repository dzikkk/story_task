import { useState } from 'react';
import './App.css';
import { IconTile } from './components/IconTile';

function App() {
  const [tiles, setTiles] = useState([{
    main: null,
    secondary: null,
    icon: null,
  }]);

  const updateTiles = (idx) => (newValue) => {
    const updatedTiles = [...tiles];
    updatedTiles[idx] = newValue;
    console.log(updatedTiles);
    setTiles(updatedTiles);
  }

  return (
    <div className="App">
      <header className="App-header">
        <IconTile tileValue={tiles[0]} onValueUpdate={updateTiles(0)} />
      </header>
    </div>
  );
}

export default App;
