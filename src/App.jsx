import GreetingByClass from "./components/GreetingByClass"
import GreetingByFunction from "./components/GreetingByFunction"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <GreetingByFunction name="Rudraksh"/>
    <GreetingByClass name="Shriya"/>
    
  
    </>
  )
}

export default App