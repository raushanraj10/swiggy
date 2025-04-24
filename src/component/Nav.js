import { useState } from "react";
import {Nav_url} from "../utiles/constant";
import { Link } from "react-router-dom";
const Nav = ()=>{
     const [letlog,set]=useState("Login")
    return (
      
        <div id="nav1">
          <div id="image">
          <img id ="hi" src={Nav_url}></img>
          </div>
          <div id="tool">
           <Link to="/" className="ab">Home</Link>
           <Link to="/about" className="ab" >About</Link>
           <Link to="/contact" className="ab" >Contact</Link>
           <Link className="ab" id= "cart" to="#">🛒</Link>
           <button id="login" onClick={()=>{
            letlog==="Login"?set("Logout"):set("Login")
           }}>{letlog}</button>
          </div>

        </div>
    )
}

export default Nav;