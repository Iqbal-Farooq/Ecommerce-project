
import { useState } from "react";

const Appp=()=>{
     const [state,SetState]=useState([])

   async function FetchMovieHandler(){
       
        const response=await fetch('https://swapi.dev/api/films/');
        const data=await response.json();
     
            const movies=data.results.map((movieData)=>{return {
                id:movieData.episode_id,
                title:movieData.title,
                openingtext:movieData.opening_crawl,
                releaseDate:movieData.release_date,

            }
           
        });
         SetState(movies);
    }

    return(<>

    <header><button onClick={FetchMovieHandler}>fetch movies</button></header>

     <main>  <li><span>movieId </span> <span> MovieTitle </span> <span> MovieReleaseDate </span></li>
     {state.map((movie)=>{return <ul> <li>{movie.id} {movie.title} {movie.releaseDate}</li> </ul>})}</main>



    </>)

}
export default Appp;
