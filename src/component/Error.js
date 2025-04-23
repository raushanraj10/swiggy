import { useRouteError } from "react-router";

const Error =()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Error are..</h1>
            <br></br>
            <h3>{err.status}</h3>
            <h3>{err.statusText}</h3>
        </div>
    )
}
export default Error