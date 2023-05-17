import React from 'react'
import { Route, Routes} from 'react-router-dom'
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
                    <Route path='/' element={<Home />} />
                    <Route  path='/accaunt' element={<Accaunt/>}/>
                    <Route  path='/mylist' element={<Mylist/>}/>
                    <Route  path='/:id' element={<CardDetail/>}/>
                    <Route path='/thriller' element={<Thriller />} />
                    <Route path='/animation' element={<Animation />} />
                    <Route path='/international' element={<International />} />
                    <Route  path='/action' element={<Action/>}/>
                    <Route  path='/comedy' element={<Comedy/>}/>
                    <Route  path='/crime' element={<Crime/>}/>
                    <Route  path='/documentary' element={<Documentary/>}/>
                    <Route  path='/drama' element={<Drama/>}/>
                    <Route  path='/europFilms' element={<EuropFilms/>}/>
                    <Route  path='/fantastic' element={<Fantastic/>}/>
                    <Route  path='/horror' element={<Horror/>}/>
                    <Route  path='/kidAndFamily' element={<KidandFamily/>}/>
                    <Route  path='/musicAndMusicals' element={<MusicAndMusicals/>}/>
                    <Route  path='/realityShows' element={<RealityShows/>}/>
                    <Route  path='/romantic' element={<Romantic/>}/>
                    <Route  path='/scientic' element={<Scientic/>}/>
                    <Route  path='/standUp' element={<StandUp/>}/>
                    <Route  path='/help' element={<HelpCenter/>}/>
                </Routes>
    </div>
  )
}

export default Routing