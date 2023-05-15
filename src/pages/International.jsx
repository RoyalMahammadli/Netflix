import React from 'react'
import OtherRow from '../Components/OtherRow'
import requests from '../data/MovieData'

function International() {
    return (
        <div className='px-4 '>
            <OtherRow title='International Series and Films' dataUrl={requests.requestTopRated} />
            <OtherRow dataUrl={requests.requestTrending} />
            <OtherRow dataUrl={requests.requestPopular} />
        </div>
    )
}

export default International