import React,{ useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import Startdiscussion from './pages/Startdiscussion';
import NoPage from './pages/NoPage';
function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/discussion" element={<Startdiscussion/>}/>
          <Route path="*" element={<NoPage/>}/>
          <Route path="/account" element={<Account/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
