import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import {name, image, city} from "../data/data.js"

function App() {
  return (
    <div>
      <NavBar />
      <Home name ={name} city ={city}/>
      <About image ={image}/>
    </div>
  );
}

export default App;
