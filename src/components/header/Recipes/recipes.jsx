import { useEffect, useState } from "react";
import Recipe from "../../Recipe/recipe";

const Recipes = () =>{
    const [recipes , setRecipes] = useState([]);
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return(
        <div className="lg:w-2/3 grid gap-8 grid-cols-1 lg:grid-cols-2">  
             {
                recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}></Recipe>)
             } 
        </div>
    )
}
export default Recipes;