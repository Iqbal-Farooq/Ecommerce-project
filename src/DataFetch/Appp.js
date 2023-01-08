
import { useState } from "react";

const Appp=()=>{
     const [state,SetState]=useState([])
     const[loader,SetLoader]=useState(false);

   async function FetchMovieHandler(){
    SetLoader(true);
       
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
         SetLoader(false)
    }

    return(<>

    <header><button onClick={FetchMovieHandler}>fetch movies</button></header>

     <main>  <li><span>movieId </span> <span> MovieTitle </span> <span> MovieReleaseDate </span></li>

     {loader && <p style={{color:"Green"}}>Loadingn ⏳⏳⏳⏳</p>}
     {!loader && state.map((movie)=>{return <ul> <li>{movie.id} {movie.title} {movie.releaseDate}</li> </ul>})}</main>



    </>)

}
export default Appp;
