import { FaRegUserCircle } from "react-icons/fa";
import banner from "../../assets/Images/banner.jpg"
const Header = () =>{
    return(
        <div className="container mx-auto">
            <nav className="flex flex-col lg:flex-row justify-between pt-8 items-center">
                <h2 className="text-4xl font-bold">Recipe Calories</h2>
                 <div>
                      <ul className="flex gap-8 text-gray-500 font-semibold">
                        <li><a href="#"></a>Home</li>
                        <li><a href="#"></a>Recipes</li>
                        <li><a href="#"></a>About</li>
                        <li><a href="#"></a>Search</li>
                        
                    </ul>  
                </div> 
                <div className="flex gap-3 items-center">
                    <input className="bg-gray-200 py-3 px-6 border-none rounded-xl" type="text" placeholder="Search"/>
                    <button className=" rounded-full border-8 border-green-400 text-gray-600 text-2xl bg-green-400" ><FaRegUserCircle /></button>
                </div>  
            </nav>
            <section style={{
                backgroundRepeat:"no-repeat",
                backgroundSize : 'cover',
                height: '600px',
                backgroundImage: `linear-gradient(0.00deg, rgba(21, 11, 43, 0.9),rgba(21, 11, 43, 0) 100%),url(${banner})`
            }} className="rounded-xl mt-8">
                <div className="text-center pt-10 lg:pt-32 ">
                    <div className="space-y-5">
                    <h1 className="text-white text-3xl lg:text-6xl font-bold">Discover an exceptional cooking <br />
                    class tailored for you</h1>
                    <p className=" text-white font-medium"> Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br/>
                    problems to become an exceptionally well world-class Programmer</p>
                    </div>
                    <div className="mt-3 lg:mt-12">
                        <button className="text-black bg-green-500 p-4 rounded-3xl font-bold">Explore Now</button>
                        <button className="ml-8 p-4 border-2 border-white text-white rounded-3xl">Our Feedback</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Header ;