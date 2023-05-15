import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineRight } from 'react-icons/ai'


function QuickItems() {
    return (
        <>
            <Link> <div className='d1 flex  justify-between mb-4 text-[#4c4948] '> <p className='pd1 w-[90%] '>Request TV shows or movies</p> <AiOutlineRight size={18} fill='red' className='da1 mt-1' /></div></Link>
           <Link> <div className='d2 flex  justify-between mb-4 text-[#4c4948] '> <p className='pd2 w-[90%] '>Update email</p> <AiOutlineRight size={18} fill='red'className='da2 mt-1'  /></div></Link>
            <Link> <div className='d3 flex  justify-between mb-4 text-[#4c4948] '> <p className='pd3 w-[90%] '>Update password</p> <AiOutlineRight size={18} fill='red' className='da3 mt-1' /></div></Link>
            <Link> <div className='d4 flex  justify-between mb-4 text-[#4c4948] '> <p className='pd4 w-[90%] '>Update payment method</p> <AiOutlineRight size={18} fill='red' className='da4 mt-1' /></div></Link>
            <Link> <div className='d5 flex  justify-between mb-4 text-[#4c4948] '> <p className='pd5 w-[90%] '>Cancel account</p> <AiOutlineRight size={18} fill='red'  className='da5 mt-1' /></div></Link>
            <Link> <div className='d6 flex  justify-between mb-4 text-[#4c4948] '> <p className='pd6 w-[90%] '>Review payment history</p> <AiOutlineRight size={18} fill='red' className='da6 mt-1' /></div></Link>
           
           
           
           
        </>
    )
}

export default QuickItems