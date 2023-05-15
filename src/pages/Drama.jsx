import React from 'react'
import requests from '../data/MovieData'
import OtherRow from '../Components/OtherRow'

function Drama() {
    return (
        <div className='px-4 '>
            <OtherRow title='Dramas' dataUrl={requests.requestUpcoming} />
            <OtherRow dataUrl={requests.requestHorror} />
            <OtherRow dataUrl={requests.requestTrending} />
            <OtherRow dataUrl={requests.requestPopular} />
        </div>
    )
}

export default Drama