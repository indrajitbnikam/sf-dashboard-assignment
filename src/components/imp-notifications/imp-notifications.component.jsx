import React from 'react';
import './imp-notifications.styles.scss';
import { ReactComponent as ThirdUserAvatar } from '../../assets/images/Avatar.svg';

const ImpNotifications = () => {
  return (
    <div className='notifications-container'>
      <h2 className='section-title'>
        Important
        <span className='count'>(3)</span>
      </h2>
      <div className='notification-cards-grid'>
        <div className='notification-card'>
          <div className='info'>
            <div className='image'>
              <img src='assets/images/Avatar-1.png' alt='first user' />
            </div>
            <div className='text-info'>
              <span className='action-name'>
                Vote for extension
              </span>
              <span className='username'>
                @Lorem_ipsum
              </span>
              <span className='time-to-expire'>
                Vote ends in 2 days
              </span>
            </div>
          </div>
          <div className='actions'>
            <div className='action primary'>Vote</div>
            <div className='action secondary'>Dismiss</div>
          </div>
        </div>
        <div className='notification-card'>
          <div className='info'>
            <div className='image'>
              <img src='assets/images/Avatar-2.png' alt='second user' />
            </div>
            <div className='text-info'>
              <span className='action-name'>
                Vote for extension
              </span>
              <span className='username'>
                @Lorem_ipsum
              </span>
              <span className='time-to-expire'>
                Vote ends in 2 days
              </span>
            </div>
          </div>
          <div className='actions'>
            <div className='action primary'>Vote</div>
            <div className='action secondary'>Dismiss</div>
          </div>
        </div>
        <div className='notification-card'>
          <div className='info'>
            <div className='image'>
              <ThirdUserAvatar />
            </div>
            <div className='text-info'>
              <span className='action-name'>
                Vote for extension
              </span>
              <span className='username'>
                @Lorem_ipsum
              </span>
              <span className='time-to-expire'>
                Vote ends in 2 days
              </span>
            </div>
          </div>
          <div className='actions'>
            <div className='action primary'>Vote</div>
            <div className='action secondary'>Dismiss</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImpNotifications
