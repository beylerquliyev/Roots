import React, { useEffect, useState } from 'react'
import Style from "../src/Style.module.css"

function CardDetail({id}) {
    const[data,Setdata]=useState([])
    async function GetDatabyId(id){
        let response= await fetch (`http://www.omdbapi.com/?apikey=a407a7b3&i=${id}`)
        let response2=await response.json()
        Setdata(response2)
        console.log(response2);
    }
    useEffect(()=>{
       
        GetDatabyId(id)
         // eslint-disable-next-line react-hooks/exhaustive-deps
        
    },[id])
  return (
    <div className={Style.FullCardDetailDiv}>
        <div className={Style.LeftDivDetail}>
            <img className={Style.LeftDivDetailImg}  src={`${data.Poster}`} alt="" />

        </div>

      <div className={Style.RightDivDetail}>
    <p className={Style.CardDetailp}>Actors: <span className={Style.CardDetailSpan} >{data.Actors}</span></p>
    <p className={Style.CardDetailp} >Awards: <span className={Style.CardDetailSpan} >{data.Awards}</span></p>
    <p className={Style.CardDetailp} >Country: <span className={Style.CardDetailSpan} >{data.Country}</span></p>
    <p className={Style.CardDetailp} >Genre: <span className={Style.CardDetailSpan} >{data.Genre}</span></p>
    <p className={Style.CardDetailp} >Plot: <span className={Style.CardDetailSpan} >{data.Plot}</span></p>
    <p className={Style.CardDetailp} >Released: <span className={Style.CardDetailSpan} >{data.Released}</span></p>
    <p className={Style.CardDetailp} >Writer: <span className={Style.CardDetailSpan} >{data.Writer}</span></p>
    <p className={Style.CardDetailp} >Rating: <span className={Style.CardDetailSpan} >{data.imdbRating}</span></p>


      </div>
    </div>
  )
}

export default CardDetail
