import React from 'react'
import requests from '../data/MovieData'
import OtherRow from '../Components/OtherRow'

function Scientic() {
    return (
        <div className='px-4'>
            <OtherRow title="Science Fictions" dataUrl={requests.requestTopRated} />
            <OtherRow dataUrl={requests.requestTrending} />
            <OtherRow dataUrl={requests.requestPopular} />
            <OtherRow dataUrl={requests.requestUpcoming} />

        </div>
    )
}

export default Scientic