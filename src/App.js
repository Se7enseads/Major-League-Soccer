import { useEffect, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import LeagueTable from './components/LeagueTable'
import Home from './components/Home'
import Leagues from './components/Leagues'
import NavBar from './components/NavBar'

const App = () => {
  const [standings, setStandings] = useState([])
  const [selectedLeagueId, setSelectedLeagueId] = useState(1)

  useEffect(() => {
    fetch(`http://localhost:3000/leagues/${selectedLeagueId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(data => {
        setStandings(data)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }, [selectedLeagueId])

  const handleLeagueClick = leagueId => {
    setSelectedLeagueId(leagueId)
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/leagues'
          element={
            <Leagues
              leagues={standings}
              handleLeagueClick={handleLeagueClick}
            />
          }
        />
        <Route path='/table' element={<LeagueTable standings={standings} />} />
        <Route path='/leagues/*' element={<Navigate to='/leagues' />} />
      </Routes>
    </div>
  )
}

export default App
