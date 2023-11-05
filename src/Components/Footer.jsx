import React from 'react';
import FacebookLogo from '../assets/facebook_logo.png';
import InstagramLogo from '../assets/instagram_logo.png';
import TwitterLogo from '../assets/twitter_logo.png';

const Footer = () => {
  return (
    <div>
      <div></div>
      <div className='d-flex flex-column flex-wrap' style={{backgroundColor: "rgb(108,31,54)", color: "white", fontWeight: "bold", letterSpacing: "0.1ch", paddingLeft: "5.2%"}}>
        <div style={{margin: "3% 0% 0% 0%"}}>Policies and terms of use</div>
        <div style={{margin: "3% 0% 3% 0%"}}>© 2023 Costa Coffee. All rights reserved.</div>
        <div className='d-flex flex-row justify-content-center align-items-center'>
          <div><img style={{ width: "10%" }} src={FacebookLogo} alt ='' /></div>
          <div><img style={{ width: "10%" }} src={InstagramLogo} alt ='' /></div>
          <div><img style={{ width: "10%" }} src={TwitterLogo} alt ='' /></div>
        </div>
      </div>
    </div>
  )
}

export default Footer