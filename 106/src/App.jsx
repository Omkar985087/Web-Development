import "./App.css"
import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import Card from "./components/card"

function App() {

  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card/>
      </div>
      <Footer/>
    </>
  )
}

export default App
