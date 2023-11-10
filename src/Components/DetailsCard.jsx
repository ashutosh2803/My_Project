import React from 'react'
import { Button } from 'react-bootstrap'

const DetailsCard = ({ img, title, paragraph, buttonName, order, bgColor }) => {
  console.log(bgColor)
  return (
    <div style={{margin: "5%", width: "90%", height: "100%"}} className='d-flex flex-row flex-wrap'>
      <div style={{width: "40%"}}><img style={{width: "100%"}} src={img} alt='DetailImage' /></div>
      <div style={{width: "60%", color: "rgb(108,31,54)", backgroundColor: bgColor, paddingLeft: "5%", paddingTop: "4%", paddingRight: "5%", textAlign: "center", paddingBottom: "4%"}}>
        <div><h3>{title}</h3></div>
        <div style={{padding: "3%", letterSpacing: "0.1ch", lineHeight: "30px"}}>{paragraph}</div>
        <div><Button style={{paddingBottom: "", backgroundColor: "rgb(108,31,54)", color: "white", padding: "2% 2%", fontWeight: "bold", letterSpacing: "0.1ch", fontSize: "20px", textDecoration: "none", border: "none"}}>{buttonName}</Button></div>
      </div>
    </div>
  )
}

export default DetailsCard