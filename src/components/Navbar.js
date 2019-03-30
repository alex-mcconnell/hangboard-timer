import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullScreen = () => {
    const doc = window.document;
    const docEl = doc.documentElement;

    const requestFullScreen =
      docEl.requestFullscreen ||
      docEl.mozRequestFullScreen ||
      docEl.webkitRequestFullScreen ||
      docEl.msRequestFullscreen;
    const cancelFullScreen =
      doc.exitFullscreen ||
      doc.mozCancelFullScreen ||
      doc.webkitExitFullscreen ||
      doc.msExitFullscreen;

    if (
      !doc.fullscreenElement &&
      !doc.mozFullScreenElement &&
      !doc.webkitFullscreenElement &&
      !doc.msFullscreenElement
    ) {
      requestFullScreen.call(docEl);
      setIsFullscreen(true);
    } else {
      cancelFullScreen.call(doc);
      setIsFullscreen(false);
    }
  };

  return (
    <nav>
      <div className="nav-wrapper blue-grey darken-2" id="navbar">
        <div className="container">
          <a href="/" className="brand-logo blue-grey-text text-darken-4">
            {'Hangboard'}
          </a>
          <ul className="right">
            <li>
              <a className="modal-trigger" href="#settings">
                <i className="material-icons blue-grey-text text-darken-4">settings</i>
              </a>
            </li>
            <li>
              <a
                className="modal-trigger"
                onClick={() => toggleFullScreen()}
                onKeyDown={() => toggleFullScreen()}
                href={() => {}}
              >
                <i className="material-icons blue-grey-text text-darken-4">
                  {isFullscreen ? 'fullscreen_exit' : 'fullscreen'}
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
