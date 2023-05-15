import React from 'react'
import OtherRow from '../Components/OtherRow'
import requests from '../data/MovieData'

function Horror() {
  return (
    <div className='px-4 '>
    <OtherRow title='Horrors' dataUrl={requests.requestHorror} />
    <OtherRow dataUrl={requests.requestTrending} />
    <OtherRow dataUrl={requests.requestPopular} />
    <OtherRow dataUrl={requests.requestPopular} />
    <OtherRow dataUrl={requests.requestTopRated} />
</div>
  )
}

export default Horror