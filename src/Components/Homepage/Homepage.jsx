import React from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import { cities } from '../Homepage/cities';
import '../Homepage/homepage.scss';

const Homepage = ({ searchQuery }) => {

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="homepage">
      <div className="city-list">
        {filteredCities.map(city => (
          <div className="city-card" id={city.toLowerCase().replace(' ', '-')} key={city}>
            <Link to={`/city/${city.toLowerCase().replace(' ', '-')}`}>
              <button className="city-button">
                {city}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Homepage;
