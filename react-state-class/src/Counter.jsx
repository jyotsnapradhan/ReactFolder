import { useState } from "react";
import LikeButton from "./LikeButton";

function init(){
  return Math.random();
  console.log(randomNumber);
}
export default function Counter(){
    //let arr=useState(0);//Declaring useState
    //[variable,setVariable]=useState(0);

    

    let [count,setCount]=useState(init);
    
    
    console.log("component is re-rendered");
    console.log(`count is:${count}`);
    
    let increaseCount=()=>{
      setCount((currVal)=>{
        console.log(`current value:${currVal}`);
        return currVal+1;
        
      });
      // setCount((currVal)=>{
      //   return currVal+1;
      // });
      //setCount(25);
      };
      
  return(
      <div>
        <h1>Count={count}</h1>
        <button onClick={increaseCount}>Increase Counter</button>
      
      </div>
    );
  }
    

    
