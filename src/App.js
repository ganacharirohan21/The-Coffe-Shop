import React, {useState} from "react";
import homel from "../src/images/home1.jpg"
import homel2 from "../src/images/home2.png"
import homel3 from "../src/images/home3.png"
import homel4 from "../src/images/home4.png"
import "./App.css"
import foodItems from "./foodAPI"
import Cards from "../src/components/cards/Cards"
import Navbar from "./components/Navbar/index"


const App = () => {
  const [foodData] = useState(foodItems);
  console.log(foodData);
  return (
<>
  <Navbar/>
  <div className="home-about">
  <div className="homeland" id="home">
    <img 
    src= {homel}
    alt="homeland"></img>  
  </div>
  <div className="homemid">  
    <h1>Best coffees that make you</h1>
    <h1>happy and cheer you up!</h1>
    <ul>
      <li>
        <img 
        src= {homel2}
        alt="homeland2"></img>  
        <h2>Original Coffee</h2>
        <p>We select the best beans</p>
      </li>
      <li>
        <img 
        src= {homel3}
        alt="homeland3"></img> 
        <h2>Best Hot Coffee</h2>
        <p>Enjoy your hot coffee taste</p>
      </li>
      <li>
        <img 
        src= {homel4}
        alt="homeland4"></img>
        <h2>Best Iced Coffee</h2>
        <p>We serve the best iced coffee</p>
      </li>
    </ul>
  </div>
  <div className="productmid" id="products">
    <h1>Find delicious food!</h1>

    <Cards foodData={foodData} />
      
  </div>
  </div>
  <div className="place" id="place">
    <h1>Our very comfy fasilities</h1>
  </div>
  <div className="blogs" id="blog">
    <h1>Our coffee blogs</h1>
  </div>
  <div className="footer">
  <h1>HoiCoffee</h1>
  <p>The best place to work and be more productive</p>
  </div>    
</>
 
  )
}

export default App;
