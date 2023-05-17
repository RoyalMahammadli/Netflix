
import { ContextProvider } from '../Context/Context'
import Navbar from '../Components/Uİ/Navbar'
import Routing from '../Routing/Routing'
import Footer from '../Components/Uİ/Footer'
import { useLocation } from 'react-router-dom'

function Mainlayout() {
    const location = useLocation()


    return (
        <div className=''>
            <ContextProvider>
                {(location.pathname !== "/help" && location.pathname !== "/home/accaunt") && <Navbar />}
                <Routing />
                <Footer />
            </ContextProvider>
        </div>
    )
}

export default Mainlayout