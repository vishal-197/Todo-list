import {useState} from "react";

export function Todo() {
    const [LiValue, setValue]= useState("")
    function newLi(e){
        console.log(e.target.value)
        setValue(e.target.value)
    }
  return (
    <>
   <input type='text' placeholder='Enter a name' onChange={newLi}/>
   <ul>
    <li>{LiValue}</li>
   </ul>
    </>
  )
}

export default Todo