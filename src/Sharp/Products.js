import {Container,Row,Card,Col,CardGroup, NavItem} from "react-bootstrap"
const Products=()=>{
    
const productsArr = [

{

title: 'Colors',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

},

{

title: 'Black and white Colors',

price: 50,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

},

{

title: 'Yellow and Black Colors',

price: 70,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

},

{

title: 'Blue Color',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

}

]

return (<>

     
     <Row   xs={2} md={2} className="mt-2" >
      {productsArr.map((item) => (
        <Col >
          <Card  className="mb-2"   style={{width:"50%", height:"100%"}}>
            
            <Card.Body>
            <Card.Title>{item.title}</Card.Title>
             
               <Card.Img variant="top" className="" src={item.imageUrl} />
              <Card.Text className="mt-2" >
              price- {item.price}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
     
    
  



</>)




}
export default Products