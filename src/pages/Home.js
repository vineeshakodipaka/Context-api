import React,{useContext} from 'react'
import {HelloContext} from '../App'
function Home(){
  const {data}=useContext(HelloContext)
  return(
    <>
    <h4 style={{border:"1px solid navy",padding:"25px",textAlign:"center"}}>Advance Happy NewYear<u style={{color:"green"}}>{data}</u></h4>
    
    </>
  )
}
export default Home