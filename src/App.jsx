import GreetingByClass from "./components/GreetingByClass"
import GreetingByFunction from "./components/GreetingByFunction"
import Navbar from "./components/Navbar"
import { useState } from "react"
import Tabs from "./components/Tabular"
import Calculator from "./components/Calculator.jsx";
import Form from "./components/Form.jsx"




const App = () => {
  const [count,  setCount] = useState(0)
  return (
    <>

    <Navbar></Navbar>

    <GreetingByFunction name="Rudraksh"/>
    <GreetingByClass name="Shriya"/><br/>

    <div className="flex justify-center">
    <button  onClick={() => setCount((count) => count + 1)} className="btn btn-outline btn-success">
      count is {count}
    </button>
    </div><br/>
    
    <Tabs className="m-10"></Tabs><br/>
    
    <Calculator></Calculator><br/>
     <Form></Form><br/>
    </>
  )
}

export default App