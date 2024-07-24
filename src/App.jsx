// import GreetingByClass from "./components/GreetingByClass"
// import GreetingByFunction from "./components/GreetingByFunction"
import Navbar from "./components/Navbar"
// import { useState } from "react"
// import Tabs from "./components/Tabular"
// import Calculator from "./components/Calculator.jsx";
import 'react-toastify/dist/ReactToastify.css';
// import ThemeController from "./components/ThemeController.jsx";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Registration from "./components/Registration";
import Product from './components/Product';


const App = () => {
  // const [count,  setCount] = useState(0)


  const products = [{prodID:1 , pName: 'Casino tourbillon', pDescription:'Custom made for neymar jr', price: '$280000', image: 'https://cdn1.ethoswatches.com/media/catalog/product/cache/06b0325fe0d1ea074c67035fe5935845/j/a/jacob-co-casino-tourbillon-ca100-40-aa-aa-abala_1.jpg'},
    {prodID:2 , pName: 'Astronomia baguette tourbillon', pDescription:'Custom made for Conor McGregor', price: '$1 million', image:'https://cdn1.ethoswatches.com/media/catalog/product/cache/06b0325fe0d1ea074c67035fe5935845/j/a/jacob-co-astronomia-solar-as910-40-bd-bd-a_1.jpg'},
    {prodID:3 , pName: 'Fleur de Jardin', pDescription:'Custom made for Lana Del-Rey', price: '$450000', image:'https://cdn1.ethoswatches.com/media/catalog/product/cache/06b0325fe0d1ea074c67035fe5935845/j/a/jacob-co-fleurs-de-jardin-af321-40-ba-ab-a_1.jpg'},
    {prodID:4 , pName: 'Bugatti Chiron tourbillon', pDescription:'Custom made for Ronaldo', price: '$850000', image:'https://cdn1.ethoswatches.com/media/catalog/product/cache/06b0325fe0d1ea074c67035fe5935845/j/a/jacob-co-bugatti-chiron-tb-bu200-30-aa-aa-b_1.jpg'},
    {prodID:5 , pName: 'Opera Godfather', pDescription:'Custom made for Rudraksh Tumane', price: '$950000', image:'https://cdn1.ethoswatches.com/media/catalog/product/cache/06b0325fe0d1ea074c67035fe5935845/j/a/jacob-co-opera-godfather-op110-21-ag-ab-a-1_1.jpg'},
    {prodID:6 , pName: 'Brilliant', pDescription:'Custom made for Shriya Sorte', price: '$1000000', image:'https://cdn1.ethoswatches.com/media/catalog/product/cache/06b0325fe0d1ea074c67035fe5935845/j/a/jacob-co-brilliant-bq020-40-rh-aa-abala.jpg'},
  ]
  return (
    <> 

    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Registration' element={<Registration/>}/>
      <Route path="/Product" element={<Product  data={products} />} />
    </Routes>



     {/* <GreetingByFunction name="Rudraksh"/> */}
    {/* <GreetingByClass name="Shriya"/><br/> */}

    {/* <div className="flex justify-center">
    <button  onClick={() => setCount((count) => count + 1)} className="btn btn-outline btn-success">
      count is {count}
    </button>
    </div><br/> */}
    
    {/* <Tabs className="m-10"></Tabs><br/> */}
    
    {/* <Calculator></Calculator><br/> */}
       
    {/* <Registration></Registration> */}

   
      
      {/* <ThemeController></ThemeController> */}
    


    </>
  )
}

export default App