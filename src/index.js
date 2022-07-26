import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {arr} from './App';
import Time from './Time'
import Test from './Test'
import Todo from './Todo'
import Counter from './Counter';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <div className='car'>
    //     {arr.map(function(val){
    //         console.log(val)
    //         return(
    //             <App link={val.link} sname={val.sname} />
        
    //         )
    //     })}

    // </div>
       // <div className='car'>
    //     {arr.map(function(val){
    //         console.log(val)
    //         return(
    //             <App link={val.link} sname={val.sname} />
        
    //         )
    //     })}
      <div>
       {/* <Test/>*/}
      
         <Time/> 
         <Todo/> 
        {/* <Counter/> */}
       </div>
);


  




