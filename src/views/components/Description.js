import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';

export const Description = ({ data }) => {
  const { address: { city } = {}, description, name, occupation, social = [] } = data || {};

  const networks = social.map(({ faIcon, faPrefix, name, url }) => (
    <li key={name}>
      <a href={url}>
        <FontAwesomeIcon icon={[faPrefix, faIcon]} />
      </a>
    </li>
  ));

  return (
    <div className='description' id='home'>
      <Container fluid='md'>
        <Row>
          <Col md={{ offset: 2, span: 8 }}>
            <h1>I&apos;m {name}.</h1>
            <h3>
              I&apos;m a <span>{occupation}</span> based in <span>{city}</span>. {description}
            </h3>
            <ul className='social'>{networks}</ul>
          </Col>
        </Row>
        <Row className='row row-bottom'>
          <Col className='col-auto'>
            <ul className='social'>
              <li>
                <a href='#about'>
                  <FontAwesomeIcon icon={faArrowCircleDown} size='2x' />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
