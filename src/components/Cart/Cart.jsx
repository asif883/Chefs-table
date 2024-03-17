const Cart =({cart}) =>{
    const {recipe_name,preparing_time,calories} = cart;
    
    return(
        <div >
            
            <div className="bg-gray-200 px-2 py-6 rounded-2xl  flex gap-10 mb-4">
            <h3 className="text-gray-500  font-medium">{recipe_name}</h3>
            <h3 className="text-gray-500  font-medium">{preparing_time}</h3>
            <h3 className="text-gray-500   font-medium">{calories}</h3>
            <button className="bg-green-400 p-1 rounded-2xl">Preparing</button>
            </div>

        </div>
    )
}
export default Cart;