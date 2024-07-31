import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import {Context} from './Context'
const Input = () => {
    const context=useContext(Context)
  return (
    <>
    <input className='border-2 hover:bg-gray-200 border-black ml-[30px] w-[300px] p-[7px] bg-gray-100 h-[45px] rounded-xl'
    placeholder='Search Your City'
    onChange={(e)=>{
        context.setCity(e.target.value)
    }}
    onKeyDown={(event)=>{
      if(event.key==='Enter') document.getElementById('submit-btn').click();
    }}
    >
    </input>
    <button id='submit-btn' className='p-2 mt-[6px] ml-[35px] border-2 border-black bg-gray-100 w-[90px] h-[35px] flex justify-center items-center hover:w-[91px] hover:h-[37px] hover:bg-gray-400 rounded-xl'
    onClick={()=> {
        context.setFinalCity(context.city)
    }}
    >
        Search
    </button>
    </>
  )
}
export default Input