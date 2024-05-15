import React from 'react'
import Subscriptions from './Subscriptions';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isOpen  = useSelector(store => store.app.isOpen);

  if(!isOpen) return null;
  console.log(isOpen)

  return (
    <div className='flex-col w-[100px] m-6 border'>
     <div className='m-4 w-12'><img alt="home" src="https://cdn.vectorstock.com/i/1000v/87/37/home-icon-logo-design-simple-house-vector-36658737.avif"/></div> 
     <div> <Subscriptions/></div>
    </div>
  )
}

export default Sidebar