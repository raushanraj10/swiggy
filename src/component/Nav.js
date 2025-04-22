import { useState } from "react";
import {Nav_url} from "../utiles/constant"

const Nav = ()=>{
     const [letlog,set]=useState("Login")
    return (
        <div id="nav1">
          <div id="image">
          <img id ="hi" src={Nav_url}></img>
          </div>
          <div id="tool">
           <a className="ab" href="#">Home</a>
           <a className="ab" href="#">Order</a>
           <a className="ab" id= "cart" href="#">🛒</a>
           <button id="login" onClick={()=>{
            letlog==="Login"?set("Logout"):set("Login")
           }}>{letlog}</button>
          </div>

        </div>
    )
}

export default Nav;