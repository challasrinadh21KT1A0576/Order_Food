import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from 'react-router-dom'

function Navigation() {
    return (

        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
<Nav>
                    <NavLink  eventKey="2" as={Link} to="/login">Login</NavLink>
                    <NavLink  eventKey="1" as={Link} to="/">Homepage</NavLink>
                   
                    <NavLink  eventKey="3" as={Link} to="/menu">Menu</NavLink>
                    
                
                </Nav>
            </Navbar.Collapse>   
          
        </Navbar>   
    );
}

export default Navigation