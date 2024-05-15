import React from 'react';
import { useDispatch } from 'react-redux';
import {toggleMenu} from "../reducers/appSlice";

const Header= () => {
  const dispatch = useDispatch();

  return (
    <div className='flex  bg-black'> 
        <div className='flex w-[20%]'>
            <img onClick={()=> {dispatch(toggleMenu())}} alt="menu logo" className='cursor-pointer w-[50px] m-4 py-2 h-16 rounded-xl' src ="https://png.pngtree.com/png-vector/20190120/ourmid/pngtree-menu-vector-icon-png-image_470444.jpg"/>
       
             <img className='w-[120px] m-4 py-2 h-16 rounded-xl' alt="" src ="https://as1.ftcdn.net/v2/jpg/03/00/38/90/1000_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"/>

        </div>
        <div className='m-2 w-[60%] flex' >
            <input className='border-gray border bg-black my-4 w-[75%] rounded-xl' placeholder="What do you want to search for.?" value="" type='text'/>
            <button className='bg-gray-400 text-white my-4 rounded-r-xl w-20'>  Search</button>
        </div>
        <div className=' w-[20%] m-4'>
            <img className='w-10 text-right ml-40' src="https://as2.ftcdn.net/v2/jpg/05/09/59/75/1000_F_509597532_RKUuYsERhODmkxkZd82pSHnFtDAtgbzJ.jpg"/>
        </div>

    </div>
  )
}

export default Header;