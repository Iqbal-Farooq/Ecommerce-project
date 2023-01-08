
import {Col,Row,Button,Container} from 'react-bootstrap'
const HomeComp=()=>{
    const items=[{date:"2-jun-2023",name:"Good-News",location:"Iqbal-Park srx"},{date:"3-feb-2023",name:"Bedard",location:"Gulmarg"},
{date:"10-jan-2023",name:"Julie-Julie",location:"Bangus-valley"},{date:"17-mar-2023",name:"Sitamgar ishfaq-Kawa",location:"Rajpur"}]

    return (<>
    {
        items.map((item)=>{return<Container > <Row   className="p-4"   ><Col>{item.date}</Col> <Col>{item.name}</Col> <Col>{item.location}</Col>
        <Col><Button size="sm" variant='success'>Book Ticket</Button></Col></Row> </Container>})
    }

    </>)
}
export default HomeComp;