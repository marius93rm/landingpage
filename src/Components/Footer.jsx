import BootstrapFill from 'react-bootstrap-icons/dist/icons/bootstrap-fill';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer>
      <Container className="mx-auto my-2 fw-light">
        <Row>
          <Col>
            <BootstrapFill className="m-2" />
            <p className="fw-lighter fs-6">&copy; 2017-2022</p>
          </Col>

          <Col>
            <h5>Features</h5>
            <ul className="list-unstyled">
              <li>Cool stuff</li>
              <li>Random feature</li>
              <li>Team feature</li>
              <li>Stuff for developers</li>
              <li>Another one</li>
              <li>Last time</li>
            </ul>
          </Col>
          <Col>
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li>Resource</li>
              <li>Resource name</li>
              <li>Another resource</li>
              <li>Final resource</li>
            </ul>
          </Col>
          <Col>
            <h5>About</h5>
            <ul className="list-unstyled">
              <li>Team</li>
              <li>Locations</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </Col>

        </Row>
      </Container>
    </footer>
  );
}

export default Footer;