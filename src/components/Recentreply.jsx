import React from 'react'
import './Recentreply.css'
import Img1 from '../assets/download (1).jpeg'
import Img2 from '../assets/download.jpeg';
import Img5 from '../assets/image(1).png';
import Img4 from '../assets/OIP (6).jpeg';

export const Recentreply = () => {
  return (
    <div className='recent-reply'>
        <h2>RECENT REPLIES</h2>
        <table className='rr'>
        <tr>
          <td><img src={Img1}></img></td>
          <td> <b>Alex Cook</b> on<br/>
                Armstrong number code<br/>
                2 days ago</td>
        </tr>
        <tr>
          <td><img src={Img5}></img></td>
          <td> <b>Ross Morlow</b> on<br/>
                String Reversal<br/>
                3 days ago</td>
        </tr>
        <tr>
          <td><img src={Img4}></img></td>
          <td> <b>Ross Taylor</b> on<br/>
                Find the Duplicate Number<br/>
                7 days ago</td>
        </tr>

        <tr>
          <td><img src={Img2}></img></td>
          <td> <b>Adrien Luna</b> on<br/>
                Harshad number code<br/>
                4 days ago</td>
        </tr>
        </table>
    </div>
  )
}


