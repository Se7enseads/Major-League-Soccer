import { useEffect, useState } from 'react'
import LeagueTable from './components/LeagueTable'

const App = () => {
  // State to store the standings data.
  const [standings, setStandings] = useState([])

  // useEffect hook to fetch data when the component mounts.
  useEffect(() => {
    // Fetch data from the API.
    fetch('http://localhost:3000/leagues/1')
      .then(response => {
        // Check if the response is not okay and throw an error if necessary.
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        // Parse the response as JSON and return the result.
        return response.json()
      })
      .then(data => {
        // Set the fetched data into the standings state.
        setStandings(data)
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch or processing.
        console.error('Error:', error)
      })
  }, []) // The empty dependency array ensures this effect runs only once when the component mounts.

  // Render the component.
  return (
    <div>
      {/* Pass the standings data as a prop to the LeagueTable component. */}
      <LeagueTable standings={standings} />
    </div>
  )
}

export default App
