import ErrorPage from '../assets/error404.gif'
import React from 'react'

const Error = () => {
  return (
    <div>
      <div
        className='container-fluid d-flex flex-column align-items-center justify-content-center'
        style={{ minHeight: '100vh' }}
      >
        <h1>PAGE NOT FOUND</h1>
        <img src={ErrorPage} alt='404' height={'400px'} />
      </div>
    </div>
  )
}
export default Error
