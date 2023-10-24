import React, {useState} from 'react';
import {AiOutlineMenu,AiOutlineSearch,AiOutlineUsergroupAdd} from 'react-icons/ai';
import {FaCartShopping,FaTruckMoving,FaHeart,FaWallet,FaHandPointRight} from 'react-icons/fa6';
import {IoCloseSharp,IoHelpCircle} from 'react-icons/io5';
import {GiPointing} from 'react-icons/gi';



const Navbar = () => {
const [nav, setNav] = useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* left side */}
        <div className='flex items-center'>
            {/* onclick event to open side drawer menu */}
            <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
                <AiOutlineMenu size={30} />
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl  px-2'>
                Chow <span className='font-bold'>Now</span> 
            </h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] lg:w-[500px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>

        {/* search input */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px]  sm:w-[400px]'>
            <AiOutlineSearch size={25} />
            <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Search Foods' />
        </div>

        {/* cart button */}
        <button className='bg-black text-white md:flex items-center py-2 hidden rounded-full'>
            <FaCartShopping size={25} className='mr-2' /> Cart
        </button>

        {/* mobile menu */}

            {/* overlay */}
        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ""}
        

            {/* side drawer menu */}

                    {/* conditional statement to display side drawer */}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            {/* onclick event to close side drawer menu */}
            <IoCloseSharp
            onClick={()=> setNav(!nav)}
             size={30} 
             className='absolute right-4 top-4 cursor-pointer' 
             />
            <h2 className='text-2xl p-4'>Chow <span className='font-bold'>Now</span></h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl py-4 flex cursor-pointer'> 
                    <FaTruckMoving size={25} className='mr-4' /> Orders
                    </li>
                    <li className='text-xl py-4 flex cursor-pointer'> 
                    <FaHeart size={25} className='mr-4' /> Favorites
                    </li>
                    <li className='text-xl py-4 flex cursor-pointer'> 
                    <FaWallet size={22} className='mr-4' /> Wallet
                    </li>
                    <li className='text-xl py-4 flex cursor-pointer'> 
                    <IoHelpCircle size={30} className='mr-4' /> Help
                    </li>
                    <li className='text-xl py-4 flex cursor-pointer'> 
                    <FaHandPointRight size={25} className='mr-4' /> Promotions
                    </li>
                    <li className='text-xl py-4 flex cursor-pointer'> 
                    <GiPointing size={25} className='mr-4' /> Best One
                    </li>
                    <li className='text-xl py-4 flex cursor-pointer'> 
                    <AiOutlineUsergroupAdd size={25} className='mr-4' /> Invite Friends
                    </li>
                </ul>
            </nav>
        </div>

    </div>
  );
};

export default Navbar;