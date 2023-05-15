import { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { AiOutlineLock } from 'react-icons/ai'
import ProfileItem from './ProfileItem'


function Profile({ img, name }) {
    const [chevron, setChevron] = useState(true)
    const handleChevron = () => {
        setChevron(!chevron)
    }
    return (
        <div>

            <div onClick={handleChevron} className='Profile flex items-center justify-between mt-4 border-b border-gray-300 pb-4 hover:cursor-pointer'>
                <div className="Left-side flex items-center">
                    <div className="Left w-[60px]">
                        <img className='w-full object-cover  rounded' src={img} alt="profile " />
                    </div>
                    <div className="Center ml-4">
                        <h3 className='font-semibold text-[#333] text-[15px]'>{name}</h3>
                        <p className='capitalize text-[#787878] text-sm'>all adult levels</p>
                    </div>

                </div>
                <div className="Right flex"><AiOutlineLock fill='gray' /> {chevron ? <BsChevronDown fill='gray' /> : <BsChevronUp fill='gray' />} </div>
            </div>
            {chevron ? '' :
                <div className="Profile-items">
                    <ProfileItem val1="Language" val2="English" />
                    <ProfileItem val1="Viewing Restrictions" val2="No restrictions" />
                    <ProfileItem val1="Profile Lock" val2="Open" />
                    <ProfileItem val1="Transfer this profile" new="New" />
                    <ProfileItem val1="Viewing Activity" />
                    <ProfileItem val1="Ratings" />
                    <ProfileItem val1="Subtitle appearance" />
                    <ProfileItem val1="Playback Settings" val2=" Autoplay next episode.Autoplay previews.Default video and audio quality" />
                    <div className='flex items-center pl-[76px] mt-4 w-full  border-b border-gray-300 pb-4'> <input className='w-[25px] h-[25px] mr-2' type="checkbox" id='check'  /> <label className='w-[75%]'  htmlFor="check">Reduce animation effects when navigating on TV</label> </div>
                </div>
            }








        </div>




    )
}

export default Profile