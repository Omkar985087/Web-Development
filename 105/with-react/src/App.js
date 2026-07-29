import logo from './logo.svg';
import { use, useState } from 'react';
import "./App.css"
import Navbar from './components/navbar'
import Footer from './components/footer';

function App() {
  const [value,setvalue]=useState(0);
  return (
    <div className="App">
      <Navbar/>
      <div className='value'>{value}</div>
      <button onClick={()=>{setvalue(value+1)}}>click me</button>
      <Footer/>
    
    </div>
  );
}

export default App;
