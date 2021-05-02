import React from 'react';
import './overview.styles.scss';

const Overview = () => {
  return (
    <div className='overview-container'>
      <h2 className='section-title'>Overview</h2>
      <div className='overview-cards-grid'>
        <div className='overview-card'>
          <span className='primary-text'>$16,034</span>
          <span className='secondary-text'>Total borrowed amount</span>
        </div>
        <div className='overview-card'>
          <span className='primary-text'>$160,032</span>
          <span className='secondary-text'>Total supplied amount</span>
        </div>
        <div className='overview-card'>
          <span className='primary-text'>32%</span>
          <span className='secondary-text'>Total borrow rate</span>
        </div>
        <div className='overview-card'>
          <span className='primary-text'>15%</span>
          <span className='secondary-text'>Total lending rate</span>
        </div>
      </div>
    </div>
  )
}

export default Overview
