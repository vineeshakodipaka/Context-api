import React,{useContext} from 'react'
import Text from '../component/Text'
import {HelloContext} from '../App'
function Profile(){
  const {data}=useContext(HelloContext)
  return(
    <>
    
   <h4 style={{border:"1px solid blue",padding:"25px",textAlign:"center"}}> {data}
    <Text/>
    </h4>
    
    </>
  )
}
export default Profile