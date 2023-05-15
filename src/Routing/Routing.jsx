import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Thriller from '../pages/Thriller'
import International from '../pages/International'
import Animation from '../pages/Animation'
import Action from '../pages/Action'
import Comedy from '../pages/Comedy'
import Crime from '../pages/Crime'
import Documentary from '../pages/Documentary'
import Drama from '../pages/Drama'
import EuropFilms from '../pages/EuropFilms'
import Fantastic from '../pages/Fantastic'
import Horror from '../pages/Horror'
import KidandFamily from '../pages/KidandFamily'
import MusicAndMusicals from '../pages/MusicAndMusicals'
import RealityShows from '../pages/RealityShows'
import Romantic from '../pages/Romantic'
import Scientic from '../pages/Scientic'
import StandUp from '../pages/StandUp'
import HelpCenter from '../pages/HelpCenter'
import Mylist from '../pages/Mylist'
import CardDetail from '../Components/Uİ/CardDetail'
import Accaunt from '../pages/Accaunt'


function Routing() {
  return (
    <div>
         <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route  path='/home/accaunt' element={<Accaunt/>}/>
                    <Route  path='/home/mylist' element={<Mylist/>}/>
                    <Route  path='/home/:id' element={<CardDetail/>}/>
                    <Route path='/home/thriller' element={<Thriller />} />
                    <Route path='/home/animation' element={<Animation />} />
                    <Route path='/home/international' element={<International />} />
                    <Route  path='/home/action' element={<Action/>}/>
                    <Route  path='/home/comedy' element={<Comedy/>}/>
                    <Route  path='/home/crime' element={<Crime/>}/>
                    <Route  path='/home/documentary' element={<Documentary/>}/>
                    <Route  path='/home/drama' element={<Drama/>}/>
                    <Route  path='/home/europFilms' element={<EuropFilms/>}/>
                    <Route  path='/home/fantastic' element={<Fantastic/>}/>
                    <Route  path='/home/horror' element={<Horror/>}/>
                    <Route  path='/home/kidAndFamily' element={<KidandFamily/>}/>
                    <Route  path='/home/musicAndMusicals' element={<MusicAndMusicals/>}/>
                    <Route  path='/home/realityShows' element={<RealityShows/>}/>
                    <Route  path='/home/romantic' element={<Romantic/>}/>
                    <Route  path='/home/scientic' element={<Scientic/>}/>
                    <Route  path='/home/standUp' element={<StandUp/>}/>
                    <Route  path='/help' element={<HelpCenter/>}/>
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
    </div>
  )
}

export default Routing