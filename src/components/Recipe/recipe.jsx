import PropTypes from 'prop-types'; 
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({recipe, handleAddToCart,buttonClicked}) =>{
const {recipe_name, recipe_image,short_description,ingredients,preparing_time,calories} = recipe;

    return(
        <main>
                <div className=' space-y-4 text-left border-2 p-8 rounded-2xl border-gray-200 shadow-xl '>
                <img className='w-[350px] h-[200px]' src={recipe_image} alt="" />
            <h1 className="text-2xl font-bold">{recipe_name}</h1>
            <p>{short_description}</p>
            <h3 className="text-xl font-semibold">Ingredients: {ingredients.length}</h3>
            <ul className=''>
                <li>i. {ingredients[0]}</li>
                <li>ii. {ingredients[1]}</li>
                <li>iii. {ingredients[2]}</li>
                <li>iv. {ingredients[3]}</li>
                <li>v. {ingredients[4]}</li>
            </ul>
             <div className='flex border-b-2 border-gray-200 gap-10'>
                  <p className='flex items-center pb-4' ><IoTimeOutline /> {preparing_time}</p>  
                  <p className='flex items-center pb-4'><AiOutlineFire /> {calories} </p>  
             </div>
             <button disabled={buttonClicked} onClick={()=>handleAddToCart(recipe)} className='p-4 bg-green-400 text-black font-bold rounded-3xl'>Want to Cook</button>
            </div>
        </main>
    )
}

Recipe.propTypes ={
    recipe: PropTypes.object
}
export default Recipe;