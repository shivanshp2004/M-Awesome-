import { useState } from 'react'
import Input from "./Components/Input"
import Card from './Components/Card'
function App() {
  return (
    <div className='w-full h-screen bg-[#e9c46a] max-sm:h-screen max-sm:overflow-hidden'>
    <div className='flex w-full h-[80px] bg-[#344e41] justify-center items-center text-white text-[1.8rem]'>
      <h1 className='text-white font-bold text-[2.2rem]'>M(Awesome).com</h1>
    </div>
      <p className='font-semibold text-[1.5rem] mt-[10px] ml-[33px]'>Search City -</p>
    <div className='w-[410px] h-[40px] mt-[10px] flex flex-wrap '>
      <Input/>
    </div>
    <Card/>
    </div>
  )
}

export default App
