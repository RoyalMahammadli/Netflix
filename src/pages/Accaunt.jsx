import { Link } from 'react-router-dom'
import React, { useEffect, useRef, useState } from 'react'
import { SiPlaywright } from 'react-icons/si'
import { AiOutlineRight, AiOutlineCaretDown } from 'react-icons/ai'
import logo from '../assets/img/logo-icon.png'
import accauntİmg from '../assets/img/Netflix-avatar.png'
import chicken from '../assets/img/chicken.jpg'
import cool from '../assets/img/cool.png'
import pretty from '../assets/img/pretty.png'
import smile from '../assets/img/smile.webp'
import Profile from '../Components/Profile'




function Accaunt() {
    const accauntRef = useRef(null)

    let firstMembershipDate = new Date('March 2, 2022')
    let nextMembershipDate = new Date(' April 2, 2023 ')
    const firstMonth = firstMembershipDate.toLocaleString('en-US', { month: 'long' })
    const firstYear = firstMembershipDate.getFullYear()
    const nextMonth = nextMembershipDate.toLocaleString('en-US', { month: 'long' })
    const nextDate = nextMembershipDate.getFullYear()

    const [accaunt, setAccaunt] = useState(false)
   
    useEffect(() => {
        const change= document.addEventListener("mousedown", (e) => {
            if(!e.composedPath().includes(accauntRef.current)){
                setAccaunt(false)
            }

        })

        return(
            document.removeEventListener("mousedown", change)
        )
    })


    useEffect(() => {
        const accauntLinks = document.querySelectorAll(".accaunt-link")
        accauntLinks.forEach(item => item.addEventListener("click", () => {

            setAccaunt(false)
        }))
    }, [])



    return (
        <div className='w-full bg-[#f3f3f3] '>
            <header className='py-1 px-2 bg-black  fixed top-0 w-full z-[99] '>
                <nav className='flex justify-between min-[740px]:px-8 min-[740px]:py-[9px]'>
                    <div className="left-side flex items-center">

                        <div onClick={() => window.location.reload(true)} className=' cursor-pointer w-[115px] min-[800px]:w-[120px]'><Link to='/'><img className='w-[100%]' src={logo} alt="netflix logo" /></Link></div>

                    </div>

                    <div className="right-side ">

                        <Link onMouseEnter={()=>setAccaunt(true)} className='flex'>
                            <div className="flex w-11 min-[740px]:w-8 "><img className='w-full overflow-clip rounded' src={accauntİmg} alt="" /></div>
                            <div className="chevron mt-2 ml-2 hidden min-[740px]:block"><AiOutlineCaretDown fill='white' /></div>
                        </Link>
                        <div onMouseLeave={()=>setAccaunt(false)} ref={accauntRef} className={!accaunt ? "fixed top-[-100%]" : "account-box w-[160px]  border-t border-white bg-black fixed top-[52px] right-0 min-[740px]:right-[25px] min-[740px]:top-[55px] z-50 "}>
                            <ul className='text-white p-3 capitalize text-[14px]'>

                                <li className='border-b pb-4'><Link className='accaunt-link'>transfer profile</Link></li>
                                <li className='pt-4'><Link className='accaunt-link' to='/accaunt
                            '>account</Link></li>
                                <li className='pt-6 pb-4' ><Link className='accaunt-link' to='/help'>help center</Link></li>
                                <li className='p-3 pt-6  border-t '><Link className='accaunt-link'>sign <span className='lowercase'>out of </span> netflix</Link></li>
                                <li className='pt-4 min-[400px]:hidden' ><Link className='accaunt-link' to='/'>check <span className='lowercase'>it out</span></Link></li>
                            </ul>

                        </div>
                        <div className={!accaunt ? "fixed top-[-100%]" : " triangle fixed top-[52px]   "}></div>
                    </div>

                </nav>
            </header>

            <main className="px-2 pt-[65px] min-[500px]:px-[51px] min-[1150px]:px-[120px] min-[1150px]:pt-[100px] ">
                <div className="min-[500px]:border-b border-gray-500 min-[500px]:flex min-[500px]:items-center ">
                    <h1 className=' ml-4 min-[500px]:ml-[0px] capitalize text-[#333] font-[400] text-[1.5rem] min-[500px]:inline-flex min-[740px]:text-[34px]'>account</h1>
                    <div className="flex items-center max-[500px]:pb-4 min-[500px]:pb-0">
                        <p className='ml-4 '><SiPlaywright size={22} className='lg:w-[30px] lg:h-[30px]' fill='red' /></p>
                        <p className=' ml-2 capitalize text-[#555] font-[600] text-[13px]'> first mebmership date:{firstMonth} {firstYear}</p>
                    </div>
                </div>

                <div className=" Contain-1 bg-white border-solid border border-[#999] min-[500px]:border-none min-[500px]:bg-[#f3f3f3] max-w-full py-4 px-3 mx-4 relative min-[500px]:px-0 min-[500px]:mx-0">
                    <div className="membership min-[740px]:float-left min-[740px]:mt-4 ">
                        <h2 className='uppercase text-[#737373] text-[18px] '>membership & billing</h2>
                        <button className=' px-[25px] py-[11px] capitalize rounded text-sm myBtn hidden min-[500px]:block'>cancel membership</button>
                    </div>

                    <div className="Cont1 min-[500px]:border-b  border-gray-300  flex flex-col min-[500px]:flex-row min-[500px]:justify-between min-[740px]:flex ">

                        <div className="Cont1-1 py-2 ml-2 min-[740px]:ml-[100px]">
                            <p className='font-semibold text-[#333] py-2'>enemyhead88@mail.ru</p>
                            <p className='capitalize  border-b border-[#737373]  text-[#737373] min-[500px]:border-none  pb-3 '>password: <span>*******</span> </p>
                        </div>


                        <div className="Cont1-2 ">
                            <div className=' flex justify-between items-center py-3 border-b border-[#737373] text-[##333] min-[500px]:border-none min-[500px]:justify-end '><Link className='min-[500px]:text-[#0073e6] lg:text-[18px] hover:underline '>Change email</Link><Link ><AiOutlineRight className='min-[500px]:hidden' /></Link></div>
                            <div className=' flex justify-between items-center py-3 border-b border-[#737373] text-[##333] min-[500px]:border-none min-[500px]:justify-end'><Link className='min-[500px]:text-[#0073e6] lg:text-[18px] hover:underline '>Change password</Link><Link ><AiOutlineRight className='min-[500px]:hidden' /></Link></div>
                            <div className=' flex justify-between items-center py-3 border-b border-[#737373] text-[##333] min-[500px]:border-none min-[500px]:justify-end'><Link className='min-[500px]:text-[#0073e6] lg:text-[18px] hover:underline'>Add phone number</Link><Link ><AiOutlineRight className='min-[500px]:hidden' /></Link></div>

                        </div>

                    </div>



                    <div className="Cont2 min-[500px]:border-b border-gray-300 flex flex-col min-[500px]:flex-row min-[500px]:justify-between min-[740px]:ml-[198px]  ">

                        <div className="Cont2-1 py-2 min-[740px]:ml-[110px] ">
                            <p className='font-semibold text-[#333] py-2'>No payment information</p>
                            <p className='capitalize  border-b border-[#737373]  text-[#333] min-[500px]:border-none  pb-3 '>Your next billing date is:{nextMonth} {nextDate}</p>
                        </div>


                        <div className="Cont2-2 ">
                            <div className=' flex justify-between items-center py-3 border-b border-[#737373] text-[##333] min-[500px]:border-none min-[740px]:text-right'><Link className='min-[500px]:text-[#0073e6] lg:text-[18px] hover:underline '>Add payment method</Link><Link ><AiOutlineRight className='min-[500px]:hidden' /></Link></div>
                            <div className=' flex justify-between items-center py-3 border-b border-[#737373] text-[##333] min-[500px]:border-none min-[500px]:justify-end'><Link className='min-[500px]:text-[#0073e6] lg:text-[18px] hover:underline'>Billing details</Link><Link ><AiOutlineRight className='min-[500px]:hidden' /></Link></div>
                            <div className=' flex justify-between items-center py-3 border-b border-[#737373] text-[##333] min-[500px]:border-none min-[500px]:justify-end'><Link className='min-[500px]:text-[#0073e6] lg:text-[18px] hover:underline'>Change billing day</Link><Link ><AiOutlineRight className='min-[500px]:hidden' /></Link></div>

                        </div>

                    </div>


                    <div className="Cont3 min-[500px]:border-b border-[#737373] flex flex-col min-[500px]:flex-row min-[500px]:justify-between">

                        <div className="Cont3-1 py-2">
                            <div></div>
                        </div>


                        <div className="Cont2-2  ">
                            <div className=' flex justify-between items-center py-3 border-b border-[#737373] text-[##333] min-[500px]:border-none'><Link className='min-[500px]:text-[#0073e6] lg:text-[18px] hover:underline'>Redeem a gift card or promotional code</Link><Link ><AiOutlineRight className='min-[500px]:hidden' /></Link></div>
                            <div className=' flex justify-between min-[500px]:justify-end items-center py-3 text-[##333] min-[500px]:border-none'> <Link className='min-[500px]:text-[#0073e6] lg:text-[18px] hover:underline'>Where to buy a gift card</Link><Link ><AiOutlineRight className='min-[500px]:hidden' /></Link></div>
                            <button className=' w-full py-[11px] capitalize rounded text-base myBtn  min-[500px]:hidden'>cancel membership</button>


                        </div>

                    </div>



                </div>
                <div className=" Contain-2 mt-1  bg-white border-solid border border-[#999] min-[500px]:border-none min-[500px]:bg-[#f3f3f3] max-w-full py-4 px-3 mx-4 relative min-[500px]:px-0 min-[500px]:mx-0">
                    <h2 className='uppercase text-[#737373] pb-2 min-[740px]:absolute min-[740px]:mt-3 text-[18px]'>plan details</h2>
                    <div className="min-[500px]:flex min-[500px]:justify-between min-[500px]:border-b border-[#737373] pb-4">
                        <p className='capitalize font-bold min-[500px]:mt-3 text-[#333] min-[740px]:ml-[310px]'>special <Link className='p-[1px] font-[500] font-serif border-2 border-black border-b'>ULTRA <b>HD</b></Link></p>
                        <div className=' flex justify-between items-center py-3 border-b border-[#737373] text-[##333] min-[500px]:border-none'><Link className='min-[500px]:text-[#0073e6] lg:text-[18px] hover:underline'>Change plan</Link><Link ><AiOutlineRight className='min-[500px]:hidden' /></Link></div>
                    </div>



                </div>

                <div className=" Contain-3 mt-1  bg-white border-solid border border-[#999] min-[500px]:border-none min-[500px]:bg-[#f3f3f3] max-w-full py-4 px-3 mx-4 relative min-[500px]:px-0 min-[500px]:mx-0">
                    <h2 className='uppercase text-[#737373] min-[740px]:float-left min-[740px]:mt-3 text-[18px]'>security and privacy</h2>


                    <div className="Cont3 min-[500px]:border-b border-[#737373] flex flex-col min-[500px]:flex-row min-[500px]:justify-between">
                        <div>
                            <p className='mt-3 pb-3  border-b border-[#737373] min-[500px]:border-none min-[500px]:min-w-[190px] min-[740px]:w-[70%] min-[740px]:ml-[95px] '>Control who can access this account, view recently used devices , and more.</p>
                        </div>


                        <div className="Cont3-2 ">
                            <div className=' flex justify-between items-center py-3 border-b border-[#737373] text-[##333] min-[500px]:border-none min-[500px]:text-right min-[1000px]:justify-end'><Link className='min-[500px]:text-[#0073e6] lg:text-[18px] hover:underline'>Manage access and devices</Link><Link ><AiOutlineRight className='min-[500px]:hidden' /></Link></div>
                            <div className=' flex justify-between items-center py-3 border-b border-[#737373] text-[##333] min-[500px]:border-none min-[500px]:text-right min-[500px]:justify-end'><Link className='min-[500px]:text-[#0073e6] lg:text-[18px] hover:underline'>Sign out of all devices</Link><Link ><AiOutlineRight className='min-[500px]:hidden' /></Link></div>
                            <div className=' flex justify-between items-center py-3 border-b border-[#737373] text-[##333] min-[500px]:border-none  min-[500px]:text-right min-[1040px]:justify-end'><Link className='min-[500px]:text-[#0073e6] lg:text-[18px] hover:underline'>Download your personal information</Link><Link ><AiOutlineRight className='min-[500px]:hidden' /></Link></div>

                        </div>

                    </div>
                </div>


                <div className=" Contain-4 mt-1  bg-white border-solid border border-[#999] min-[500px]:border-none min-[500px]:bg-[#f3f3f3] max-w-full py-4 px-3 mx-4 relative min-[500px]:px-0 min-[500px]:mx-0 ">
                    <h2 className='uppercase text-[#737373] min-[740px]:float-left min-[740px]:w-[316px] text-[18px] min-[740px]:mt-3 '>profile and parental controls</h2>


                    <div className="Cont4 min-[500px]:border-b border-[#737373] flex flex-col min-[500px]:justify-between">
                        <Profile name="Cool boy" img={cool} />
                        <Profile name="Chicken" img={chicken} />
                        <Profile name="Pretty girl" img={pretty} />
                        <Profile name="Smile face" img={smile} />
                        <Profile name="Enemy" img={accauntİmg} />









                    </div>
                </div>





                <div className=" Contain-5 mt-1  bg-white border-solid border border-[#999] min-[500px]:border-none min-[500px]:bg-[#f3f3f3] max-w-full py-4 px-3 mx-4 relative min-[500px]:px-0 min-[500px]:mx-0 min-[740px]:flex">
                    <h2 className='uppercase text-[#737373] border-b border-gray-500 min-[500px]:border-none pb-4 min-[740px]:mt-3 text-[18px]'>settings</h2>


                    <div className="Cont5-1 min-[740px]:ml-[235px]">
                        <div className=' flex justify-between items-center py-3 border-b border-[#737373] text-[#333] min-[500px]:border-none text-[18px]'><Link className='min-[500px]:text-[#0073e6] capitalize lg:text-[18px] hover:underline'>18+ content <span className='uppercase'>pin</span></Link><Link ><AiOutlineRight className='min-[500px]:hidden' /></Link></div>
                        <div className=' flex justify-between items-center py-3 border-b border-[#737373] text-[#333] min-[500px]:border-none text-[18px] '><Link className='min-[500px]:text-[#0073e6] lg:text-[18px] hover:underline'>Turn off profile transfers</Link><Link ><AiOutlineRight className='min-[500px]:hidden' /></Link></div>
                        <div className=' flex justify-between items-center py-3 border-b border-[#737373] text-[#333] min-[500px]:border-none text-[18px] '><Link className='min-[500px]:text-[#0073e6] lg:text-[18px] hover:underline'>Test participation</Link><Link ><AiOutlineRight className='min-[500px]:hidden' /></Link></div>
                        <div className=' flex justify-between items-center py-3 border-b border-[#737373] text-[#333] min-[500px]:border-none text-[18px] '><Link className='min-[500px]:text-[#0073e6] lg:text-[18px] hover:underline'>Manage download devices</Link><Link ><AiOutlineRight className='min-[500px]:hidden' /></Link></div>

                    </div>

                </div>





            </main>
        </div>
    )
}

export default Accaunt