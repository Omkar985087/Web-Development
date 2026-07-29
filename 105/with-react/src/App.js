import logo from './logo.svg';
import { use, useState } from 'react';
import "./App.css"

function App() {
  const [value,setvalue]=useState(0);
  return (
    <div className="App">
      <div className='value'>{value}</div>
      <button onClick={()=>{setvalue(1)}}>click me</button>
    </div>
  );
}

export default App;
