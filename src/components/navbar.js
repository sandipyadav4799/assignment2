import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from '../pages/about';
import Contact from '../pages/contact';
import Tools from '../pages/tools';
import Home from '../pages/home';
import '../styles/mystyles.css';


import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

function NavBar() {
    return (
    <BrowserRouter>
      
     <Navbar  expand="lg">
      <Container>
        <Navbar>Sandip Yadav</Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

         <div className='nav_text'>              
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/tools">Tools</Nav.Link>
                            </Nav>
         </div> 
        </Navbar.Collapse>
                     
      </Container>
      </Navbar>
      
       <Routes>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='tools' element={<Tools />} />
          <Route path = 'about' element = {<About />} />
        </Routes>
     </BrowserRouter>

  );
}
export default NavBar;