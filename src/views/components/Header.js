import { Container, Nav, Navbar } from 'react-bootstrap';

export const Header = () => (
  <div className='header'>
    <Navbar bg='dark' variant='dark' fixed='top'>
      <Container className='justify-content-center'>
        <Nav className='justify-content-end'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#about'>About</Nav.Link>
          <Nav.Link href='#resume'>Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </div>
);
