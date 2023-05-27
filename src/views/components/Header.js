/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, occupation, description, address: { city } = {}, social = [] } = this.props?.data || {};

    const networks = social.map(({ name, url, faPrefix, faIcon }) => (
      <li key={name}>
        <a href={url}>
          <FontAwesomeIcon icon={[faPrefix, faIcon]} />
        </a>
      </li>
    ));

    return (
      <Navbar bg='dark' variant='dark' fixed='top'>
        <Container className='justify-content-center'>
          <Nav className='justify-content-end'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#resume'>Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
