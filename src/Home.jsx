import React from 'react'
import { useNavigate } from 'react-router-dom'
import Style from "../src/Style.module.css"
function Home() {
    let navigate=useNavigate()
  return (
    <div >
        <h1>Welcome</h1>
        <button onClick={()=>navigate("/todos")} >Get Started</button>
        <button onClick={()=>navigate("/settings")}>Setting</button>
        <button  className={Style.BtnSearchMovies}  onClick={()=>navigate("/movies")}>Search Movies</button>
     

      
    </div>
  )
}

export default Home
