import React from 'react'
import { Button } from 'react-bootstrap'

const DetailsCard = ({img, title, paragraph, buttonName, order, bgColor}) => {
  return (
    <div>
      <div><img src={img} alt='DetailImage' /></div>
      <div>
        <div><h3>{title}</h3></div>
        <div>{paragraph}</div>
        <div><Button>{buttonName}</Button></div>
      </div>
    </div>
  )
}

export default DetailsCard