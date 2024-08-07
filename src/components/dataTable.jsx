import React,{useState} from 'react'
import {NavLink} from 'react-router-dom';
import './dataTable.css';
import Img1 from '../assets/download (1).jpeg';
import Img2 from '../assets/image(1).png';
import Img3 from '../assets/OIP.jpeg';
import Img4 from '../assets/OIP (6).jpeg';

export const DataTable = () => {
  return (
    <table className='bodytable'>
      <thead>
        <tr>
        <th>PS Skills</th>
        <th className='levpostshead'>Levels</th>
        <th className='levpostshead'>Posts</th>
        <th>Last Post</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td className='pskills'>C Programming</td>
            <td className='levposts'>5</td>
            <td className='levposts'>20</td>
            <td className='lastpost'>
              <ul className='lapost-list'>
                <li>12 days ago</li>
                <li className='lapost-author'><img src={Img3} alt='abc'/>
                    <NavLink to='/account'>Ross Morlow</NavLink></li>
              </ul>
            </td>
        </tr>
        <tr>
            <td className='pskills'>Python Programming</td>
            <td className='levposts'>4</td>
            <td className='levposts'>14</td>
            <td className='lastpost'>
              <ul className='lapost-list'>
                <li>3 days ago</li>
                <li className='lapost-author'><img src={Img1} alt='abc'/>
                    <NavLink to='/account'>Mark Znu</NavLink></li>
              </ul>
            </td>
        </tr>
        <tr>
            <td  className='pskills'>Java Programming</td>
            <td className='levposts'>3</td>
            <td className='levposts'>13</td>
            <td className='lastpost'>
              <ul className='lapost-list'>
                <li>8 days ago</li>
                <li className='lapost-author'><img src={Img4} alt='abc'/>
                    <NavLink to='/account'>Will Smith</NavLink></li>
              </ul>
            </td>
        </tr>
        <tr>
            <td  className='pskills'>UI/UX</td>
            <td className='levposts'>3</td>
            <td className='levposts'>8</td>
            <td className='lastpost'>
              <ul className='lapost-list'>
                <li>20 days ago</li>
                <li className='lapost-author'><img src={Img2} alt='abc'/>
                    <NavLink to='/account'>Will Smith</NavLink></li>
              </ul>
            </td>
        </tr>
      </tbody>
    </table>
  )
}


