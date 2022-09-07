import { NavLink } from "react-router-dom";

export function Home(){
    return(
        <div>
            <ul>
               <li> <NavLink to={"/museums"}>Museums</NavLink></li>
               <li> <NavLink to={"/works"}>Works</NavLink></li>
            </ul>
        </div>
    )
}