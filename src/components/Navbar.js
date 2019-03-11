import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ currentTimeType }) => {
  const navBarColor = () => {
    if (currentTimeType === 'hang') {
      return 'red darken-3';
    }
    if (currentTimeType === 'rest') {
      return 'green darken-3';
    }
    if (currentTimeType === 'break') {
      return 'blue darken-3';
    }

    return 'grey darken-3';
  };

  return (
    <nav>
      <div className={`nav-wrapper ${navBarColor()} scale-transition scale-in`} id="navbar">
        <div className="container">
          <a href="/" className="brand-logo">
            {'Hangboard'}
          </a>
          <ul className="right">
            <li>
              <a className="modal-trigger" href="#settings">
                <i className="material-icons">settings</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
