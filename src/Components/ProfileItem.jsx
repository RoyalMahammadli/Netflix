import React from 'react'

function ProfileItem({val1,val2}) {
  return (
    <div>
         <div  className='Profile flex items-center justify-between pl-[76px] mt-4 w-full  border-b border-gray-300 pb-4'>
                <div className="Left-side flex items-center">
                    
                    <div className="Right ">
                        <h3 className='font-medium text-[#333] text-[15px]'>{val1}  </h3>
                        <p className='capitalize text-[#787878] text-[12px] w-[75%]'>{val2}</p>
                    </div>

                </div>
                <div className="Right text-[#0080ff] capitalize text-sm hover:cursor-pointer lg:text-[18px] hover:underline"  > change </div>
            </div>
    </div>
  )
}

export default ProfileItem