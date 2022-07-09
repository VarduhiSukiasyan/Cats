import { useEffect } from 'react';
import './App.css';
import Categories from './Categories';
import Cats from './Cats';


function App() {

  return (
    <div className="App">
      <header className="App-header">
       
       <Categories/>
      <Cats/>
      </header>
    </div>
  );
}

export default App;
