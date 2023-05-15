import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineRight } from 'react-icons/ai'

function CategoryItems({ pTxt1, pTxt2, pTxt3, headTxt }) {
    return (

        <div className='min-[600px]:w-[48%] '>
            <h2 className='font-bold text-2xl capitalize my-7 min-[1200px]:text-xl text-[#221f1f]'>{headTxt}</h2>
            <Link> <div className='c1 flex items-start  justify-between mb-4 text-[#4c4948] min-[1200px]:w-[90%] '> <p className='ca1 w-[90%] '>{pTxt1}</p> <AiOutlineRight size={17} fill='red' className=' min-[901px]:hidden mt-1 ' /></div></Link>
            <Link> <div className='c2 flex items-start  justify-between mb-4 text-[#4c4948] min-[1200px]:w-[90%] '> <p className='ca2 w-[90%]'>{pTxt2}</p> <AiOutlineRight size={17} fill='red' className='min-[901px]:hidden mt-1' /></div></Link>
            <Link> <div className='c3 flex items-start  justify-between mb-4 text-[#4c4948] min-[1200px]:w-[90%]'> <p className='ca3 w-[90%]'>{pTxt3}</p> <AiOutlineRight size={17} fill='red' className=' min-[901px]:hidden mt-1' /></div></Link>

        </div>

    )
}

export default CategoryItems