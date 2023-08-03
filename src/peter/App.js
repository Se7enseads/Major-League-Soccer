import React from 'react'
import LeaguesType from './CollectionOfLeagues'

const backgroundImageUrl =
  "url('https://images.pexels.com/photos/11849230/pexels-photo-11849230.jpeg?auto=compress&cs=tinysrgb&w=1600')"

const containerStyle = {
  height: '100vh',
  backgroundImage: backgroundImageUrl,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}

export const App = () => {
  return (
    <div style={containerStyle} className='container-fluid'>
      <LeaguesType />
    </div>
  )
}

export default App
