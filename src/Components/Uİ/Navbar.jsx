import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { TbBrandNetflix } from 'react-icons/tb'
import logo from '../../assets/img/logo-icon.png'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Input from '../Input'
import accauntİmg from '../../assets/img/Netflix-avatar.png'
import $ from 'jquery'


function Navbar() {
    const location=useLocation()
    const hamburgRef = useRef()
    const browseRef = useRef()
    const accauntRef = useRef()
    const [hamburger, setHamburger] = useState(false)
    const [browse, setBrowse] = useState(false)
    const [accaunt, setAccaunt] = useState(false)
    const handleHamburger = () => {
        console.log("Salam");
        setHamburger(!hamburger)
    }

    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            if (!e.composedPath().includes(hamburgRef.current))
                setHamburger(false)
        })
        document.addEventListener("mousedown", (e) => {
            if (!e.composedPath().includes(browseRef.current))
                setBrowse(false)
        })
        document.addEventListener("mousedown", (e) => {
            if (!e.composedPath().includes(accauntRef.current))
                setAccaunt(false)
        })

    }, [])
    useEffect(() => {
        const hamburgerLinks = document.querySelectorAll(".hamburger-link")
        
        hamburgerLinks.forEach(item => item.addEventListener("click", () => {
            setHamburger(false)
            
          
        }))
    }, [])
    useEffect(()=>{
        const browseLinks = document.querySelectorAll(".browse-link")
        browseLinks.forEach(item => item.addEventListener("click", () => {
            setBrowse(false)
        }))
    },[])
    useEffect(()=>{
        const accauntLinks = document.querySelectorAll(".accaunt-link")
        accauntLinks.forEach(item => item.addEventListener("click", () => {
            setAccaunt(false)
        }))
    },[])




   //$(function(){
    $(window).scroll(function() {
        if($(window).scrollTop() >= 5) {
            $('.myNav').addClass('scrolled');
        }else {
            $('.myNav').removeClass('scrolled');
        }
    });
//});


    return (


        <header className='myNav py-4 px-4 bg-gradient-to-b from-black to-transparent fixed top-0 w-full z-[99] '>
            <nav className='flex justify-between'>
                <div className="left-side flex items-center">
                    <div onClick={handleHamburger} className="hamburger">
                        {!hamburger ? <AiOutlineMenu className='text-white min-[800px]:hidden' size={25} /> : <TbBrandNetflix className='text-white' size={25} />}
                    </div>

                    <div ref={hamburgRef} className={!hamburger ? "fixed left-[-100%] " : "hamburg-content fixed top-11 left-0 w-[250px] bg-black  h-full overflow-y-auto overflow-x-hidden z-50"}>
                        <ul className='pl-3.5 '>
                            <li ><Link className='flex hamburger-link'>
                                <div className="w-7 h-7 "><img className='rounded' src={accauntİmg} alt="" /></div>
                                <div>
                                    <span>switch profiles</span>
                                </div></Link></li>
                            <li><Link className='hamburger-link' to='/accaunt'>account</Link></li>
                            <li><Link className='hamburger-link' to='/help'>help center</Link></li>
                            <li className='pb-3 border-b border-gray-600'><Link>sign <span className='lowercase'>out of </span> netflix</Link></li>
                           
                            <li><NavLink className={({isActive})=>((isActive && location.pathname==="/")? "hamburger-active":"hamburger-link")}  to='/home'>home</NavLink></li>
                            <li><NavLink className={({isActive})=>(isActive? "hamburger-active":"hamburger-link")} to='/mylist'>my list</NavLink></li>
                            <li><NavLink className={({isActive})=>(isActive? "hamburger-active":"hamburger-link")} to='/thriller'>thriller</NavLink></li>
                            <li><NavLink className={({isActive})=>(isActive? "hamburger-active":"hamburger-link")} to='/crime'>crime</NavLink></li>
                            <li><NavLink className={({isActive})=>(isActive? "hamburger-active":"hamburger-link")} to='/kidAndFamily'>kid and family</NavLink></li>
                            <li><NavLink className={({isActive})=>(isActive? "hamburger-active":"hamburger-link")} to='/international'>international series and films</NavLink></li>
                            <li><NavLink className={({isActive})=>(isActive? "hamburger-active":"hamburger-link")} to='/realityShows'>reality shows</NavLink></li>
                            <li><NavLink className={({isActive})=>(isActive? "hamburger-active":"hamburger-link")} to='/action'>action</NavLink></li>
                            <li><NavLink className={({isActive})=>(isActive? "hamburger-active":"hamburger-link")} to='/animation'>animation</NavLink></li>
                            <li><NavLink className={({isActive})=>(isActive? "hamburger-active":"hamburger-link")} to='/fantastic'>fantastic</NavLink></li>
                            <li><NavLink className={({isActive})=>(isActive? "hamburger-active":"hamburger-link")} to='/comedy'>comedy</NavLink></li>
                            <li><NavLink className={({isActive})=>(isActive? "hamburger-active":"hamburger-link")} to='/scientic'>science fiction</NavLink></li>
                            <li><NavLink className={({isActive})=>(isActive? "hamburger-active":"hamburger-link")} to='/horror'>horror</NavLink></li>
                            <li><NavLink className={({isActive})=>(isActive? "hamburger-active":"hamburger-link")} to='/standUp'>stand up comedy</NavLink></li>
                            <li><NavLink className={({isActive})=>(isActive? "hamburger-active":"hamburger-link")} to='/europFilms'>europe films and series</NavLink></li>
                            <li><NavLink className={({isActive})=>(isActive? "hamburger-active":"hamburger-link")} to='/documentary'>documentary</NavLink></li>
                            <li><NavLink className={({isActive})=>(isActive? "hamburger-active":"hamburger-link")} to='/musicAndMusicals'>musics and musicals</NavLink></li>
                            <li><NavLink className={({isActive})=>(isActive? "hamburger-active":"hamburger-link")} to='/romantic'>romantic</NavLink></li>
                            <li><NavLink className={({isActive})=>(isActive? "hamburger-active":"hamburger-link")} to='/drama'>drama</NavLink></li>
                        </ul>
                    </div>


                    <div onClick={() => window.location.reload(true)} className='ml-4 cursor-pointer w-[85px] min-[800px]:w-[120px]'><Link to='/'><img className='w-[100%]' src={logo} alt="netflix logo" /></Link></div>
                    <div onMouseEnter={()=>setBrowse(true)} className="browser  hidden min-[800px]:flex ">
                        <p  className='text-[#e50914] flex items-center capitalize ml-[48px] cursor-pointer'>browse </p>
                    </div>
                    <div className="max-[800px]:hidden">
                        <div onMouseLeave={()=>setBrowse(false)} ref={browseRef}  className={(!browse) ? "fixed hidden" : "browse-content border-t-4 w-[760px]   bg-black fixed top-16 left-[185px] text-white flex capitalize text-[14px] z-50"}>
                            <ul className='pl-5 pt-2 font-bold'>
                                <li><Link className='browse-link' to='/'>home</Link></li>
                                <li><Link className='browse-link' to='/mylist'>my list</Link></li>
                                <div className={!browse ? "fixed top-[-100%]" : "h-[126px] w-[1px] bg-white fixed left-[280px] top-[76px] z-50 "}></div>

                            </ul>
                            <ul className='ml-[50px] mt-2 pb-2'>
                                <li><Link className='browse-link' to='/thriller'>thriller</Link></li>
                                <li><Link className='browse-link' to='/international'>international series and films</Link></li>
                                <li><Link className='browse-link' to='/animation'>animation</Link></li>
                                <li><Link className='browse-link' to='/scientic'>science fiction</Link></li>
                                <li><Link className='browse-link' to='/europFilms'>europe films and series</Link></li>
                                <li><Link className='browse-link' to='/romantic'>romantic</Link></li>



                            </ul>
                            <ul className='ml-6 mt-2'>
                                <li><Link className='browse-link' to='/crime'>crime</Link></li>
                                <li><Link className='browse-link' to='/realityShows'>reality shows</Link></li>
                                <li><Link className='browse-link' to='/fantastic'>fantastic</Link></li>
                                <li><Link className='browse-link' to='/horror'>horror</Link></li>
                                <li><Link className='browse-link' to='/documentary'>documentary</Link></li>
                                <li><Link className='browse-link' to='/drama'>drama</Link></li>
                            </ul>
                            <ul className='ml-[80px] mt-2'>
                                <li><Link className='browse-link' to='/kidAndFamily'>kid and family</Link></li>
                                <li><Link className='browse-link' to='/action'>action</Link></li>
                                <li><Link className='browse-link' to='/comedy'>comedy</Link></li>
                                <li><Link className='browse-link' to='/standUp'>stand up comedy</Link></li>
                                <li><Link className='browse-link' to='/musicAndMusicals'>musics and musicals</Link></li>
                            </ul>

                            <div className={!browse ? "fixed top-[-100%]" : "triangle fixed top-[52px] left-[190px] z-50"}></div>
                        </div>
                    </div>

                </div>

                <div className="right-side flex">
                    <Input />
                    <Link onMouseEnter={()=>setAccaunt(true)} className=' hidden  min-[800px]:flex'>
                        <div className="w-7 h-7  ml-5"><img className='rounded' src={accauntİmg} alt="" /> </div>
                        <p className='text-white ml-3 capitalize'>enemy</p>
                    </Link>
                    <div onMouseLeave={()=>setAccaunt(false)} ref={accauntRef}  className={!accaunt ? "fixed top-[-100%]" : "account-box w-[160px]  border-t-4 border-white bg-black fixed top-[64px] right-[15px] z-50 "}>
                        <ul className='text-white p-3 capitalize text-[14px]'>
                            <li className='border-b pb-2'><Link className='accaunt-link'>change profile</Link></li>
                            <li className='pt-2'><Link className='accaunt-link' to='/accaunt
                            '>account</Link></li>
                            <li className='pt-2' ><Link className='accaunt-link' to='/help'>help center</Link></li>
                            <li className='pt-2'><Link className='accaunt-link'>sign <span className='lowercase'>out of </span> netflix</Link></li>
                        </ul>

                    </div>
                    <div className={!accaunt ? "fixed top-[-100%]" : "triangle fixed top-[52px] right-[77px] "}></div>
                </div>

            </nav>
        </header>

    )
}

export default Navbar