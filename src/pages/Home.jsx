import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DataTable } from '../components/dataTable';
import { Recentreply } from '../components/Recentreply';
import Img1 from '../assets/download (1).jpeg'
import Img2 from '../assets/download.jpeg';
import Img5 from '../assets/image(1).png';
import Img4 from '../assets/OIP (6).jpeg';
// import Img6 from './assets/Bannari_Amman_logo.jpeg';

const Home = () => {
  return (
    <div className='bodyy'>
    <Header/>
    {/* <Headerbody/> */}
    <div className='content-body'>
      <DataTable/>
      <Recentreply/>
    </div>
    <Footer/>
    </div>
  )
}

export default Home
