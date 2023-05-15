import React, { useContext, useEffect, useState } from 'react'
import Context from '../Context/Context'
import { nanoid } from 'nanoid'
import Loading2 from '../Components/Loading2'
import OtherCard from './Uİ/OtherCard'

function OtherRow({ title, dataUrl }) {
    const [loading,setLoading]=useState(true)
    const { search } = useContext(Context)
    const [mydata, setMydata] = useState([])
    useEffect(() => {
        fetch(dataUrl)
            .then(response => response.json())
            .then(data => {setMydata(data.results)
            setTimeout(() => {
                setLoading(false)
            }, 550)
        })
    }, [dataUrl])

    return (
        <div className='mt-12'>

            <h3 className='text-white font-bold md:text-xl p-3 md:text-white'>{title}</h3>
            <div className='relative flex flex-wrap justify-between items-center gap-y-20 '>


                {mydata.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())).map((item) =>loading ? <Loading2/>: <OtherCard key={nanoid()} {...item} />)}
            </div>

        </div>
    )
}

export default OtherRow