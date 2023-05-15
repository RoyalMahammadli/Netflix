import React from 'react'
import OtherRow from '../Components/OtherRow'
import requests from '../data/MovieData'

function Romantic() {
  return (
    <div className='px-4'>
      <OtherRow title="Romantic" dataUrl={requests.requestTopRated} />
      <OtherRow dataUrl={requests.requestPopular} />
      <OtherRow dataUrl={requests.requestUpcoming} />

    </div>
  )
}

export default Romantic