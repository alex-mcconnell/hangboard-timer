import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper grey darken-3">
        <div className="container">
          <a href="/" className="brand-logo">Hangboard</a>
          <ul className="right">
            <li><a className="modal-trigger" href="#settings"><i className="material-icons">settings</i></a></li>
          </ul>
        </div>
      </div>
    </nav>       
  )
}

export default Navbar;