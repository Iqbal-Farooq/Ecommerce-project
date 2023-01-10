
import { useCallback, useEffect, useState } from "react";
import {Button,Col,Row,Container,Card,Form} from "react-bootstrap"

const Appp=()=>{
     const [state,SetState]=useState([])
     const[loader,SetLoader]=useState(false);
     const[error,SetError]=useState(false);
     const[text,SetText]=useState();
     const[title,SetTitle]=useState();
     const [date,SetDate]=useState();
    
   

     

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

    const updateTitle=(e)=>{
        SetTitle(e.target.value);

    }
     const updateText =(e)=>{
        SetText(e.target.value);

    }

     const updateInput =(e)=>{
        SetDate(e.target.value);

    }

    const register=(e)=>{
          e.preventDefault();
        const obj={
            Title:title,
            Opening_Text:text,
            Date:date,
        }
      
        console.log(obj);
    }



   
 

    return(<>
     <Container className="mt-3">
        <Row>
            <Col md={3}>
                <Card className="mb-3">
                

                    <Card.Body className="p-2" style={{backgroundColor:"orange"}}><Form>
                        <Form.Group className="mb-1" > Title
                            <Form.Control type="text" placeholder="Title" name="text" onChange={updateTitle} ></Form.Control>
                        </Form.Group>
                         <Form.Group className="mb-1"> Opening Text
                            <Form.Control type="text" placeholder="opening text" name="opening-text" onChange={updateText}></Form.Control>
                        </Form.Group>
                         <Form.Group className="mb-1"> Release Date:
                            <Form.Control type="date" placeholder="date" name="date" onChange={updateInput}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-1">
                        <Button variant="success"  type="submit" onClick={register}>Add MOVIE</Button>
                        </Form.Group>
                    </Form></Card.Body>
                </Card>
            </Col>

        </Row>
    </Container>


    <header><Button variant="success" onClick={FetchMovieHandler}>fetch movies</Button></header>

     <main>  <li><span>movieId </span> <span> MovieTitle </span> <span> MovieReleaseDate </span></li>

     {loader && <> <p style={{color:"Green"}}>Please Wait....⏳⏳⏳⏳</p>,<button onClick={()=>console.log("clicked")}>cancel</button></> }
     
     {!loader && state.map((movie)=>{ return  <li key={movie.id}>{movie.id} {movie.title} {movie.releaseDate}</li> })}</main>
            {!loader && error &&<>  <p>{error}</p> </>}


    </>)

}
export default Appp;

