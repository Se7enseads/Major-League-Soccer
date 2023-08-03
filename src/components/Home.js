import React from 'react';
import NavBar from './NavBar';
import backgroundImageUrl from '../assets/background.jpg'; // Import the background image

const containerStyle = {
  height: '100vh',
  backgroundImage: `url(${backgroundImageUrl})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

function Home() {
  return (
    <div className='container-fluid pt-2' style={containerStyle}>
      <NavBar />
      <div className='d-flex justify-content-center align-items-center' style={{ height: '90%' }}>
        <div className='text-center bg-light shadow rounded p-2 col-6'>
          <section>
            <h2>ABOUT</h2>
            <p>
              In this collaborative web application, we have created a dynamic and visually appealing user interface using React.js and Bootstrap. The project features a responsive navigation bar (NavBar) that allows users to easily navigate through different sections of the application. The homepage (Home) welcomes users with a stunning background image and a centered 'About' section that provides a brief description of the project. The background image adds a touch of elegance to the interface, while the NavBar ensures smooth navigation. Additionally, the Leagues section (Leagues) showcases various sports leagues with logos, offering users quick access to explore their favorite leagues. The project also includes a LeagueTable component that fetches and displays data for a specific league, such as the Premier League, providing users with up-to-date standings and information. Overall, this project demonstrates the power of teamwork, utilizing React and Bootstrap to create an engaging and interactive web application.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
