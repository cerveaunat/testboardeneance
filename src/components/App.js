import './App.css';
import SizeSelect from './SizeSelect';
import Board from './Board';
import { useEffect, useState } from 'react';

function App() {

  const [size, setSize] = useState(1);

  useEffect(() => {console.log(size)},[size]);

  return (
    <div className="App">
      <SizeSelect setSize={setSize}></SizeSelect>
      <Board size={size}></Board>
    </div>
  );
}

export default App;
