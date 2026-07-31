import "./App.css"
import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import Card from "./components/card"

function App() {

  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title="card1" description="descr"/>
        <Card title="card2" description="descr"/>
        <Card title="card3" description="descr"/>
        <Card title="card4" description="descr"/>
      </div>
      <Footer/>
    </>
  )
}

export default App
