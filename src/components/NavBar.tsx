import { NavLink } from "react-router-dom";

export function NavBar(){
    return(
        <div className="side-bar">
            
               <NavLink to={"/museums"} className='navbar-link'>Museums</NavLink>
                <NavLink to={"/works"} className='navbar-link'>Works</NavLink>
           
        </div>
    )
}