// const obj={"name":"raushan","fac":{"name":"raj",dec:{"name":"hi ji"}}}
// const {fac}=obj;
// console.log(fac)

// const arr=[12,13];
// const [x]=arr;
// console.log(x)
// var arry=[1,2,6,4,3,7];
// const newarr=arry.map(ele=>{
//     if(ele>5)
//         return ele+5;
//     else
//     return ele;
// })
// console.log(newarr.length);

// const set=arry.filter((ele,ind)=>
//  (ind===1||ind===5))

// console.log(set)
const fetchData=async ()=>{
    const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.59430&lng=85.13520&restaurantId=425&catalog_qa=undefined&query=Biryani&submitAction=ENTER")
    const json= await data.json();
    console.log("po")
    return (json.data.cards.filter((ele,ind)=>ind=== 5 || ind === 2))
}
console.log("hi")
fetchData();