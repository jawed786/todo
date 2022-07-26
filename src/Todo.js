import { React, useState } from "react";
import './todost.css'
import Todolists from "./Todolists";

function Todo(){
    const [inputlist,updatedlist]=useState("");
    
    const [items,setitems]=useState([])
    const eventitem=(event)=>{
           updatedlist(()=>{
              
               return event.target.value
           });
           }

    
    const itemlist=()=>{
        setitems((olditems)=>{
            return [...olditems,inputlist]
        })
      
       updatedlist('')
    }
    const deleteitem=(id)=>{
        setitems((olditems)=>{
            return olditems.filter((elem,index)=>{
                return index !== id
            })
        })
    }
    
   
    return(

    <>
        <div className="main_div">
           <div className="center_div">
               <h1 >todo list</h1>
               <div className="add">
                  <input type='text' placeholder="add task" onChange={eventitem} value={inputlist}></input>
                  <button onClick={itemlist}>+</button>
                </div>
                <ol>
                    {
                        items.map((itemval,index)=>{
                            return <Todolists
                             item={itemval}
                              id={index}
                            //   key={index}
                              onselect={deleteitem}/>
                        })
                    }
                </ol>
              </div>
        </div>
    </>
    )
}



export default Todo