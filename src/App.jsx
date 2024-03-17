import { useState } from "react"
import Carts from "./components/Carts/carts"
import Recipes from "./components/header/Recipes/recipes"
import Header from "./components/header/header"
import Title from "./components/heading of recipe/title"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Recipe from "./components/Recipe/recipe"
function App() {

  const [carts ,setCarts] =useState([]);
  
  const handleAddToCart = (R) =>{
   const isExist = carts.find((recipe) => recipe.recipe_id == R.recipe_id);
   console.log(isExist);
   if(!isExist){
    const newCarts =[...carts, R];
    setCarts(newCarts);
   } 
   else{
      toast.warn('Already Added');
   }
    
        
    
  }

  return (
    <>
      <Header></Header>
      <Title></Title>
      <div className="container mx-auto flex flex-col lg:flex-row">
        <Recipes handleAddToCart={handleAddToCart}
                     
        ></Recipes>
        
        <Carts carts={carts}></Carts>  
         <ToastContainer/>
      </div>
      
     
    </>
  )
}

export default App
