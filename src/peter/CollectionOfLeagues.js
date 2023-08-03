import React from "react";

const leagues = [
  // ... (your league data)
  { name: "epl", logo: "https://static.vecteezy.com/system/resources/previews/010/994/451/original/premier-league-logo-symbol-with-name-design-england-football-european-countries-football-teams-illustration-with-purple-background-free-vector.jpg" },
  { name: "bundesliga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Bundesliga_logo_%282017%29.svg/1200px-Bundesliga_logo_%282017%29.svg.png" },
  { name: "La Liga", logo: "https://www.fifplay.com/img/public/laliga-logo.jpg" },
  { name: "Seria A", logo: "https://www.fifplay.com/img/public/serie-a-logo.jpg" },
  { name: "Europa", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/UEFA_Europa_League_%28football_competition%29_logo.svg/1200px-UEFA_Europa_League_%28football_competition%29_logo.svg.png" },
  { name: "UEFA", logo: "https://media.asroma.com/prod/images/gm_preview/eb2b41232410-keyviewsueclrb8zmf.jpg" },
  { name: "MLS", logo: "https://cdn.freebiesupply.com/images/large/2x/mls-logo-black-and-white.png" },
  { name: "UCL", logo: "https://1.bp.blogspot.com/-aqbEPSi6fBs/YQlhDOFZRYI/AAAAAAADKdo/C7YepMYAQcMzC2vwW-r8i5n2mLIQosXWACNcBGAsYHQ/s1000/uefa-champions.league-21-22-logo%2B%25282%2529.jpg" },
  
];

const backgroundImageUrl = "url('https://images.pexels.com/photos/11849230/pexels-photo-11849230.jpeg?auto=compress&cs=tinysrgb&w=1600')";  

const LeaguesType = ({ table }) => {
  const containerStyle = {
    height: '100vh',
    backgroundImage: backgroundImageUrl,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red', // Set the background color to red
  };

  const titleStyle = {
    fontSize: '3rem', // Increase the font size to be bigger
    fontWeight: 'bold', // Set the font weight to bold
    textAlign: 'center', // Center the text horizontally
    color: 'white', // Set the text color to white for better visibility on a red background
  };

  const logoStyle = {
    width: '50px',
    height: '50px',
  };

  return (
    <div style={containerStyle}>
      <div className="container">
        <div className="col">
          <h1 className="display-4" style={titleStyle}>LEAGUES PAGE</h1> {/* Apply the updated titleStyle */}
          <div className="btn-group-vertical">
            {leagues.map((league, index) => (
              <button key={index} className="btn btn-block btn-primary">
                <img src={league.logo} alt={`${league.name} logo`} className="mr-2" style={logoStyle} />
                {league.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaguesType;
