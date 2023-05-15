import React from 'react'
import OtherRow from '../Components/OtherRow'
import requests from '../data/MovieData'

function EuropFilms() {
  return (
    <div className='px-4 '>
    <OtherRow title='Europe Films and Series' dataUrl={requests.requestTopRated} />
    <OtherRow dataUrl={requests.requestTrending} />
    <OtherRow dataUrl={requests.requestPopular} />
</div>
  )
}

export default EuropFilms