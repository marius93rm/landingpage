import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import BootstrapFill from 'react-bootstrap-icons/dist/icons/bootstrap-fill';

function Header() {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container className="border-bottom">
                    <Navbar.Brand href="#home"><BootstrapFill className="m-2" />Pricing example</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Features</Nav.Link>
                            <Nav.Link href="#link">Enterprise</Nav.Link>
                            <Nav.Link href="#link">Support</Nav.Link>
                            <Nav.Link href="#link">Pricing</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="text-center mx-auto my-2">
                <h1>Pricing</h1>
                <p>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
            </Container>
        </header>
    );
}

export default Header;