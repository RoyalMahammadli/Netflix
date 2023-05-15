import React from 'react'
import requests from '../data/MovieData'
import OtherRow from '../Components/OtherRow'

function StandUp() {
    return (
        <div className='px-4 '>
            <OtherRow title='Stand Ups' dataUrl={requests.requestTopRated} />
            <OtherRow dataUrl={requests.requestPopular} />
            <OtherRow dataUrl={requests.requestTrending} />
            <OtherRow dataUrl={requests.requestUpcoming} />
        </div>

    )
}

export default StandUp