import React, { useContext, useEffect, useRef, useState } from 'react'
import Context from '../Context/Context'

function Input() {
    const { search, setSearch } = useContext(Context)
    const [clicked,setClicked]=useState(false)
    const inputRef = useRef()
    
  useEffect(()=>{
    document.addEventListener("click", (e) => {
        if (e.composedPath().includes(inputRef.current))
            setClicked(true)
            // console.log("Salam iceride");
    })

  },[])
  useEffect(()=>{
    document.addEventListener("click", (e) => {
        if (!e.composedPath().includes(inputRef.current))
            setClicked(false)
            // console.log("Salam colde");
    })

  },[])
    
    return (
        <form onSubmit={(e) => e.preventDefault()} >
            <input ref={inputRef} value={search} onChange={(e) => setSearch(e.target.value)} className={clicked ? ' w-[120px] min-[500px]:w-[180px] min-[1100px]:w-[250px] bg-[#141414] border rounded outline-offset-[1px] outline-[white] border-[#005FCC] outline-none text-white px-2 ':' w-[120px] min-[500px]:w-[180px] min-[1100px]:w-[250px] bg-[#141414] border border-gray-50 outline-none text-white px-2 '} autoFocus type="search" placeholder='Search' />
        </form>
    )
}

export default Input