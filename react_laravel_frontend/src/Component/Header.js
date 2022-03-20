import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to="/">Home</Link>
                <Nav className="me-auto nav_bar_wrapper">
                    <Link to="/add">Add product</Link>
                    <Link to="/update">Update product</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;