import { useEffect, useState } from 'react'
import LeagueTable from './components/LeagueTable'

const useStandingsData = (tableUrl, compUrl) => {
  const [standings, setStandings] = useState([])
  const [league, setLeague] = useState('')

  useEffect(() => {
    fetch(compUrl)
      .then(response => response.json())
      .then(data => {
        setLeague(data)
      })
  }, [compUrl])

  useEffect(() => {
    fetch(tableUrl)
      .then(response => response.json())
      .then(data => {
        setStandings(data[0].table)
      })
  }, [tableUrl])

  return { standings, league }
}

const TABLE_URL = 'http://localhost:3000/standings'
const COMP_URL = 'http://localhost:3000/competition'

const App = () => {
  const { standings, league } = useStandingsData(TABLE_URL, COMP_URL)
  return (
    <div>
      <LeagueTable standings={standings} league={league} />
    </div>
  )
}

export default App
