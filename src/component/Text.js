import React,{useContext,useState} from 'react'
import {HelloContext} from '../App'
function Text(){
  
  const {data,setData}=useContext(HelloContext);

  
  return(
    <>
    <h4 >Hello World<br/><br/>
    
    <input type="text" placeholder="Enter data" onChange={(e)=>setData(e.target.value)}/>
    <button onClick={()=>setData(data)}>Click</button>
    </h4>
    </>
  )
}
export default Text