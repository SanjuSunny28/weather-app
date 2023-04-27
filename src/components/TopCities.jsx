import React from 'react'

const TopCities = ({setQuery}) => {
    const cities=[
        {
            id:1,
            title:"London",
        },

        {
            id:2,
            title:"Paris",
        },

        {
            id:3,
            title:"Tokyo",
        },

        {
            id:4,
            title:"Toronto",
        },

        {
            id:5,
            title:"Cochin",
        },
    ]
  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city)=>(

            <button onClick={()=>setQuery({q : city.title})} key={city.id} className='text-white text-lg font-medium'>{city.title}</button>
        ))}
    </div>
  )
}

export default TopCities