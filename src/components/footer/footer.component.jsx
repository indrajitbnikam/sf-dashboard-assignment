import React from 'react';
import './footer.styles.scss';
import { ReactComponent as DiscordLogo } from '../../assets/images/Discord.svg';
import { ReactComponent as TwitterLogo } from '../../assets/images/Twitter.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-subcontainer'>
        <div className='left'>
          <span className='link'>Terms & Agreements</span>
          <span className='link'>Blog</span>
          <span className='link'>Privacy Policy</span>
          <span className='link'>FAQ</span>
          <span className='link'>© 2021 Sublime</span>
        </div>
        <div className='right'>
          <DiscordLogo />
          <TwitterLogo />
        </div>
      </div>
    </div>
  )
}

export default Footer;
