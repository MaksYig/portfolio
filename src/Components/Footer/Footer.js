import React from 'react';
import './footer.css';
import { Typography } from '@material-ui/core';
import resumeData from '../utils/resumeData';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <Typography className='footer_name'>{resumeData.name}</Typography>
      </div>
      <div className='footer_right'>
        <Typography className='footer_copyright'>
          Design and Developed by{' '}
          <a href='/' target='_blank'>
            MaksyDev
          </a>
          <br />
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
