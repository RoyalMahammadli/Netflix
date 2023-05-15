import React from 'react'
import requests from '../data/MovieData'
import OtherRow from '../Components/OtherRow'

function MusicAndMusicals() {
  return (
    <div className='px-4 '>
    <OtherRow title='Music and Musicals' dataUrl={requests.requestUpcoming} />
    <OtherRow dataUrl={requests.requestTopRated} />
    <OtherRow dataUrl={requests.requestTrending} />
    <OtherRow dataUrl={requests.requestUpcoming} />
</div>
  )
}

export default MusicAndMusicals