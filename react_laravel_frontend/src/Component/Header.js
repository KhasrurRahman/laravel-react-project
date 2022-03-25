import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const history = useNavigate()
    let user = JSON.parse(localStorage.getItem('user-info'))

    function logout() {
        localStorage.clear();
        history('/register')
    }


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to="/">Home</Link>
                <Nav className="me-auto nav_bar_wrapper">
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Link to="/add">Add product</Link>
                                <Link to="/update">Update product</Link>
                            </>
                            :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </>
                    }
                </Nav>

                {user ?
                    <Nav>
                        <NavDropdown title={user && user.name}>
                            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    : null}

            </Container>
        </Navbar>
    )
}

export default Header;