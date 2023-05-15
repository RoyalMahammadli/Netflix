import React, { createContext,useState } from 'react'
import { useLocation } from 'react-router-dom'


export const ContextProvider = ({ children }) => {
    const [search,setSearch]=useState("")
    const location=useLocation()
    console.log(location);
   

    const obj = {
        search,
        setSearch
    }
    return (
        <Context.Provider value={obj}>
            {children}
        </Context.Provider>
    )
}
const Context = createContext()
export default Context