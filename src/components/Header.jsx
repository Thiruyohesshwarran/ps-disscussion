import React from 'react';
import './Header.css';
import { NavLink,Link } from 'react-router-dom';
import {Searchbar} from './Searchbar';


export const Header = () => {
  return (
      <div className="header">
        <div className="contentfix">
        <div className="head">
            <h2>DISCUSSION FORUM</h2>  
        </div>
        
        <nav className="navbar">
          <ul id="top-nav">
            <li><NavLink to='/home'>HOME</NavLink></li>

            <li><NavLink to='/discussion'>START DISCUSSION</NavLink></li>

            <li><NavLink to='*'>LOG OUT</NavLink></li>
          </ul>
        </nav> 
      </div>
      <hr></hr>
      <div className="headerbody">
        <div className='left-content'>
          <div className="welcomemsg">
            Welcome to the PS Discussion Forum
          </div>
          <div className='searchbar'>
          <Searchbar/>
          </div>
        </div>
        
        <div className="headcolumn">
        <tr>
            <th>Registered Users</th>
            <td>3</td>
          </tr>
          <tr>
            <th>Subjects</th>
            <td>3</td>
          </tr>
          <tr>
            <th>Levels</th>
            <td>12</td>
          </tr>
          <tr>
            <th>Replies</th>
            <td>7</td>
          </tr>
          </div>
        </div>
      </div>
  )
}


