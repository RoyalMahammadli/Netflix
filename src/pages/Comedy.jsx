import React from 'react'
import OtherRow from '../Components/OtherRow'
import requests from '../data/MovieData'

function Comedy() {
  return (
    <div className='px-4 '>
    <OtherRow title='Comedy for who loves fun' dataUrl={requests.requestUpcoming} />
    <OtherRow dataUrl={requests.requestPopular} />
    <OtherRow dataUrl={requests.requestTrending} />
    <OtherRow dataUrl={requests.requestPopular} />
    <OtherRow dataUrl={requests.requestPopular} />
    <OtherRow dataUrl={requests.requestPopular} />
</div>
  )
}

export default Comedy