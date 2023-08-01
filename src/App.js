import { useEffect, useState } from 'react'
import LeagueTable from './components/LeagueTable'

/* const apiKey = '94003c7cd7ab4e72a18b70da54a0a891'; // Replace with your actual API key
const apiUrl = 'http://api.football-data.org/v4/competitions/PL/standings';
const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';

const headers = {
  'X-Auth-Token': apiKey,
}; */

const TABLE_URL = 'http://localhost:3000/standings'
const COMP_URL = 'http://localhost:3000/competition'

const App = () => {
  const [standings, setStandings] = useState([])
  const [league, setLeague] = useState([])

  useEffect(() => {
    fetch(COMP_URL)
      .then(response => response.json())
      .then(data => {
        setLeague(data.name)
      })
  }, [])

  useEffect(() => {
    // fetch(corsProxyUrl + apiUrl, { headers })
    fetch(TABLE_URL)
      .then(response => response.json())
      .then(data => {
        // setStandings(data.standings[0].table)
        setStandings(data[0].table)
      })
  }, [])
  return (
    <div>
      <LeagueTable standings={standings} league={league} />
    </div>
  )
}
export default App
