import { useRouteError } from "react-router-dom";

const ErrorPage=()=>{
    const err=useRouteError();
    console.log(err)
    return(
        <div>
            <h1>Oops Something Went Wrong</h1>
            <h2>Check Internet</h2>
            <h3>{err.status} {err.statusText}</h3>
        </div>
    )
};
export default ErrorPage;