import React from 'react'
import requests from '../data/MovieData'
import OtherRow from '../Components/OtherRow'

function Action() {
  return (
    <div className='px-4 '>
    <OtherRow title='Action Films' dataUrl={requests.requestTrending} />
    <OtherRow dataUrl={requests.requestHorror} />
    <OtherRow dataUrl={requests.requestTrending} />
    <OtherRow dataUrl={requests.requestPopular} />
</div>
  )
}

export default Action