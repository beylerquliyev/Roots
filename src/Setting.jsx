import React from 'react'
import Style from "../src/Style.module.css"
import { Navigate, Route, Routes,  useNavigate, useParams } from 'react-router-dom'
import General from './General'
import List from './List'
import Password from './Password'
import Personal from './Personal'
import Tags from './Tags'


function Setting() {
    let navigate=useNavigate()
  
    let b=useParams()
    let nestedParams=b["*"]
   let active=(path)=> path === nestedParams
  return (
    <div className={Style.content}>
       <div className={Style.left} >
       <h1>Settings</h1>
      <ul>
        <li className={active("general")?Style.Active:""} onClick={()=>navigate("general")}>General</li>
        <li  className={active("personal")?Style.Active:""} onClick={()=>navigate("personal")} >Personal</li>
        <li  className={active("password")?Style.Active:""} onClick={()=>navigate("password")}>Password</li>
        <li  className={active("tags")?Style.Active:""} onClick={()=>navigate("tags")} >Tags</li>
      </ul>
       </div>

   <div className={Style.right} >
  <h1>Setting</h1>
   <div className={Style.deyisilecek} >
       <Routes>
        <Route path='/' element={<Navigate to="tags" replace/>}/>
        <Route path='general' element={<General/>}/>
        <Route path='list' element={<List/>}/>
        <Route path='password' element={<Password/>}/>
        <Route path='personal' element={<Personal/>}/>
        <Route path='tags' element={<Tags/>}/>
       </Routes>
     </div>
   </div>


    </div>
  )
}

export default Setting
