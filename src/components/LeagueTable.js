const LeagueTable = ({ standings, league }) => {
  return (
    <div className='container-fluid'>
      <h1 className='text-center'>{league} Table</h1>
      <div className='mx-auto'>
        <table className='table table-bordered table-hover'>
          <thead className='table-dark'>
            <tr>
              <th scope='col'>Position</th>
              <th scope='col'>Team</th>
              <th scope='col'>Played</th>
              <th scope='col'>Win</th>
              <th scope='col'>Draw</th>
              <th scope='col'>Lose</th>
              <th scope='col'>Points</th>
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
                  />{' '}
                  {standing.team.shortName}
                </td>
                <td className='px-2'>{standing.playedGames}</td>
                <td className='px-2'>{standing.won}</td>
                <td className='px-2'>{standing.draw}</td>
                <td className='px-2'>{standing.lost}</td>
                <td className='px-2'>{standing.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className=''>
          <p>Red:Relegation.</p>
          <p>Green: Champions League.</p>
          <p>Light Green: UEFA.</p>
        </div>
      </div>
    </div>
  )
}
export default LeagueTable
