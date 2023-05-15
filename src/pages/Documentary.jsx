import React from 'react'
import OtherRow from '../Components/OtherRow'
import requests from '../data/MovieData'

function Documentary() {
    return (
        <div className='px-4 '>
            <OtherRow title='Documentaries' dataUrl={requests.requestTrending} />
            <OtherRow dataUrl={requests.requestPopular} />
            <OtherRow dataUrl={requests.requestTrending} />
            <OtherRow dataUrl={requests.requestHorror} />
        </div>


    )
}

export default Documentary