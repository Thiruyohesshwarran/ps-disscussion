import React from 'react'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Recentreply } from '../components/Recentreply';

const Account = () => {
  return (
    <div className='bodyy'>
      <Header/>
      <div className='content-body'>
        <div className='account'>
            <div className='name'>
            <h1>Ross Morlow</h1>
            </div>
            <div className='otherthaname'>
                <div className='imgprof'>h</div>
                <div className='accdetails'>o</div>
            </div>
        </div>
        <Recentreply/>
      </div>
      <Footer/>
    </div>
  )
}

export default Account
