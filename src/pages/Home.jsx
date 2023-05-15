import React from 'react'
import Row from '../Components/Row'
import requests from '../data/MovieData'

function Home() {
  return (
    <div className='px-4 overflow-hidden '>
      <Row title='Popular' dataUrl={requests.requestUpcoming} />
      <Row title='American Drama' dataUrl={requests.requestTrending} />
      <Row title='Nowadays' dataUrl={requests.requestTopRated} />
      <Row title='My List' dataUrl={requests.requestHorror}  />
      <Row title='Top Rated' dataUrl={requests.requestTrending} />
      <Row title='For Kids' dataUrl={requests.requestPopular} />
      <Row title='Up Coming' dataUrl={requests.requestPopular} />
      <Row title='Trending' dataUrl={requests.requestUpcoming} />
      <Row title='Family Animations' dataUrl={requests.requestTrending} />
      <Row title='Action' dataUrl={requests.requestTopRated} />
      <Row title='Comedies' dataUrl={requests.requestPopular} />
      <Row title='Popular Films' dataUrl={requests.requestUpcoming} />
      <Row title='Horror' dataUrl={requests.requestTrending} />
      <Row title='Only in Netflix' dataUrl={requests.requestUpcoming} />
      <Row title='Musical' dataUrl={requests.requestPopular} />
    </div>
  )
}

export default Home