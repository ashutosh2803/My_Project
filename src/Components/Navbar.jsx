import React from 'react'
import "../css/Navbar.css"

const Navbar = () => {
  return (
    <>
      <header>
        <div className="header">
          <nav className="navigation">
            <a href="#!" className="navbar-logo">Logo</a>
            <div className="navbar-right">
              <a href="#!">About</a>
              <a href="#!">Blog</a>
              <a href="#!">Contact</a>
            </div>
          </nav>

          <div className="video-container">
            <video autoPlay loop muted id="video-bg">

              <source src="https://youtu.be/Q5_3O50SnfY?si=dHyedNaAhfKjymto" type="video/mp4"/>

            </video>
          </div>
        </div>
      </header>
      <div className="portfolio-section">
        <div className="tagline-left">
          <div className="tagline-left-text">Serving the waters that serve our state.</div>
          <video autoPlay muted loop className="tagline-video">
            <source src="http://www.bigcom.com/assets/2014/10/asmc_bg2.mp4" type="video/mp4"/>
          </video>
        </div>
        <div className="tagline-right">
          <div className="tagline-right-text">The future is for workers</div>
          <video autoPlay muted loop className="tagline-video">
            <source src="http://www.bigcom.com/assets/2014/08/GoBuildAlabama.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    </>
  )
}

export default Navbar