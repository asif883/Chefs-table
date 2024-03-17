import { useState } from "react"
import Carts from "./components/Carts/carts"
import Recipes from "./components/header/Recipes/recipes"
import Header from "./components/header/header"
import Title from "./components/heading of recipe/title"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const [carts ,setCarts] =useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const handleAddToCart = recipe =>{
    const newCarts =[...carts, recipe];
    setCarts(newCarts);

    if (!buttonClicked) {
      setButtonClicked(true);
    }else{
      toast('Already Added');
    }
   
    // console.log(newCarts)
  }

  return (
    <>
      <Header></Header>
      <Title></Title>
      <div className="container mx-auto flex">
        <Recipes handleAddToCart={handleAddToCart}
                 buttonClicked={buttonClicked}    
        ></Recipes>
        
        <Carts carts={carts}></Carts>  
         <ToastContainer/>
      </div>
      
     
    </>
  )
}

export default App
