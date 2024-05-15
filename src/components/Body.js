import React from 'react'
import Sidebar from "./Sidebar";
import MainContainer from './MainContainer';
const Body = () => {
  return (
    <div className='flex bg-black w-screen h-screen' >
        <Sidebar/>
        <MainContainer/>
    </div>
  )
}

export default Body