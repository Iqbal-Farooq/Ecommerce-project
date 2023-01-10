
import { useCallback, useEffect, useState } from "react";
import {Button,Col} from "react-bootstrap"

const Appp=()=>{
     const [state,SetState]=useState([])
     const[loader,SetLoader]=useState(false);
     const[error,SetError]=useState(false);
    
   

     

   const  FetchMovieHandler=useCallback(async()=>{
    SetLoader(true);
    SetError(null);
    
   
    try{
      
         let response=await fetch('https://swapi.dev/api/films/');

             if(!response.ok){
                 
            throw new Error("SOMETHING WENT WRONG Retrying...");
        }

  const data=await response.json();
     
            const movies=data.results.map((movieData)=>{return {
                id:movieData.episode_id,
                title:movieData.title,
                openingtext:movieData.opening_crawl,
                releaseDate:movieData.release_date,

            }
           
        });
         SetState(movies);
      
    }catch(error){
        SetError(error.message);

    }
       SetLoader(false)
  },[])

    useEffect(() => {
        FetchMovieHandler();
	
	},[FetchMovieHandler]);
   
 

    return(<>

    <header><Button variant="success" onClick={FetchMovieHandler}>fetch movies</Button></header>

     <main>  <li><span>movieId </span> <span> MovieTitle </span> <span> MovieReleaseDate </span></li>

     {loader && <> <p style={{color:"Green"}}>Please Wait....⏳⏳⏳⏳</p>,<button onClick={()=>console.log("clicked")}>cancel</button></> }
     
     {!loader && state.map((movie)=>{return <ul> <li key={movie.id}>{movie.id} {movie.title} {movie.releaseDate}</li> </ul>})}</main>
            {!loader && error &&<>  <p>{error}</p> </>}


    </>)

}
export default Appp;

