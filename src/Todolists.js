import React  from "react";


function Todolists(props){
   
    return(
        <li>
            <button onClick={()=>{
                props.onselect(props.id)
            }}>-</button>
            {props.item}
        </li>
    )
}

export default Todolists