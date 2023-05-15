import React from 'react'
import { AiOutlineFileText } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function RecommendItem({text}) {
    return (
       <Link className='recommend '>
         <div className='bg-white p-3 mb-4 flex items-center rounded min-[950px]:p-[18px]'>
            <div className="icon mr-3">
                <AiOutlineFileText size={25}  />
            </div>
            <h3 className='txt font-bold text-[17px] min-[950px]:text-[16px] text-[#221f1f]'>
            {text}
            </h3>
        </div>
       </Link>
    )
}

export default RecommendItem