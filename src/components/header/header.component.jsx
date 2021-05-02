import React from 'react';
import './header.styles.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='left'>
        <p className='company-name'>Sublime</p>
      </div>
      <div className='center'>
        <div className='links'>
          <div className='link active'>Dashboard</div>
          <div className='link'>Borrow</div>
          <div className='link'>Lend</div>
          <div className='link'>Your Profile</div>
        </div>
      </div>
      <div className='right' />
    </div>
  );
};

export default Header;
