import React from 'react'
import requests from '../data/MovieData'
import OtherRow from '../Components/OtherRow'

function RealityShows() {
    return (
        <div className='px-4 '>
            <OtherRow title='Reality Shows' dataUrl={requests.requestTrending} />
            <OtherRow dataUrl={requests.requestPopular} />
            <OtherRow dataUrl={requests.requestTrending} />
            <OtherRow dataUrl={requests.requestHorror} />
        </div>
    )
}

export default RealityShows