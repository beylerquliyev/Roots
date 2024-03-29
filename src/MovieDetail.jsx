import React from 'react'
import CardDetail from './CardDetail'
import { useNavigate, useParams } from 'react-router-dom'
import Style from "../src/Style.module.css"
export default function MovieDetail() {
    let id=useParams().id
    let navigate=useNavigate()
   
  return (
    <div className={Style.FullDivDetail}>
        <button onClick={()=>navigate("/movies")} className={Style.back}>Back</button>
        <CardDetail id={id} />

    </div>
  )
}
