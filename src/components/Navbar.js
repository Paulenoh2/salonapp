
import React,{useState} from 'react'
import {Link} from "react-router-dom";
import * as Icons from "react-icons/fa";
import './Navbar.css';
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";
import ProDropdown from './ProDropdown';
import Button from "./Button";


function Navbar (){

    const [dropdown,setDropdown] = useState(false);
    const [dropdowns,setDropdowns] = useState(false);

return(
    <>
        <nav className="navbar">
        <Link to = "/" className="navbar-logo">
       (SHALOM)
       
    </Link>
    <ul className="nav-items">
        {navItems.map(item => {
            if(item.title === "Services"){
                return(
                    <li key = {item.id} className={item.cName}
                    onMouseEnter={()=> setDropdown(true)}
                        onMouseLeave={()=> setDropdown(false)}>
                    
                     <Link to = {item.path}> {item.title}</Link>
                       {dropdown && <Dropdown/>}
                    </li>
                )

            } 
            if(item.title === "Products Gallery"){
                return(
                    <li key = {item.id} className={item.cName}
                    onMouseEnter={()=> setDropdowns(true)}
                        onMouseLeave={()=> setDropdowns(false)}>
                    
                     <Link to = {item.path}> {item.title}</Link>
                       {dropdowns && <ProDropdown/>}
                    </li>
                )
            }


            return(
                <li key = {item.id} className={item.cName}>
                    <Link to = {item.path}> {item.title}</Link>
    
                </li>
           
    


            );
    
      
      })};
    </ul>
    <Button/>
    
        </nav>
        
    </>

)


}

export default Navbar;