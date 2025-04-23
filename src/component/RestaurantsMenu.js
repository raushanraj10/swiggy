import { use, useEffect , useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
const RestaurantsMenu = ()=>{
    const {resId}=useParams();
    console.log(resId)
    const [restinfo,setresinfo]=useState([]);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async()=>{
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.59430&lng=85.13520&restaurantId="+resId+"&catalog_qa=undefined&query=Biryani&submitAction=ENTER")
        const json= await data.json();
        const fill= await json.data.cards.filter((ele,ind)=>ind== 2 || ind == 5)
        setresinfo(fill)
    }
    console.log("ji")
    if(restinfo.length===0){
        return <Shimmer/>
    }
    if(restinfo.length===2){
    console.log("yup")
    const {name,cuisines}= restinfo[0].card.card.info
    const {itemCards}=restinfo[1].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    return (
            <div>
            <h1>{name}</h1>
            <h3>{cuisines}</h3>
            <ul>
            {itemCards.map((ele)=><li key={ele.card.info.id}>{ele.card.info.name} </li>)}
            </ul>
        </div>
    )
}
}

export default RestaurantsMenu;