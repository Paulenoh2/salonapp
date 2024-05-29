import React,{useState} from 'react'
import { Link } from "react-router-dom";
import "./ProductDropdown.css";
import { productsDrop} from "./NavItems";


function ProDropdown (){
const [dropdowns,setDropdowns] = useState(false);

return  ( 
            <>
        
        <ul className={dropdowns ? "services-product clicked": "services-product"} onClick={()=> setDropdowns(!dropdowns)}>
            {productsDrop.map((item)=>{
            return( 
                    <il key = {item.id}>
                <Link to= {item.path} className={item.cName} onClick={()=>setDropdowns(false)}>
                        {item.title}
                </Link>

                 </il>

            );

            
                
            })}
        </ul>
        
        
        
        </>


        )

}
export default ProDropdown;