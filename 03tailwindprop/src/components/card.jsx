import React from 'react'

function card({username,btnText="click"}) {
    console.log(username) 
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
    <img
      src="https://images.pexels.com/photos/31056966/pexels-photo-31056966/free-photo-of-beautiful-cherry-blossoms-in-springtime.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
      alt=""
      className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
    />
    <div className="mt-6 mb-2">
      <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
        {username}
      </span>
      <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
    </div>
    <p className="text-gray-300">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
      amet
    </p>
    <button className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md">
      {btnText}
      </button>
  </div>
  )
}

export default card
