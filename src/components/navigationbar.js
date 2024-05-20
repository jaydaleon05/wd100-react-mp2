import{Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from "../img/Logo.png"

const NavigationBar = () => {
    return ( 
        <>
            <Navbar expand="lg" className="bg-secondary">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} width={85} height={85} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                
                    <Nav.Link>
                        <Link to="/" className='text-light'>Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/about" className='text-light'>About</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/gallery" className='text-light'>Gallery</Link>
                    </Nav.Link>

                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        
        </>
     );
}
 
export default NavigationBar;