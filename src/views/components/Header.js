/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';

export class Header extends Component {
  render() {
    const { name, occupation, description, city, social = [] } = this.props?.data || {};

    const networks = social.map(({ name, url, faPrefix, faIcon }) => (
      <li key={name}>
        <a href={url}>
          <FontAwesomeIcon icon={[faPrefix, faIcon]} />
        </a>
      </li>
    ));

    return (
      <header id='home'>
        <nav id='nav-wrap'>
          <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
            Show navigation
          </a>
          <a className='mobile-btn' href='#home' title='Hide navigation'>
            Hide navigation
          </a>
          <ul id='nav' className='nav'>
            <li className='current'>
              <a className='smoothscroll' href='#home'>
                Home
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#about'>
                About
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#resume'>
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <div className='row banner'>
          <div className='banner-text'>
            <h1 className='responsive-headline'>I&apos;m {name}.</h1>
            <h3>
              I&apos;m a {city} based <span>{occupation}</span>. {description}.
            </h3>
            <hr />
            <ul className='social'>{networks}</ul>
          </div>
        </div>

        <p className='scrolldown'>
          <a className='smoothscroll' href='#about'>
            <i className='icon-down-circle'></i>
          </a>
        </p>
      </header>
    );
  }
}
