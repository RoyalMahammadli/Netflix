import React, { useEffect, useState } from 'react'
import requests from '../../data/MovieData'
import { useParams } from 'react-router-dom'
import {  BsPlayCircle } from 'react-icons/bs'
import myVideo from '../../assets/video/Sherlock Holmes_ A Game of Shadows (2011) - Checkmate Scene (8_10) _ Movieclips.mp4'
import { useRef } from 'react'

function CardDetail() {
  const textRef=useRef()
  const videoref = useRef()
  const playref = useRef()
  const imgref = useRef()
  const handlePlay = () => {
    videoref.current.play()
    // textRef.current.style.marginTop="110px"
    videoref.current.style.display = "flex"
    videoref.current.style.zIndex = "90"
    imgref.current.style.display = "none"
    playref.current.style.display = "none"
  }
  
  const params = useParams()
  const [mydata, setMydata] = useState([])
  useEffect(() => {
    fetch(requests.requestPopular)
      .then(response => response.json())
      .then(data => {
        setMydata(data.results.filter(item => item.id === +params.id)[0])
      })
  }, [params])

  return (
    <div className='mt-[150px] w-[90%] mx-auto '>
      <div className="my-film w-[80%] xl:w-[100%] m-auto xl:flex">
        <div className="left flex justify-center items-center  relative w-full min-w-[150px] max-w-[380px] h-full ">

          <div ref={playref} onClick={handlePlay} className="Play absolute z-50 hover:cursor-pointer "><BsPlayCircle size={34} fill='white' /></div>
        
          <video controls ref={videoref} className='w-full mt-6 absolute hidden xl:mt-[190px]'>
            <source src={myVideo} />
          </video>
          <img ref={imgref} className='w-full h-full ' src={mydata?.backdrop_path?`https://image.tmdb.org/t/p/w500/${mydata?.backdrop_path}` : "https://http.cat/404"} alt={mydata?.title} />

        </div>
        <div ref={textRef} className="right mt-[120px] xl:mt-0">
          <p className='text-[red] p-1 text-xs xl:text-lg'>{mydata?.original_title}</p>
          <p className='text-[grey] p-1 w-[70%] sm:  '> {mydata?.overview}</p>
          <p></p>

        </div>
      </div>

    </div>
  )
}

export default CardDetail