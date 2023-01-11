import { useState } from 'react'
import {Col,Container,Form,Button,Card,Row} from 'react-bootstrap'
const Contact=()=>{
    const[name,Setname]=useState();
    const[email,Setemail]=useState();
    const[phone,Setphone]=useState();

   const updateName=(e)=>{
    Setname(e.target.value);
   }
   const updatePhone=(e)=>{
    Setphone(e.target.value);

   }
   const updateEmail=(e)=>{
    Setemail(e.target.value);
   }

   async function submit(e){
    e.preventDefault();
    const obj={Name:name,Email:email,Phone:phone}
    console.log(obj);
    const response=await fetch('https://demo1-5f743-default-rtdb.firebaseio.com/User.json',{
        method:"POST",
          body:JSON.stringify(obj),
    });

    const data= await response.json();

    console.log(data)
}



    return (   <Container className="mt-3" >
        <Row>
            <Col md={9}>
                <Card>
                    <Card.Header className="p-3" style={{backgroundColor:"darkGrey",textAlign:"center",color:"DarkGreen"}}>
                    <h4 >Contact Us</h4>
                    </Card.Header>

                    <Card.Body className="p-5" style={{backgroundColor:"#f7f5f0"}}>
                    <Form>
                        <Form.Group className="mb-4" >
                            <Form.Control size="lg" type="text" placeholder="name" name="name" onChange={updateName} ></Form.Control>
                        </Form.Group>
                         <Form.Group className="mb-4">
                            <Form.Control size="lg" type="email" placeholder="email" name="email" onChange={updateEmail}></Form.Control>
                        </Form.Group>
                         <Form.Group className="mb-4">
                            <Form.Control size="lg" type="tel" placeholder="phone-number" name="Phone" onChange={updatePhone}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-1">
                        <Container  style={{textAlign:"center"}}> 
                         <Button size='lg' variant="success"  type="submit" onClick={submit}>Submit</Button>
                          </Container>
                       
                        </Form.Group>
                    </Form></Card.Body>
                </Card>
            </Col>

        </Row>
    </Container>)

}
export default  Contact;