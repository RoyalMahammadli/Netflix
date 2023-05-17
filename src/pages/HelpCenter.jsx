import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo-icon.png'
import { BsCaretDownFill } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineRight } from 'react-icons/ai'
import N_Icon from '../assets/img/N-icon.png'
import RecommendItem from './RecommendItem'
import CategoryItems from './CategoryItems'
import QuickItems from './QuickItems'

function HelpCenter() {
  const [accaunt, setAccaunt] = useState(false)
  const handleAccaunt = () => {
    setAccaunt(!accaunt)
  }



  return (
    <div className='w-full '>
      <header className='py-4 px-2 bg-black   top-0 w-full z-[99] min-[600px]:px-[30px] min-[600px]:py-[35px] '>
        <nav className='flex justify-between min-[740px]:px-8 min-[740px]:py-[9px] relative'>
          <div className="left-side flex items-center">

            <div onClick={() => window.location.reload(true)} className=' absolute cursor-pointer w-[125px] min-[600px]:w-[135px] min-[1200px]:w-[140px]'><Link to='/'><img className='hidden min-[600px]:flex' src={logo} alt="netflix logo" />
            </Link></div>
            <div onClick={() => window.location.reload(true)} className='absolute cursor-pointer w-[45px] min-[800px]:w-[120px]'><Link to='/'><img className='w-full min-[600px]:hidden' src={N_Icon} alt="N-logo" />

            </Link></div>

          </div>

          <div className="right-side">

            <Link onClick={handleAccaunt} className='flex items-center mr-3'>
              <div className="flex "><p className='myName text-[#f5f5f1] text-base  xl:text-[18px]'>Enemy</p></div>
              <div className="chevron  ml-1"><BsCaretDownFill fill='red' size={20} /></div>
            </Link>






            <div className={!accaunt ? "fixed top-[-100%]" : "content-box w-[187px]   bg-white absolute  top-[40px] right-[10px] min-[600px]:right-[15px] min-[740px]:right-[50px]  min-[600px]:top-[50px] xl:right-[45px] z-50 rounded  "}>
              <ul className='text-[#221f1f] p-4 capitalize text-[16px] xl:text-[18px] '>

                <li className='lia1 hover:underline'><Link className='flex items-center' to='/home/accaunt'>account <span className='ml-2'><AiOutlineRight className='a1' fill='red' /></span ></Link></li>
                <li className='lia2 pt-2 hover:underline'><Link className='flex items-center justify-between' >sign<span className='lowercase'>out of</span> netflix <span ><AiOutlineRight className='a2' fill='red' /></span></Link></li>

              </ul>

            </div>
          </div>

        </nav>
        <div className="help-search pl-3 pt-3 min-[600px]:text-center">
          <h1 className='text-white capitalize text-[32px] font-semibold min-[1200px]:text-[38px]'>help center</h1>
          <div className="input-div  mt-3 px-4 py-2 w-full flex bg-white rounded border min-[600px]:w-[66%] min-[600px]:mx-auto border-[#8b8a88] ">
            <div className="icon "><BiSearchAlt size={28} fill='gray' /></div>

            <input className='border-none outline-none w-full pl-2
            ' type="search" placeholder='What do you need help with?' />
          </div>
        </div>

      </header>
      <main className=''>
        <div className="recomended bg-[#FAFAFA] py-9 px-5 min-[740px]:px-[60px] border-b border-gray-300">
          <p className='text-[#221f1f]'>Recomended for you</p>
          <div className="recom-box min-[750px]:flex min-[750px]:gap-4 mt-6">
            <RecommendItem text='How to keep your account secure' />
            <RecommendItem text='Parental controls on Netflix' />
            <RecommendItem text='How to change your plan' />
          </div>

        </div>
        <div className="manage py-10 bg-[#FFFF] min-[740px]:px-[45px] min-[900px]:flex  min-[1340px]:w-full ">
          <div className="category px-5 min-[1340px]:flex">
            <div className="categ-1 min-[600px]:flex justify-between">
              <CategoryItems headTxt='manage my account' pTxt1='Plans and Pricing' pTxt2='I received an email stating there was a new sign-in to my account' pTxt3='How to change your plan' />
              <CategoryItems headTxt="can't watch" pTxt1='How to change your Netflix password' pTxt2='Netflix says to sign up when trying to sign in' pTxt3="Netflix says 'This app is not compatible with your device'. " />
            </div>
            <div className="categ-2 min-[600px]:flex justify-between">
              <CategoryItems headTxt="billing questions" pTxt1='How to pay for Netflix' pTxt2='Billing and Payments' pTxt3="Netflix Gift Cards " />
              <CategoryItems headTxt="watching netflix" pTxt1='How to create,change,or delete profiles' pTxt2='How to watch Netflix on your TV' pTxt3="How to download titles to watch offline" />

            </div>
          </div>
          <div className="quick-links px-5 max-[600px]:w-[51%] ">
          <h2 className='font-bold text-2xl capitalize my-7 min-[1200px]:text-xl'>quick links</h2>
            <QuickItems/>
          </div>


        </div>
        <section className='bg-[#FAFAFA] py-7 px-5 min-[900px]:px-[70px] xl:px-[70px] '>
          <div className="contact-us min-[900px]:flex min-[900px]:justify-between min-[900px]:items-center xl:w-[1150px] xl:mx-auto ">
            <div className="contact-txt"><h3 className='font-bold text-xl pb-6 min-[900px]:text-2xl'>Want to contact us?</h3></div>
            <div className="call flex flex-col min-[700px]:flex-row min-[700px]:justify-between">
              <button className='contact-btn min-[700px]:w-[48%] min-[700px]:p-[10px] min-[900px]:p-[4px] min-[900px]:mr-5'>call us</button>
              <button className='contact-btn min-[700px]:w-[48%] min-[700px]:p-[10px] min-[900px]:w-[210px]'>start live chat</button>
            </div>

          </div>

        </section>
      </main>

    </div>
  )
}

export default HelpCenter