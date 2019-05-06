import React from 'react';
import landing_img from '../img/landing_img.jpg';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="https://terencezhong.com/">
          Home Page
        </a>
      </nav>

      <img src={landing_img} alt="landing" />
    </div>
  );
};

export default NavBar;
