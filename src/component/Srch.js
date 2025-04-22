import { useState } from "react";

const Srch=(props)=>{
    const [listcard,setListCard]=useState(props);
    console.log("hi");
    const [listcard1,setListCard1]=useState("");
    return(
        <div id="srh">
         <input type="text" value={listcard1} onChange={(elem)=>{setListCard1(elem.target.value)}}></input>
         
         <button id="b" onClick={()=>{
            console.log(listcard)
            return(
            setListCard(listcard.filter((elem)=>{
             elem?.card?.card?.info?.name===listcard1
            })))
         }}>
        
            Search</button>
        </div>
    )
}
export default Srch;