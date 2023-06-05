import { Col, Container, Row } from 'react-bootstrap';

export const Footer = () => (
  <div className='footer pb-5'>
    <Container fluid className='section justify-content-center pt-5'>
      <Row>
        <Col>
          &copy; Mischuk Franco <span>&bull;</span> {new Date().getFullYear()}
        </Col>
      </Row>
    </Container>
  </div>
);
