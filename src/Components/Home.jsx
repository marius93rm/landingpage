import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Table from 'react-bootstrap/Table';

function Home() {
  return (
    <Container>
      <Row>
        <Col className="text-center mx-auto">
          <Card style={{ width: '18rem' }}>
            <Card.Header className="py-3">Free</Card.Header>
            <Card.Body>
              <Card.Title>
                <p className='fs-1'>$0 <span className="text-muted fs-3 fw-light">/mo </span></p>
              </Card.Title>
              <Card.Text>
                <ul className="list-unstyled">
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
              </Card.Text>
              <div className="d-grid gap-2">
                <Button variant="outline-primary" size="lg">Sign up for free</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>


        <Col className="text-center mx-auto">
          <Card style={{ width: '18rem' }}>
            <Card.Header className="py-3">Pro</Card.Header>
            <Card.Body>
              <Card.Title>
                <p className='fs-1'>$15 <span className="text-muted fs-3 fw-light">/mo </span></p>
              </Card.Title>
              <Card.Text>
                <ul className="list-unstyled">
                  <li> 20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
              </Card.Text>
              <div className="d-grid gap-2">
                <Button variant="primary" size="lg">Get started</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="text-center mx-auto">
          <Card className="border border-primary" style={{ width: '18rem' }}>
            <Card.Header className="bg-primary text-white py-3">Enterprise</Card.Header>
            <Card.Body>
              <Card.Title>
                <p className='fs-1'>$29 <span className="text-muted fs-3 fw-light">/mo </span></p>
              </Card.Title>
              <Card.Text>
                <ul className="list-unstyled">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
              </Card.Text>
              <div className="d-grid gap-2">
                <Button variant="outline-primary" size="lg">Contact us</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="text-center mx-auto my-4">
        <h2 className='fw-light'>Compare plans</h2>
      </Row>
      <Row>
        <Table hover>
          <thead className="text-center">
            <tr>
              <th> </th>
              <th>Free</th>
              <th>Pro</th>
              <th>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Public</td>
              <td className="text-center"><span role="img" aria-label="yes">✅</span></td>
              <td className="text-center"><span role="img" aria-label="yes">✅</span></td>
              <td className="text-center"><span role="img" aria-label="yes">✅</span></td>
            </tr>
            <tr>
              <td>Private</td>
              <td> </td>
              <td className="text-center"><span role="img" aria-label="yes">✅</span></td>
              <td className="text-center"><span role="img" aria-label="yes">✅</span></td>
            </tr>
            <tr>
              <td>Permissions</td>
              <td className="text-center"><span role="img" aria-label="yes">✅</span></td>
              <td className="text-center"><span role="img" aria-label="yes">✅</span></td>
              <td className="text-center"><span role="img" aria-label="yes">✅</span></td>
            </tr>
            <tr>
              <td>Sharing</td>
              <td> </td>
              <td className="text-center"><span role="img" aria-label="yes">✅</span></td>
              <td className="text-center"><span role="img" aria-label="yes">✅</span></td>
            </tr>
            <tr>
              <td>Unlimited members</td>
              <td> </td>
              <td className="text-center"><span role="img" aria-label="yes">✅</span></td>
              <td className="text-center"><span role="img" aria-label="yes">✅</span></td>
            </tr>
            <tr>
              <td>Extra secutiry</td>
              <td> </td>
              <td> </td>
              <td className="text-center"><span role="img" aria-label="yes">✅</span></td>
            </tr>

          </tbody>
        </Table>
      </Row>

    </Container>
  );
}

export default Home;