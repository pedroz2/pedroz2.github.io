/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import {Link} from 'react-scroll';
import Fade from 'react-reveal/Fade';

class Hero extends Component {
  state = {};
  render() {
    const duration = 1000;
    const delay = 100;

    return (
      <React.Fragment>
        <div className='hero'>
          <div className='hero-content'>
            <Fade duration={duration}>
              <img style={{height: "200px", width: "200px", borderRadius: "50%"}} src='./../../images/pz.jpg' alt='profile'></img>
            </Fade>
            <Fade duration={duration} delay={delay}>
              <h1 className='hero-text'>
                Hi! I'm <span className='name'>Pedro Zamora</span>, a Junior at the{' '}
                <a
                  className='link-yellow'
                  href='https://cse.engin.umich.edu/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  University of Michigan
                </a>{' '}studying Computer Science and minoring in Business.{' '}
              </h1>
            </Fade>
            <Fade duration={duration} delay={delay * 2}>
              <h2 className='hero-text'>
                Check out my{' '}
                <a
                  className='link-green'
                  href='/pdfs/pedroz_resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'>
                  resume
                </a>{' '}
                and let's talk:{' '}
                <a
                  className='link-red'
                  href='mailto:pedroz@umich.edu'
                  target='_blank'
                  rel='noopener noreferrer'>
                  pedroz@umich.edu
                </a>
              </h2>
            </Fade>
            <Fade duration={duration} delay={delay * 3}>
              <div>
                  <a href='https://www.github.com/pedroz2' target='_blank' rel='noopener noreferrer' className='icons-hero icons fab fa-github fa-2x'>
                    <span style={{display: "none"}}></span>
                  </a>
                  <a href='https://www.linkedin.com/in/pedroz2' target='_blank' rel='noopener noreferrer' className='icons-hero icons fab fa-linkedin fa-2x'>
                    <span style={{display: "none"}}></span>
                  </a>
                  <a href='mailto:pedroz@umich.edu' target='_blank' rel='noopener noreferrer' className='icons-hero icons fas fa-envelope fa-2x'>
                    <span style={{display: "none"}}></span>
                  </a>
              </div>
            </Fade>
          </div>
          <Fade duration={duration} delay={delay * 4}>
            <a href='' className="icon-scroll">
              <Link
                activeClass="active-scroll"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
            >            
              <i className="icons fas fa-arrow-down fa-2x"></i>            
            </Link></a>
          </Fade>
        </div>
        
      </React.Fragment>
    );
  }
}

export default Hero;
