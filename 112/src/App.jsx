import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name,setname]=useState("omkar");

  const [form,setform]=useState({
    email:"",
    phone:""
  })
  const handleclick=()=>{
    alert("hey i am clicked");
  }

  const handleMouseOver=()=>{
    alert("hey i am hovered");
  }

  const handleChange=(e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }

  return (
    <>
      <div className="button">
        <button onClick={handleclick}>click me</button>
      </div>

      {/* <div className="red" onMouseOver={handleMouseOver}>i am red div</div> */}

      <input type="text" name="email" value={form.email} onChange={handleChange}/>
      <input type="phone" name="phone" value={form.phone} onChange={handleChange}/>
    
    </>
  )
}

export default App
