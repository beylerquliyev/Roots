import React from 'react'
import Style from "../src/Style.module.css"
import { useNavigate } from 'react-router-dom'

function MoviesCard({title,year,id,url}) {
    let navigate=useNavigate()
    function NavigateMovie(){
        navigate(`/movies/${id}`)
        console.log("Ss");

    }
  return (
    
    <div>
        <div className={Style.CardDivMovies}>
                
                <img className={Style.MovieImg} src={url} alt="" />
                <div className={Style.movieButtontext}>
                    <h1 className={Style.moviesTitle}>{title}</h1>
                    <h1 className={Style.moviesTitle}>{year}</h1>

                    <button onClick={NavigateMovie} className={Style.moviesButton} >Read More</button>
                </div>
            </div>
      
    </div>
  )
}

export default MoviesCard
