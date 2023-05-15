import Carusel from './Carusel';
function Row({ title, dataUrl}) {
    
    
    return (
        <div className='w-full mt-11 ' >
            <h3 className='text-white font-bold md:text-xl p-3'>{title}</h3>
            <Carusel dataUrl={dataUrl}/>
        </div >
    )
    }
    
    export default Row
