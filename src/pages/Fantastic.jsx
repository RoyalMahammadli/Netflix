import React from 'react'
import OtherRow from '../Components/OtherRow'
import requests from '../data/MovieData'

function Fantastic() {
    return (
        <div className='px-4 '>
            <OtherRow title='Fantastics' dataUrl={requests.requestUpcoming} />
            <OtherRow dataUrl={requests.requestPopular} />
            <OtherRow dataUrl={requests.requestTrending} />
            <OtherRow dataUrl={requests.requestHorror} />
        </div>
    )
}

export default Fantastic