import { Col, Container, Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export const Resume = ({ data }) => {
  const { education = [], projects = [], work = [] } = data || {};

  const parsedEducation = education.map(({ degree, description, graduated, school }, index) => (
    <Row key={school}>
      {!index && (
        <Col md='2' className='d-flex justify-content-center'>
          <h1>Education</h1>
        </Col>
      )}
      <Col md={{ offset: !index ? 0 : 2, span: 10 }}>
        <h3>{school}</h3>
      </Col>
      <Col md={{ offset: 2, span: 10 }}>
        <p className='info'>
          {degree} <span>&bull;</span>
          <em className='date'>{graduated}</em>
        </p>
      </Col>
      <Col md={{ offset: 2, span: 10 }}>
        <p>{description}</p>
      </Col>
    </Row>
  ));

  const parsedWork = work.map(({ company, description, title, years }, index) => (
    <Row key={`${company}-${title}`}>
      {!index && (
        <Col md='2' className='d-flex justify-content-center'>
          <h1>Work</h1>
        </Col>
      )}
      <Col md={{ offset: !index ? 0 : 2, span: 10 }}>
        <h3>{company}</h3>
      </Col>
      <Col md={{ offset: 2, span: 10 }}>
        <p className='info'>
          {title} <span>&bull;</span> <em className='date'>{years}</em>
        </p>
      </Col>
      <Col md={{ offset: 2, span: 10 }}>
        <p>{description}</p>
      </Col>
    </Row>
  ));

  const roles = [...new Set(projects.map(({ rol }) => rol))];

  const parsedTabs = roles.map(rol => (
    <Tab eventKey={rol} title={rol} key={rol}>
      {projects
        .filter(({ rol: projectRol }) => projectRol === rol)
        .map(({ description, name, partner, techStack, webPage, years }) => (
          <div key={name}>
            <h3>
              {partner} - {name}
            </h3>
            <p className='info'>
              <span>&bull;</span> <em className='date'>{years}</em>
            </p>
            <p>{description}</p>
            <em className='info'>Tech Stack</em>
            <ul>
              {techStack.map(tech => (
                <span key={`${tech}-${partner}-${name}`}> &bull; {tech} </span>
              ))}
            </ul>
            {webPage && <a href={webPage}>{webPage}</a>}
          </div>
        ))}
    </Tab>
  ));

  return (
    <div className='resume p-5' id='resume'>
      <Container fluid='md'>{parsedEducation}</Container>
      <Container fluid='md'>{parsedWork}</Container>
      <Container fluid='md'>
        <Row>
          <Col md='2' className='d-flex justify-content-center'>
            <h1 style={{ height: 'fit-content' }}>Projects</h1>
          </Col>
          <Col md='10'>
            <Tabs defaultActiveKey={roles[0]} id='uncontrolled-tab-example' className='mb-3'>
              {parsedTabs}
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
