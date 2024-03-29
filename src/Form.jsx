import React, { useEffect, useState } from 'react'

function Form({CallBack}) {
    const [value,SetValue] = useState("")
  
    function InputChange(e){
        SetValue(e.target.value)
    }
  function AddData(){
   const newObj={title:value,id:Math.random()}
       
      
       
        CallBack(newObj)
   
  
  
    
  }




  

  return (
    <div>
        <input onChange={InputChange} type="text" />
        <button onClick={AddData} >Add</button>
      
    </div>
  )
}

export default Form
