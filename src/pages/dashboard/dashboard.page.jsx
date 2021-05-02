import React from 'react';
import CreditLines from '../../components/credit-lines/credit-lines.component';
import DSOverview from '../../components/ds-overview/ds-overview.component';
import ImpNotifications from '../../components/imp-notifications/imp-notifications.component';
import MyPools from '../../components/my-pools/my-pools.component';
import Overview from '../../components/overview/overview.component';
import './dashboard.styles.scss';

const DashboardPage = () => {
  return (
    <div className='dashboard'>
      <div className='primary-view'>
        <div className='primary-view-subcontainer'>
          <Overview />
          <DSOverview />
          <CreditLines />
          <MyPools />
        </div>
      </div>
      <div className='secondary-view'>
        <div className='secondary-view-subcontainer'>
          <ImpNotifications />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
