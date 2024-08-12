import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import { type ClassValue } from 'clsx';
import TotalBalanceBox from '../../components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async() => {
  const loggedIn =  await getLoggedInUser();

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title ="Welcome"
            user={loggedIn?.name || 'Guest'}
            subtext= "Acess and manage your account and transaction efficiently."
          />

          <TotalBalanceBox
            accounts= {[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

          RECENT TRANSACTION


      </div> 

      <RightSidebar 
        user={loggedIn}
        transaction={[]}
        banks={[{ currentBalance: 123.50 }, 
          { currentBalance: 456.50 }]}
      />
    </section>
  )
}

export default Home