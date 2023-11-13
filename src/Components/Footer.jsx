import React from 'react';
import FacebookLogo from '../assets/facebook_logo.png';
import InstagramLogo from '../assets/instagram_logo.png';
import TwitterLogo from '../assets/twitter_logo.png';

const Footer = () => {
  return (
    <div>
      <div className='d-flex flex-row flex-wrap text-white' style={{backgroundColor: 'rgb(181,16,69)', letterSpacing: "0.1ch", paddingLeft: "5.2%", paddingTop: "2%", paddingBottom: "2%"}}>
        <div>
          <div><h3>Costa Coffee</h3></div>
          <div>
            <div style={{cursor: "pointer", margin: "5% 0"}}>Our coffees</div>
            <div style={{cursor: "pointer", margin: "5% 0"}}>Help and advice</div>
            <div style={{cursor: "pointer", margin: "5% 0"}}>Costa Club</div>
            <div style={{cursor: "pointer", margin: "5% 0"}}>How to guides</div>
            <div style={{cursor: "pointer", margin: "5% 0"}}>FAQs</div>
          </div>
        </div>
        <div style={{paddingLeft: "5.2%"}}>
          <div><h3>Dietary Information</h3></div>
          <div>
            <div style={{cursor: "pointer", margin: "5% 0"}}>Detailed dietary information</div>
          </div>
        </div>
        <div style={{paddingLeft: "5.2%"}}>
          <div><h3>Behind the beans</h3></div>
          <div>
            <div style={{cursor: "pointer", margin: "5% 0"}}>Behind the Beans</div>
            <div style={{cursor: "pointer", margin: "5% 0"}}>Costa Foundation</div>
            <div style={{cursor: "pointer", margin: "5% 0"}}>Responsible sourcing</div>
          </div>
        </div>
      </div>
      <div className='d-flex flex-column flex-wrap' style={{backgroundColor: "rgb(108,31,54)", color: "white", fontWeight: "bold", letterSpacing: "0.1ch", paddingLeft: "5.2%", paddingBottom: "3%", paddingTop: "1%"}}>
        <div>Policies and terms of use</div>
        <div>© 2023 Costa Coffee. All rights reserved.</div>
        <div style={{paddingTop: "1%"}} className='d-flex flex-row'>
          <div><img style={{ width: "10%", cursor: "pointer"}} src={FacebookLogo} alt ='facebook_logo' /></div>
          <div><img style={{ width: "10%", cursor: "pointer" }} src={InstagramLogo} alt ='instagram_logo' /></div>
          <div><img style={{ width: "10%", cursor: "pointer" }} src={TwitterLogo} alt ='twiiter_logo' /></div>
        </div>
      </div>
    </div>
  )
}

export default Footer