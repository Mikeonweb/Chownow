import React, {useState} from 'react'
import {data} from '../data/data.js'

const Food = () => {
  const [foods, setFoods] = useState(data)
    
  //Filter Type e.g Chicken,Salad ETC
  // the filterType takes in a category and updates the food state to the filter using a filter array method to the item category and then making sure the category matches the category being passed in
  const filterType = (category) => {
    setFoods(
      data.filter( (item) => {
        //making sure the category is equal to category being passed in
        return item.category === category
      })
    )
  }

  //filter by price
  // the same logic used for filter type applies here
  const filterPrice = (price) => {
    setFoods(
      data.filter( (item) => {
        return item.price === price
      })
    )
  }

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-green-600 font-bold text-4xl text-center'>Our Food Menu</h1>

        {/* filter row */}
        <div className='flex flex-col lg:flex-row justify-between'>


          {/* filter type  */} 
                                  {/* use onClick event to hookup button with filterType */}
          <div>
              <p className='font-bold text-gray-700'>Filter Type</p>
              <div className='flex justify-between flex-wrap'>
                <button onClick={()=> setFoods(data)} className='text-green-600 border-green-600 hover:bg-green-900 hover:text-white lg:m-1'>All</button>
                <button onClick={()=> filterType('swallow')} className='text-green-600 border-green-900 hover:bg-green-900 hover:text-white lg:m-1'>Swallow</button>
                <button onClick={()=> filterType('rice')} className='text-green-600 border-green-600 hover:bg-green-900 hover:text-white lg:m-1'>Rice</button>
                <button onClick={()=> filterType('other')} className='text-green-600 border-green-600 hover:bg-green-900 hover:text-white lg:m-1'>Other</button>
                <button onClick={()=> filterType('salad')} className='text-green-600 border-green-600 hover:bg-green-900 hover:text-white lg:m-1'>Salads</button>
                <button onClick={()=> filterType('chicken')} className='text-green-600 border-green-600 hover:bg-green-900 hover:text-white lg:m-1'>Chicken</button>
              </div>
          </div>

          {/* filter price */}
                                  {/* use onClick event to hookup button with filterPrice */}
          <div>
              <p className='font-bold text-gray-700'>Filter Price</p>
              <div className='flex justify-between max-w-[390px] w-full'>
                <button onClick={()=> filterPrice('$')} className='text-green-600 border-green-600 hover:bg-green-900 hover:text-white lg:m-1'>$</button>
                <button onClick={()=> filterPrice('$$')} className='text-green-600 border-green-600 hover:bg-green-900 hover:text-white lg:m-1'>$$</button>
                <button onClick={()=> filterPrice('$$$')} className='text-green-600 border-green-600 hover:bg-green-900 hover:text-white lg:m-1'>$$$</button>
                <button onClick={()=> filterPrice('$$$$')} className='text-green-600 border-green-600 hover:bg-green-900 hover:text-white lg:m-1'>$$$$</button>
              </div>
          </div>
        </div>

        {/* display foods */}
        {/* fetching data from json file in data.js using useState */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
          {/* item in map is just a given name and can be anyname that suits your app */}
            {foods.map((item, index)=> (
              <div key={index} className='border rounded-lg shadow-lg hover:scale-105 duration-300'>
                {/* calling image to display */}
                  <img src={item.image} alt={item.name} 
                    className='w-full h-[200px] object-cover rounded-t-lg'
                  />
                  <div className='flex justify-between px-2 py-4'>
                    {/* calling name to display */}
                      <p className='font-bold'>{item.name}</p>
                      <p>
                        <span className='bg-red-500 text-white p-1 rounded-full'>{item.price}</span>
                      </p>
                  </div>
              </div>
            ) )}
        </div>

    </div>
  );
};

export default Food;