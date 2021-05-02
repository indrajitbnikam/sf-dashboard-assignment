import React from 'react';
import './ds-overview.styles.scss';

const DSOverview = () => {
  return (
    <div className='ds-overview-container'>
      <h2 className='section-title'>Deposit and Save Overview</h2>
      <div className='overview-cards-grid'>
        <div className='overview-card first'>
          <span className='primary-text'>$0</span>
          <span className='secondary-text'>Deposited</span>
        </div>
        <div className='overview-card second'>
          <span className='primary-text'>$0</span>
          <span className='secondary-text'>Interest Earned</span>
        </div>
        <div className='overview-card third'>
          <span className='primary-text'>6%</span>
          <span className='secondary-text'>Interest Rate</span>
        </div>
        <div className='overview-card fourth clickable'>
          <span className='view-more-text'>View More</span>
        </div>
      </div>
    </div>
  )
}

export default DSOverview
