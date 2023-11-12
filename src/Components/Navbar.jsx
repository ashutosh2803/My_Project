import React from 'react'
import "../css/Navbar.css"
import Video from '../assets/bannerV3.mp4'
import CostaCoffeeLogo from "../assets/Costa_Coffee_logo.png"

const Navbar = () => {
  return (
    <>
      <header>
        <div className="header">
          <nav className="navigation">
            <a href="#!" className="navbar-logo"><img src={CostaCoffeeLogo} style={{width: "20%"}} alt='costa_logo' /></a>
            <div className="navbar-right">
              <a href="#!">Our Story</a>
              <a href="#!">Our Menu</a>
              <a href="#!">Costa Club</a>
              <a href="#!">Order Online</a>
              <a href="#!">Behind the Beans</a>
              <a href="#!">Store Locator</a>
              <a href="#!">What's New!</a>
            </div>
          </nav>

          <div className="video-container">
            <video autoPlay loop muted id="video-bg">

            <source src={Video} type="video/mp4"/>

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