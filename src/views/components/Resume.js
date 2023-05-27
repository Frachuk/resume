/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export class Resume extends Component {
  render() {
    const { education = [], work = [], projects = [] } = this.props.data || {};
    const parsedEducation = education.map(({ school, degree, graduated, description }) => (
      <div key={school}>
        <h3>{school}</h3>
        <p className='info'>
          {degree} <span>&bull;</span>
          <em className='date'>{graduated}</em>
        </p>
        <p>{description}</p>
      </div>
    ));

    const parsedWork = work.map(({ company, title, years, description }) => (
      <div key={`${company}-${title}`}>
        <h3>{company}</h3>
        <p className='info'>
          {title}
          <span>&bull;</span> <em className='date'>{years}</em>
        </p>
        <p>{description}</p>
      </div>
    ));

    const parsedProjects = projects.map(({ partner, name, years, description, techStack }) => (
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
      </div>
    ));

    return (
      <section id='resume'>
        <div className='row tech-stack'>
          <div className='three columns header-col'>
            <Tabs defaultActiveKey='profile' id='uncontrolled-tab-example' className='mb-3'>
              <Tab eventKey='home' title='Home'>
                Tab content for Home
              </Tab>
              <Tab eventKey='profile' title='Profile'>
                Tab content for Profile
              </Tab>
              <Tab eventKey='contact' title='Contact' disabled>
                Tab content for Contact
              </Tab>
            </Tabs>
          </div>
        </div>

        <div className='row education'>
          <div className='three columns header-col'>
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className='nine columns main-col'>
            <div className='row item'>
              <div className='twelve columns'>{parsedEducation}</div>
            </div>
          </div>
        </div>

        <div className='row work'>
          <div className='three columns header-col'>
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className='nine columns main-col'>{parsedWork}</div>
        </div>

        <div className='row projects'>
          <div className='three columns header-col'>
            <h1>
              <span>Projects</span>
            </h1>
          </div>

          <div className='nine columns main-col'>{parsedProjects}</div>
        </div>
      </section>
    );
  }
}
