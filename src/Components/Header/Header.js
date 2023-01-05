import React from 'react';
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Container,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { Link, NavLink, withRouter } from 'react-router-dom';
import TelegramIcon from '@material-ui/icons/Telegram';
import resumeData from '../utils/resumeData';
import CustomButton from '../Button/Button';
import './Header.css';

const Header = (props) => {
  const pathName = props?.location?.pathname;
  return (
    <Navbar expand='lg' sticky='top' className='header'>
      {/* Home Link */}
      <Nav.Link as={NavLink} to='/' className={'header_navLink'}>
        <Navbar.Brand className='header_home'>
          <HomeRoundedIcon />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className='header_left'>
          {/* Resume Link */}
          <Nav.Link
            as={NavLink}
            to='/'
            className={pathName === '/' ? 'header_link_active' : 'header_link'}
          >
            Resume
          </Nav.Link>

          {/* Portfolio Link */}
          <Nav.Link
            as={NavLink}
            to='/portfolio'
            className={
              pathName === '/portfolio' ? 'header_link_active' : 'header_link'
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>
        <div className='cv_button_wrapper'>
          <a href={resumeData.cv.path} download>
            <CustomButton text='Download CV' />
          </a>
        </div>
        <div className='header_right'>
          {Object.keys(resumeData.social).map((key, index) => (
            <a href={resumeData.social[key].link} target='_blank' key={index}>
              {resumeData.social[key].icon}
            </a>
          ))}
          {/* <CustomButton text={'Hire Me'} icon={<TelegramIcon />} /> */}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default withRouter(Header);
