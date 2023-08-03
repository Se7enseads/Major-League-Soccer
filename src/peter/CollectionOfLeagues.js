import React from 'react'

const leagues = [
  { name: 'Premier League', logo: 'https://crests.football-data.org/PL.png' },
  { name: 'Bundesliga', logo: 'https://crests.football-data.org/BL1.png' },
  { name: 'LA Liga', logo: 'https://crests.football-data.org/PD.png' },
  { name: 'Serie A', logo: 'https://crests.football-data.org/SA.png' },
  { name: 'Ligue 1', logo: 'https://crests.football-data.org/FL1.png' }
]

const LeaguesType = () => {
  return (
    <div className='container-fluid'>
      <h1 className='text-center'>LEAGUES PAGE</h1>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='mx-auto'>
          {leagues.map((league, index) => (
            <div
              key={index}
              className='btn d-flex btn-primary mb-3 w-100 justify-content-between'
            >
              <img
                src={league.logo}
                alt={`${league.name} logo`}
                height={'50px'}
              />
              <h2 className='text-dark'>{league.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LeaguesType
