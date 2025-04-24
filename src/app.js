import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {reslist} from "./utiles/mocData.js"
import Cardy from "./component/Cardy"
import Nav from "./component/Nav.js"
import Srch from "./component/Srch.js"
import Content from "./component/Content.jsx";
import {useState,useEffect} from "react";
import Shimmer from "./component/Shimmer.js";
import { HydratedRouter, RouterProvider , Outlet} from "react-router";
import About from "./component/About.js";
import Contact from "./component/Contact.js";
import Error from "./component/Error.js";
import { createBrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import RestaurantsMenu from "./component/RestaurantsMenu.js";

const App=()=>{
    const [listcard,setListCard]=useState([]);
    const [readtext,settext]=useState("")
    const [filterreslist,setfilterreslist]=useState([]);
     
    useEffect(()=>{
        fertchData();
    },[]);
    
    const fertchData = async () =>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59430&lng=85.13520&collection=80458&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
        console.log(data)
        const json= await data.json();
        console.log(json)
        const filtering=json.data.cards.filter((ele,ind)=>ind>1?ele:false)
        setfilterreslist(filtering)
        return (setListCard(filtering))
                
    }
    
    if(listcard.length===0)
        {  //return <h1>loading...</h1>
            
             return (<div>
             <Nav></Nav>
             <Shimmer></Shimmer>
             </div>)
        }
    return (
        <div id="parent">
          <Link></Link>
            <Nav></Nav>
             <div>
            <button id="btn" onClick={()=>{
                //setListCard(listcard.filter(elem=>elem.card.card.info.avgRating>4))
                const filtered=listcard.filter(elem=>elem.card.card.info.avgRating>4)
                return (setfilterreslist(filtered));
            }}>Top Rate restaurants</button>
            
            <input type="text" value={readtext} onChange={(elem)=>{settext(elem.target.value)}}></input>
            <button onClick={()=>{
                return (setfilterreslist(listcard.filter((eleme)=>eleme.card.card.info.name.toLowerCase().includes(readtext.toLowerCase()))))
            
                    
            }}>Search</button>
            </div>
            <div id="deco">
            <div id="parentcard">
           {
            filterreslist.map((elem,ind) => <a key={elem?.card?.card?.info?.id} href={"/restaurant_id=/"+elem.card.card.info?.id}><Cardy  resdata={elem}/></a>)
           }
            </div>
            </div>
        <Outlet/>
        <Content/>
        </div>

    )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      
      {
        
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant_id=/:resId",
        element:<RestaurantsMenu/>
      },
    ],
    errorElement:<Error/>,
  },
  
])


const Root = ReactDOM.createRoot(document.getElementById("root"))
Root.render(<RouterProvider router={appRouter}/>)

