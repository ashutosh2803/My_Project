import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  'https://images.unsplash.com/photo-1561296180-e8100fd714e2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8dGVhJTIwbGVhdmVzfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80',
  'https://www.realcommercial.com.au/blog/wp-content/uploads/2019/01/rsz_new_york_starbucks_roastery_4-1536x650.jpg',
    'https://cdn.shopify.com/s/files/1/0063/6154/6850/files/50_OFF_ALL_SPECIALTY_COFFEE_Always_Premium_Quality_Never_Less_All_single_origin_coffees_on_sale_with_code___freshroast.__1_1024x1024.jpg?v=1560367686',
  'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[0]})`, height: "80vh", width: "73%", margin: "1% auto"}}>
              <span style={{color: "white", fontWeight: "bold", fontSize: "25px"}}>The Authentic Assam Tea</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`, height: "80vh", width: "73%", margin: "1% auto"}}>
              <span style={{color: "white", fontWeight: "bold", fontSize: "25px"}}>New York's StarBucks Roastery!</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`, height: "80vh", width: "73%", margin: "1% auto"}}>
              <span style={{color: "white", fontWeight: "bold", fontSize: "25px"}}>Grab Your's Now !!</span>
            </div>
          </div>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[3]})`, height: "80vh", width: "75%", margin: "1% auto"}}>
                  <span style={{color: "white", fontWeight: "bold", fontSize: "25px"}}>Premium Brazillian Coffee</span>
                </div>
            </div>
        </Slide>
      </div>
    )
};

export default Slideshow;