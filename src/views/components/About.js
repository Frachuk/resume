/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Component } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

export class About extends Component {
  render() {
    const { address, name, profilePicture, bio, phone, email } = this.props.data || {};
    const { city, state } = address || {};

    const profilePictureUrl = `${process.env.PUBLIC_URL}${profilePicture}`;

    return (
      <div className='about p-5'>
        <Container fluid='md' id='about'>
          <Row className='align-items-center'>
            <Col md='2'>
              <Image fluid roundedCircle width={200} height={200} src={profilePictureUrl} alt='Franco Mischuk Profile Pic'></Image>
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
  }
}
