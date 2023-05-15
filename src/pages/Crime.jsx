import React from 'react'
import requests from '../data/MovieData'
import OtherRow from '../Components/OtherRow'

function Crime() {
    return (
        <div className='px-4 '>
            <OtherRow title='Crimes' dataUrl={requests.requestUpcoming} />
            <OtherRow dataUrl={requests.requestPopular} />
            <OtherRow dataUrl={requests.requestTrending} />
            <OtherRow dataUrl={requests.requestPopular} />
        </div>
    )
}

export default Crime