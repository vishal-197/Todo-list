import {useState} from "react";





export function Counter(){
  const [count, setCount]= useState(0);

function increment (){
    if(count < 10)setCount(count + 1);
}
function decrement(){
 if(count >0) setCount(count - 1);
}

return(
  <>
  <button onClick={increment}>increment</button>
  <p>{count}</p>
  <button onClick={decrement}>increment</button>

 
  </>
)
}



