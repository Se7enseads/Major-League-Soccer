import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

const leagues = [
  {
    id: 1,
    name: 'Premier League',
    logo: 'https://crests.football-data.org/PL.png'
  },
  {
    id: 2,
    name: 'Bundesliga',
    logo: 'https://crests.football-data.org/BL1.png'
  },
  { id: 3, name: 'Ligue 1', logo: 'https://crests.football-data.org/FL1.png' },
  { id: 4, name: 'Serie A', logo: 'https://crests.football-data.org/SA.png' },
  { id: 5, name: 'LA Liga', logo: 'https://crests.football-data.org/PD.png' }
]

const backgroundImageUrl = require('../assets/Leagues_Background.jpg')

const containerStyle = {
  height: '100vh',
  backgroundImage: `url(${backgroundImageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}

const Leagues = ({ handleLeagueClick }) => {
  const navigate = useNavigate()
  return (
    <div style={containerStyle} className='container-fluid pt-2'>
      <NavBar />
      <div className='container-fluid'>
        <h1 className='text-center'>LEAGUES PAGE (2022/23)</h1>
        <div className='d-flex justify-content-center align-items-center'>
          <div className='mx-auto col-5'>
            {leagues.map(league => (
              <button
                key={league.id}
                className='btn d-flex btn-primary mb-3 w-100 justify-content-between'
                onClick={() => {
                  handleLeagueClick(league.id)
                  navigate(`/table`)
                }}
              >
                <img
                  src={league.logo}
                  alt={`${league.name} logo`}
                  height={'50px'}
                />
                <h2 className='text-dark'>
                  {league.name}
                  {'  '}
                </h2>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leagues
