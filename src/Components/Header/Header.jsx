import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Header/header.scss';
import { IoGridOutline } from 'react-icons/io5';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import logo from '../../images/city_rentals.png'

const Header = ({ setSearchQuery }) => {

  const [navbar, setNavbar] = useState('nav-links');

  const toggleNavbar = () => {
    setNavbar('nav-links activeNavbar');
  }
  const closeNavbar = () => {
    setNavbar('nav-links');
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const location = useLocation();

  const placeholderText = location.pathname.startsWith('/city') ? 'Search by pincode...' : 'Search for the city...';


  return (
    <header className="header">
      <Link to="/"><div className="logo"><img src={logo} alt="city rentals" /></div></Link>
      <div className="search-filter-container">
        <div className="search-bar">
          <input type="text" placeholder={placeholderText} onChange={handleSearchChange}  />
        </div>
      </div>
      <nav className={navbar}>
        <div className="nav-items">
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/listings">Listings</Link>
          <Link className='link' to="/about">About Us</Link>
          <Link className='link' to="/contact">Contact</Link>

          <div  onClick={closeNavbar} className="closeNavbar">
            <IoIosCloseCircleOutline className="btn" />
          </div>
        </div>
      </nav>
      <div onClick={toggleNavbar} className="toggleNavbar">
          <IoGridOutline className="btn"/>
      </div>
    </header>
  );
};

export default Header;

