import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* card */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Rice and Sauce Combo</p>
                <p className='px-2'>served in portion</p>
                <button className='border-white bg-white text-green-700 mx-2 absolute bottom-4 right-4'>Order Now</button>
            </div>
            {/* img */}
            <img className='max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGJsYWNrJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&w=500" alt="/" 
            />
        </div>

        {/* card */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Daily Special</p>
                <p className='px-2'>Added Daily</p>
                <button className='border-white bg-white text-green-700 mx-2 absolute bottom-4 right-4'>Order Now</button>
            </div>
            {/* img */}
            <img className='max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.pexels.com/photos/551997/pexels-photo-551997.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" 
            />
        </div>

        {/* card */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>We Deliver Pizza</p>
                <p className='px-2'>Tasty pizza's with different toppings</p>
                <button className='border-white bg-white text-green-700 mx-2 absolute bottom-4 right-4'>Order Now</button>
            </div>
            {/* img */}
            <img className='max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" 
            />
        </div>
    </div>
  )
}

export default HeadlineCards