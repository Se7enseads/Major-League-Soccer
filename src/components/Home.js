import React from 'react'

const backgroundImageUrl = require('../assets/background.jpg')

const containerStyle = {
  height: '100vh',
  backgroundImage: `url(${backgroundImageUrl})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}

function Home () {
  return (
    <div className='container-fluid' style={containerStyle}>
      <div>
        <section>
          <h2>ABOUT</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            voluptates doloremque corrupti, fugit nemo excepturi!
          </p>
        </section>
      </div>
    </div>
  )
}

export default Home
