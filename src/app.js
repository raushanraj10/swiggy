import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {reslist} from "./utiles/mocData.js"
import Cardy from "./component/Cardy"
import Nav from "./component/Nav.js"
import Srch from "./component/Srch.js"
import Content from "./component/Content.jsx";
import {useState,useEffect} from "react";
import Shimmer from "./component/Shimmer.js";

const App=()=>{
    const [listcard,setListCard]=useState([]);
     
    useEffect(()=>{
        fertchData();
    },[]);
    
    const fertchData = async () =>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59430&lng=85.13520&collection=80458&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
        console.log(data)
        const json= await data.json();
        console.log(json)
        setListCard(json.data.cards.filter((ele,ind)=>ind>1?ele:false))
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
            <Nav></Nav>
            <button id="btn" onClick={()=>{
                //setListCard(listcard.filter(elem=>elem.card.card.info.avgRating>4))
                const filtered=listcard.filter(elem=>elem.card.card.info.avgRating>4)
                return (setListCard(filtered));
            }}>Top Rate restaurants</button>
            
            <Srch></Srch>
            <div id="deco">
            <div id="parentcard">
           {
            listcard.map((elem,ind) => <Cardy key={elem?.card?.card?.info?.id} resdata={elem}/>)
           }
            </div>
            </div>
        <Content></Content>
        </div>

    )
}

const Root = ReactDOM.createRoot(document.getElementById("root"))
Root.render(<App></App>)