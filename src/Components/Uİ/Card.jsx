import { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import React from 'react'
import { Link } from 'react-router-dom'




function Card({ backdrop_path, title, id }) {
    const [like, setLike] = useState(false)
    const handleLike = (e) => {
        e.preventDefault()
        setLike(!like)
    }



    return (
        <Link to={`/${id}`}>
            <div className=' w-full relative inline-block  duration-300 ease-in-out   shadow-md hover:shadow-red-50/40 cursor-pointer '>
                <img className=' w-full block  h-full object-cover' src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={title} />
                <div className="Skin duration-300 ease-in-out hover:bg-black/80  w-full h-full absolute top-0 left-0 opacity-0  hover:opacity-100 ">
                    <div className='absolute top-1 left-2 lg:top-2 lg:left-3 ' onClick={handleLike}> {!like ? <AiOutlineHeart className='text-white sm:w-[20px]  sm:h-[20px]' size={12} /> : <AiFillHeart className='text-[#e50914]  sm:w-[20px] sm:h-[20px]' size={12} />}</div>
                    <p className='text-white text-xs md:text-sm  flex justify-center items-center h-full text-center'>{title}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card