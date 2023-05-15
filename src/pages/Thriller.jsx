import React from 'react'
import requests from '../data/MovieData'
import OtherRow from '../Components/OtherRow'

function Thriller() {
    return (
        <div className='px-4'>
            <OtherRow title="Thrillers" dataUrl={requests.requestPopular} />
            <OtherRow dataUrl={requests.requestTopRated} />
            <OtherRow dataUrl={requests.requestUpcoming} />

        </div>
    )
}

export default Thriller