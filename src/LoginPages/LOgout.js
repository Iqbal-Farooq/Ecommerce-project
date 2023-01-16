import { LoginContext } from "./LoginContext"
import { useContext } from "react"
import { useHistory } from "react-router-dom"

import { Container,Card,Button, CardImg } from "react-bootstrap"

const Logout=()=>{
    const ctx=useContext(LoginContext)
    const  history=useHistory();

    const remove=()=>{
        ctx.logout();
        history.replace('/Home/home.js')




    }
    return( <><Container style={{textAlign:"center", margin:"20px 100px 100px 200px"}} >
   
    
    <Card.Body>
    <Card.Text className="m-4"><h1 style={{color:"Red"}} > Log-Out </h1></Card.Text>
    <p>Click Below</p>
   <Card.Text> ⬇️  </Card.Text> 

        
       <Button  className="p-4" variant="danger" onClick={remove}>
        <img style={{width:'50%',hight:"50%"}} src={'https://tse3.mm.bing.net/th?id=OIP.sLdHTA4vmwDi95soIiMfeQHaHa&pid=Api&P=0'} ></img>
       
</Button>
       </Card.Body>
     

        </Container>
    </>) 
}
export default Logout;