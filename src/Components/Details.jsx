import React from 'react'
import data from "../data/DetailsData.json";
import DetailsCard from './DetailsCard';
import { v4 as uuidv4 } from 'uuid';

// const url = 'https://costa-data.s3.amazonaws.com/data/DetailsData.json;'

const Details = () => {
  return (
    <div>
      {data?.map((item) => <DetailsCard key={uuidv4()} {...item} />)}
    </div>
  )
}

export default Details