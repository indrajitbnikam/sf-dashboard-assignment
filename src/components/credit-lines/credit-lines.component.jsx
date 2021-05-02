import React from 'react';
import './credit-lines.styles.scss'

const CreditLines = () => {
  return (
    <div className='credit-lines-container'>
      <h2 className='section-title'>Credit Lines</h2>
      <div className='cl-cards-grid'>
        <div className='cl-card first'>
          <span className='primary-text'>$0</span>
          <span className='secondary-text'>Credit Granted</span>
        </div>
        <div className='cl-card second'>
          <span className='primary-text'>$0</span>
          <span className='secondary-text'>Active Credit</span>
        </div>
        <div className='cl-card third'>
          <span className='primary-text'>0</span>
          <span className='secondary-text'>Interest Accured</span>
        </div>
        <div className='cl-card fourth'>
          <span className='primary-text'>6%</span>
          <span className='secondary-text'>Interest Rate</span>
        </div>
        <div className='cl-card fifth clickable'>
          <span className='view-more-text'>View More</span>
        </div>
      </div>
    </div>
  )
}

export default CreditLines
