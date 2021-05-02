import React from 'react';
import './my-pools.styles.scss';
import { ReactComponent as SearchLogo } from '../../assets/images/Search.svg';
import { ReactComponent as UserAvatarLogo } from '../../assets/images/Avatar.svg';
import { ReactComponent as TickLogo } from '../../assets/images/Tick.svg';

const MyPools = () => {
  return (
    <div className='mp-container'>
      <h2 className='section-title'>My Pools</h2>
      <div className='mp-toolbar'>
        <div className='left'>
          <div className='links'>
            <div className='link active'>All Pools</div>
            <div className='link'>Borrow</div>
            <div className='link'>Lend</div>
          </div>
        </div>
        <div className='right'>
          <div className='search'>
            <SearchLogo />
            <span>Search</span>
          </div>
          <div className='filter'>
            <select>
              <option>Filter by</option>
            </select>
          </div>
        </div>
      </div>
      <div className='mp-cards-grid'>
        <div className='mp-card'>
          <div className='profile'>
            <div className='image'>
              <UserAvatarLogo />
            </div>
            <div className='info'>
              <span className='name'>
                stani.eth <TickLogo />
              </span>
              <span className='username'>
                @StaniKulechov
              </span>
              <div className='tags'>
                <div className='tag basic'>Open pool</div>
                <div className='tag orange'>Grace Period</div>
              </div>
            </div>
          </div>
          <div className='list'>
            <div className='list-item'>
              <span className='name'>Borrow Rate</span>
              <span className='value'>11%</span>
            </div>
            <div className='list-item'>
              <span className='name'>Borrowed Amount</span>
              <span className='value'>1,000 DOT</span>
            </div>
            <div className='list-item'>
              <span className='name'>Next Payment</span>
              <span className='value'>200 DOT</span>
            </div>
            <div className='list-item'>
              <span className='name'>Repayment progress</span>
              <span className='value'>45%</span>
            </div>
          </div>
          <div className='cta'>
            Repay
          </div>
        </div>
        <div className='mp-card'>
          <div className='profile'>
            <div className='image'>
              <UserAvatarLogo />
            </div>
            <div className='info'>
              <span className='name'>
                stani.eth <TickLogo />
              </span>
              <span className='username'>
                @StaniKulechov
              </span>
              <div className='tags'>
                <div className='tag basic'>Open Borrow</div>
                <div className='tag yellow'>Collecting</div>
              </div>
            </div>
          </div>
          <div className='list'>
            <div className='list-item'>
              <span className='name'>Borrow Rate</span>
              <span className='value'>10%</span>
            </div>
            <div className='list-item'>
              <span className='name'>Borrowed Amount</span>
              <span className='value'>1,000 DOT</span>
            </div>
            <div className='list-item'>
              <span className='name'>Collection Progress</span>
              <span className='value'>45%</span>
            </div>
            <div className='list-item'>
              <span className='name'>End in</span>
              <span className='value'>2d 12h 34m</span>
            </div>
          </div>
          <div className='cta'>
            Add Collateral
          </div>
        </div>
        <div className='mp-card'>
          <div className='profile'>
            <div className='image'>
              <UserAvatarLogo />
            </div>
            <div className='info'>
              <span className='name'>
                stani.eth <TickLogo />
              </span>
              <span className='username'>
                @StaniKulechov
              </span>
              <div className='tags'>
                <div className='tag basic'>Open Borrow</div>
                <div className='tag secondary'>Closed</div>
              </div>
            </div>
          </div>
          <div className='list'>
            <div className='list-item'>
              <span className='name'>Borrow Rate</span>
              <span className='value'>11%</span>
            </div>
            <div className='list-item'>
              <span className='name'>Borrowed Amount</span>
              <span className='value'>1,000 DOT</span>
            </div>
            <div className='list-item'>
              <span className='name'>Next Payment</span>
              <span className='value'>200 DOT</span>
            </div>
            <div className='list-item'>
              <span className='name'>Repayment progress</span>
              <span className='value'>45%</span>
            </div>
          </div>
          <div className='cta'>
            View More
          </div>
        </div>
        <div className='mp-card'>
          <div className='profile'>
            <div className='image'>
              <UserAvatarLogo />
            </div>
            <div className='info'>
              <span className='name'>
                stani.eth <TickLogo />
              </span>
              <span className='username'>
                @StaniKulechov
              </span>
              <div className='tags'>
                <div className='tag basic'>Open Borrow</div>
                <div className='tag secondary'>Closed</div>
              </div>
            </div>
          </div>
          <div className='list'>
            <div className='list-item'>
              <span className='name'>Borrow Rate</span>
              <span className='value'>11%</span>
            </div>
            <div className='list-item'>
              <span className='name'>Borrowed Amount</span>
              <span className='value'>1,000 DOT</span>
            </div>
            <div className='list-item'>
              <span className='name'>Next Payment</span>
              <span className='value'>200 DOT</span>
            </div>
            <div className='list-item'>
              <span className='name'>Repayment progress</span>
              <span className='value'>45%</span>
            </div>
          </div>
          <div className='cta'>
            View More
          </div>
        </div>
        <div className='mp-card'>
          <div className='profile'>
            <div className='image'>
              <UserAvatarLogo />
            </div>
            <div className='info'>
              <span className='name'>
                stani.eth <TickLogo />
              </span>
              <span className='username'>
                @StaniKulechov
              </span>
              <div className='tags'>
                <div className='tag basic'>Open Borrow</div>
                <div className='tag secondary'>Closed</div>
              </div>
            </div>
          </div>
          <div className='list'>
            <div className='list-item'>
              <span className='name'>Borrow Rate</span>
              <span className='value'>11%</span>
            </div>
            <div className='list-item'>
              <span className='name'>Borrowed Amount</span>
              <span className='value'>1,000 DOT</span>
            </div>
            <div className='list-item'>
              <span className='name'>Next Payment</span>
              <span className='value'>200 DOT</span>
            </div>
            <div className='list-item'>
              <span className='name'>Repayment progress</span>
              <span className='value'>45%</span>
            </div>
          </div>
          <div className='cta'>
            View More
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPools;
