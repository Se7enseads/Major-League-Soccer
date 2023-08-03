import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import League from './components/League'
import Home from './components/Home'

function App () {
  return (
    <div className='container-fluid'>
      <NavBar />
      <div>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/league' Component={League} />
        </Routes>
      </div>
    </div>
  )
}

export default App
