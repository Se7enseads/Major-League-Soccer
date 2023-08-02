const styles = {
  L: { color: 'red', marginRight: '15px' },
  D: { color: 'grey', marginRight: '15px' },
  W: { color: 'green', marginRight: '15px' }
}

function getStyle(result) {
  return styles[result] || {}
}

const LeagueTable = ({ standings, league }) => {
  return (
    <div className='table-responsive'>
      <div className='d-flex align-items-center justify-content-center'>
        <img src={league.emblem} alt='League Logo' height={'100px'} />
        <h1 className='text-center mx-auto'>{league.name} Table</h1>
      </div>
      <table className='table table-hover mx-auto w-auto align-middle'>
        <thead
          className='table-dark'
          style={{
            position: 'sticky',
            top: 0
          }}
        >
          <tr>
            <th scope='col'>Pos</th>
            <th className='col-4' scope='col'>
              Team
            </th>
            <th className='text-center' scope='col'>
              Played
            </th>
            <th className='text-center' scope='col'>
              Won
            </th>
            <th className='text-center' scope='col'>
              Draw
            </th>
            <th className='text-center' scope='col'>
              Lost
            </th>
            <th className='text-center' scope='col'>
              Points
            </th>
            <th className='text-center' scope='col'>
              Form
            </th>
          </tr>
        </thead>
        <tbody>
          {standings.map((standing, index) => (
            <tr
              key={index}
              className={
                standing.position <= 4
                  ? 'table-success'
                  : standing.position > 17
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
                {standing.team.shortName}{' '}
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
      {/* Legend */}
      <div className=''>
        <p>Red: Relegation.</p>
        <p>Green: Champions League.</p>
        <p>Light Green: UEFA.</p>
      </div>
    </div>
  )
}
export default LeagueTable
