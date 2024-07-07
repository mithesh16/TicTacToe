import React from 'react'

const Tile = ({value,setValue,row,col}) => {
  return (
    <button onClick={()=>setValue(row,col)} className='flex items-center justify-center w-24 h-24 border-2 border-gray-400 text-white text-[40px] cursor-default'>
    {value}
    </button>
  )
}

export default Tile
