import { Col, Container, Image, Row } from 'react-bootstrap';

export const About = ({ data }) => {
  const { address, bio, email, name, phone, profilePicture } = data || {};
  const { city, state } = address || {};

  const profilePictureUrl = `${process.env.PUBLIC_URL}${profilePicture}`;

  return (
    <div className='about p-5'>
      <Container fluid='md' id='about'>
        <Row className='align-items-center'>
          <Col md='2'>
            <Image alt='Franco Mischuk Profile Pic' className='d-block m-auto' fluid height={200} roundedCircle src={profilePictureUrl} width={200} />
          </Col>
          <Col md='10'>
            <h2>About Me</h2>
            <p>{bio}</p>
            <h2>Contact Details</h2>
            <ul>
              <li>
                <span>{name}</span>
              </li>
              <li>
                <span>
                  {state} - {city}
                </span>
              </li>
              <li>
                <span>{phone}</span>
              </li>
              <li>
                <span>{email}</span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
