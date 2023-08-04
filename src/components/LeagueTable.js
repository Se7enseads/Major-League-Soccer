import React from 'react'
import NavBar from './NavBar'
import Error from './Error'

// Styles for different results
const styles = {
  L: { color: 'red', marginRight: '15px' },
  D: { color: 'grey', marginRight: '15px' },
  W: { color: 'green', marginRight: '15px' }
}

// Function to get the appropriate style based on result
function getStyle (result) {
  return styles[result] || {}
}

// LeagueTable component
const LeagueTable = ({ standings }) => {
  // Conditional check for undefined standings or standings.table
  if (!standings || !standings.table) {
    return <Error />
  }

  return (
    <div className='pt-2'>
      <NavBar />
      <div className='table-responsive my-3 '>
        <div className='d-flex align-items-center justify-content-center flex-column'>
          <img
            src={standings.emblem}
            alt='League Logo'
            height={'100px'}
            width={'100px'}
          />
          <h1 className='text-center mx-auto'>{standings.name} Table</h1>
        </div>
        <table className='table table-hover mx-auto w-auto align-middle shadow'>
          <thead className='table-dark '>
            <tr>
              <th scope='col'>Pos</th>
              <th className='col-4' scope='col'>
                Team
              </th>
              <th scope='col'>Played</th>
              <th scope='col'>Won</th>
              <th scope='col'>Draw</th>
              <th scope='col'>Lost</th>
              <th scope='col'>Points</th>
              <th className='text-center' scope='col'>
                Form
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Map over standings.table and render each row */}
            {standings.table.map(standing => (
              <tr
                key={standing.position}
                className={
                  standing.position <= 3
                    ? 'table-success'
                    : standing.position >= standings.table.length - 2
                    ? 'table-danger'
                    : null
                }
              >
                <th scope='row' className='px-2'>
                  {standing.position}
                </th>
                <td className='p-2 align-middle'>
                  <img
                    src={standing.team.crest}
                    alt='Team Crest'
                    height={'30px'}
                    width={'30px'}
                    style={{ marginRight: '10px' }}
                  />
                  <a
                    className='link-offset-2 link-offset-3-hover link-underline  link-underline-opacity-0 link-underline-opacity-75-hover text-dark'
                    href={standing.team.website} // Replace with the actual team's website URL
                    target='_blank'
                    rel='noreferrer' // Open the link in a new tab
                  >
                    {standing.team.shortName}
                  </a>{' '}
                  {standing.position === 1 ? '🏆' : null}
                </td>
                <td className='px-2'>{standing.playedGames}</td>
                <td className='px-2'>{standing.won}</td>
                <td className='px-2'>{standing.draw}</td>
                <td className='px-2'>{standing.lost}</td>
                <td className='px-2'>
                  <strong>{standing.points}</strong>
                </td>
                <td className='px-2 text-center'>
                  {/* Map over form results and apply styles */}
                  {standing.form.split(',').map((result, index) => (
                    <span key={index} style={getStyle(result)}>
                      {result}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LeagueTable
