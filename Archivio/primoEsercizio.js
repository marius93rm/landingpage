import './App.css';

import { Nav, Navbar, Container, NavDropdown, Row, Col, Image, Button, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div>
      <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <main>
        <Container>
          <Row className="px-4 my-5">
            <Col sm={8}>
              <Image src="https://picsum.photos/id/220/900/400" fluid rounded />
            </Col>
            <Col sm={4}>
              <h1 className="fw-bold">Tagline</h1>
              <p className="mt-4"> Lorem ipsum </p>
              <Button variant="outline-primary">Cliccami</Button>
            </Col>
          </Row>
          <Row>
            <Card className="text-center bg-secondary text-white my-5 py-4">
              <Card.Body>This is a card</Card.Body>
            </Card>
          </Row>
          <Row>
            <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://picsum.photos/id/133/900/400" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://picsum.photos/id/134/900/400" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://picsum.photos/id/111/900/400" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </Col>
            
          </Row>
        </Container>
      </main>
      <footer className="py-5 my-5 bg-dark"> 
        <Container className='px-4'>
          <p className='text-center text-white'>Copyright 2022</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
