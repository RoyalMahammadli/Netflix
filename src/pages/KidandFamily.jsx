import React from 'react'
import requests from '../data/MovieData'
import OtherRow from '../Components/OtherRow'

function KidandFamily() {
  return (
    <div className='px-4 '>
    <OtherRow title='For kids and Family' dataUrl={requests.requestUpcoming} />
    <OtherRow dataUrl={requests.requestPopular} />
    <OtherRow dataUrl={requests.requestTrending} />
    <OtherRow dataUrl={requests.requestUpcoming} />
</div>
  )
}

export default KidandFamily