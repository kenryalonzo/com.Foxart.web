import React from 'react'

const Container = () => {
  return (
    <div>
      <button className='bg-linear-to-r from-purple-500 to-blue-500
        hover:from-purple-600
                    hover:to-blue-600 focus:outline-hidden focus:ring-3
                    focus:ring-purple-300
                    active:bg-blue-700 px-6 py-3 rounded-lg
                    text-white font-semibold
                    shadow-md transition duration-300 ease-in-out
                    transform hover:scale-105'>
            Click Me
        </button>
    </div>
  )
}

export default Container
