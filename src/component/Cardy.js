import { CDN_URL } from "../utiles/constant";

const Cardy=(props)=>{
    const {resdata}=props
    const {name,cuisines,avgRating,costForTwo}=resdata?.card?.card?.info;
     return (
        <div id="cardlist">
         <img id="yup" src={CDN_URL+resdata.card.card.info.cloudinaryImageId}></img>
         <h4>{name}</h4>
         <h5>{cuisines.join(", ")}</h5>
         <h5>{avgRating}</h5>
         <h5>{costForTwo}</h5>
        </div>
        )
 }
 export default Cardy;