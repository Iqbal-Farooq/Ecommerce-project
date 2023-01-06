import {Container, Navbar} from 'react-bootstrap';

import Products from './Sharp/Products';

function App() {
  return (<>
    <Navbar bg="success" expand="lg">

     <Container>
        <Navbar.Brand href="#"> E-Commerce</Navbar.Brand>
        <Navbar.Brand href="#">🍁 </Navbar.Brand>
      </Container>

    </Navbar>
  
     <Products />
    </>
  );
}

export default App;
