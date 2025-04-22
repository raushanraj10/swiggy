const obj={"name":"raushan","fac":{"name":"raj",dec:{"name":"hi ji"}}}
const {fac}=obj;
console.log(fac)

const arr=[12,13];
const [x]=arr;
console.log(x)
var arry=[1,2,6,4,3,7];
const newarr=arry.map(ele=>{
    if(ele>5)
        return ele+5;
    else
    return ele;
})
console.log(newarr.length);

const set=arry.filter((ele,ind)=>{
    if(ind>2)
        return true;
    else
    return false;
})
console.log(set)