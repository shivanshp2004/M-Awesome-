import React, { createContext, useState } from 'react'
export const Context=createContext()
export const ContextProvider = (props) => {
    const [city,setCity]=useState("Bhopal")
    const [finalCity,setFinalCity]=useState(city)
    return (
    <Context.Provider value={{city,setCity,finalCity,setFinalCity}}>
        {props.children}
    </Context.Provider>
  )
}
ContextProvider