import Cart from "../Cart/Cart";



const Carts= ({carts})=>{

    const handleAddPreparing = ()=>{
        console.log('clicked')
    }

    return(
        <div className="lg:w-2/5  border-2 border-gray-200 rounded-2xl p-4 ml-6">
            <div className="text-center">
                <h1 className="text-2xl font-semibold  border-b-2 border-gray-200">Want to Cook: {carts.length}</h1>
                <div className="flex gap-16 mb-1 mt-3">
                <p>Recipe Name:</p>
                <p>Time</p>
                <p>Calories</p>
               </div>
                {
                    carts.map((cart,idx) => <Cart key={idx}
                     cart={cart}
                     handleAddPreparing={handleAddPreparing}
                     ></Cart>)
                     
                }
                 <h1 className="text-2xl font-semibold  border-b-2 border-gray-200">Currently Cooking: {carts.length}</h1>
                 <div className="flex gap-16 mb-1 mt-3">
                <p>Recipe Name:</p>
                <p>Time</p>
                <p>Calories</p>
               </div>
            </div>
                    
        </div>
    )
}

export default Carts;