import { useEffect, useState } from "react";
import Recipe from "../../Recipe/recipe";

const Recipes = ({handleAddToCart,buttonClicked}) =>{
    const [recipes , setRecipes] = useState([]);
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return(
        <div className="lg:w-3/5 grid gap-8 grid-cols-1 lg:grid-cols-2">  
             {
                recipes.map(recipe => <Recipe key={recipe.id}
                     recipe={recipe}
                     handleAddToCart={handleAddToCart}
                     buttonClicked={buttonClicked}
                ></Recipe>)
             } 
        </div>
    )
}
export default Recipes;