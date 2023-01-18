
import {Col,Row,Button,Container} from 'react-bootstrap'
const HomeComp=()=>{
    const items=[{date:"2-jun-2023",name:"Ishfaq-Kawa",location:"Iqbal-Park srx"},{date:"3-feb-2023",name:"Waqar-Khan",location:"Gulmarg"},
{date:"10-jan-2023",name:"Mahi-Aamir",location:"Bangus-valley"},{date:"17-mar-2023",name:"Uzma-Shafi",location:"Pahelgam"}]

    return (<>
    {
        items.map((item)=>{return<Container > <Row   className="p-4"   ><Col key={Math.random(2)}>{item.date}</Col> <Col>{item.name}</Col> <Col>{item.location}</Col>
        <Col><Button size="sm" variant='success'>Book Ticket</Button></Col></Row> </Container>})
    }

    </>)
}
export default HomeComp;