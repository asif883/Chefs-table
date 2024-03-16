import Carts from "./components/Carts/carts"
import Recipes from "./components/header/Recipes/recipes"
import Header from "./components/header/header"
import Title from "./components/heading of recipe/title"


function App() {
  

  return (
    <>
      <Header></Header>
      <Title></Title>
      <div className="container mx-auto flex">
        <Recipes></Recipes>
        
        <Carts></Carts>
      </div>
      
     
    </>
  )
}

export default App
