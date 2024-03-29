import React, { useState } from 'react'
import Form from './Form'
import List from './List'
import  { useEffect } from 'react';


 function ToDo() {
    const [Data,SetData]=useState([])

    function CallBack(obj){
      
       console.log(obj);
       SetData((prev)=>[obj,...prev])
        
    
     }



    async function GetData(){
        let response=await fetch("https://jsonplaceholder.typicode.com/todos")
        let response2=await response.json() 
     SetData(response2)
        return response2
    }
    
    useEffect(()=>{
       GetData()

    },[])
    
  return (


    <div>
     <Form CallBack={CallBack}/>
     <List Data={Data} />
     

    </div>
  )
}

export default ToDo
