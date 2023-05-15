import React from 'react'
import OtherRow from '../Components/OtherRow'
import requests from '../data/MovieData'

function Animation() {
    return (
        <div className='px-4'>
            <OtherRow title="Animations" dataUrl={requests.requestTopRated} />
            <OtherRow  dataUrl={requests.requestUpcoming} />
            <OtherRow  dataUrl={requests.requestHorror} />
            <OtherRow  dataUrl={requests.requestTrending} />
            <OtherRow  dataUrl={requests.requestPopular} />
        </div>
    )
}

export default Animation