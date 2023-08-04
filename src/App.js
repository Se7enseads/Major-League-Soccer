import { useEffect, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import LeagueTable from './components/LeagueTable'
import Home from './components/Home'
import Leagues from './components/Leagues'

const App = () => {
  // State to store the standings data
  const [standings, setStandings] = useState([])
  // State to keep track of the selected league ID
  const [selectedLeagueId, setSelectedLeagueId] = useState(1)

  // useEffect hook to fetch data when the selected league ID changes
  useEffect(() => {
    // Fetch data from the API using the selected league ID
    fetch(
      `https://api.npoint.io/182f09016d8384795641/leagues/${selectedLeagueId -
        1}`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(data => {
        // Set the fetched data into the standings state
        setStandings(data)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }, [selectedLeagueId])

  // Function to handle league button click
  const handleLeagueClick = leagueId => {
    // Update the selected league ID
    setSelectedLeagueId(leagueId)
  }

  return (
    <div>
      {/* Define routes using React Router */}
      <Routes>
        {/* Route for the home page */}
        <Route path='/' element={<Home />} />
        {/* Route for the leagues page */}
        <Route
          path='/leagues'
          element={
            <Leagues
              leagues={standings}
              handleLeagueClick={handleLeagueClick}
            />
          }
        />
        {/* Route for the league table */}
        <Route path='/table' element={<LeagueTable standings={standings} />} />
        {/* Catch-all route for invalid league paths */}
        <Route path='/leagues/*' element={<Navigate to='/leagues' />} />
      </Routes>
    </div>
  )
}

export default App
