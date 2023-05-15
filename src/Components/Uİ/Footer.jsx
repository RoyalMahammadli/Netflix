import React, { useState } from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineYoutube } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Footer() {
    const date = new Date()
    const year = date.getFullYear()
    const [sCode, setSCode] = useState("service code")
    const handleServiceCode = () => {
        const change = setSCode("255-112")
        console.log(change);

    }
    return (
        <footer className='px-4 py-4 lg:w-[80%] lg:m-auto ' >
            <div className="Social-icons flex justify-between items-center pt-[100px] ml-3 w-[130px] sm:w-[150px]">
                <Link target='_blank' to='https://www.facebook.com/'><FaFacebookF size={20} className='text-white lg:w-[25px] lg:h-[25px]' /></Link>
                <Link target='_blank' to='https://www.instagram.com/'><BsInstagram size={20} className='text-white lg:w-[25px] lg:h-[25px] ' /></Link>
                <Link target='_blank' to='https://www.youtube.com/'> <AiOutlineYoutube size={25} className='text-white lg:w-[30px] lg:h-[30px] ' /></Link>
            </div>
            <div className="help-bar flex justify-between w-[80%] mt-1 ">
                <div className="first-bar min-[800px]:flex  min-[800px]:justify-between  min-[800px]:w-full min-[800px]:mr-16">
                    <div>
                        <Link><p>audible description</p></Link>
                        <Link><p>investor relationship</p></Link>
                        <Link><p>legal law</p></Link>
                    </div>
                    <div>
                        <Link><p>help center</p></Link>
                        <Link><p>job opportunity</p></Link>
                        <Link><p>cookie preference</p></Link>
                    </div>
                </div>
                <div className="second-bar min-[800px]:flex min-[800px]:justify-between min-[800px]:w-full min-[800px]:ml-16">
                    <div>
                        <Link><p>gift cards</p></Link>
                        <Link><p>use conditions</p></Link>
                        <Link><p>institutional information</p></Link>
                    </div>
                    <div>
                        <Link><p>media center</p></Link>
                        <Link><p>confidentiality </p></Link>
                        <Link><p>contact us</p></Link>
                    </div>
                </div>
                <div className="first-bar"></div>
            </div>
            <div className="third-bar">
                <button onClick={handleServiceCode} className='border border-[grey] p-[5px] capitalize mt-7 text-[grey] text-[13px] hover:text-white'>{sCode}</button>
                <p className='text-[grey] text-[13px] mt-4'>&copy; 1997-{year} Netflix,INC</p>
            </div>

        </footer>
    )
}

export default Footer