import React, { useState } from 'react'
import Style from "../src/Style.module.css"
import MoviesCard from './MoviesCard'

function Movies() {
    const[value,SetValue]=useState("")
    const[data,Setdata]=useState([])
    function GetValue(e){
        SetValue(e.target.value)
    }
   async function GetData(){
 try{
    let response1=await fetch(`http://www.omdbapi.com/?apikey=a407a7b3&s=${value}`)
    let response2=await response1.json()
    Setdata(response2.Search)
 }
 catch(eror){
    console.log(eror);

 }
   }

   
  return (
    <div >
         <header>
   <div className={Style.MoviesHeaderDiv}>
    <h1 className={Style.Hd}>
        HD 

        <span>
        KinoTeatr
        </span>
    </h1>

    <div className={Style.inputDivs}>
        <input onChange={GetValue} className={Style.MovieInput} type="text" />
        <button onClick={GetData}>🔍</button>
    </div>
   </div>
    </header>
    <main className={Style.MovieMain}>
        <div className={Style.FullCardDiv}  >
         
        {data &&data.map((item,index)=>{
            return <MoviesCard key={index} title={item.Title} year={item.Year} id={item.imdbID} url={item.Poster} />
        }) }
        {data===undefined&&  <span className={Style.TextEror}>
            Your search did not find anything
        </span>}

        </div>
    </main>
    </div>
  )
}

export default Movies

