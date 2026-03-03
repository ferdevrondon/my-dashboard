
"use client";
import React, { useState } from 'react'

export const CartCounter = () => {
    const [count, setCount] = useState(10)
  return (
    <>
     <span className="text-9xl">{count}</span>
     <div className="flex">
        <button
          className="flex items-center justify-center rounded-xl p-2 bg-gray-900 text-white hover:bg-gray-600 transition-all w-24 mr-2"
          onClick={() => setCount(count + 1)}
        >
          Agregar
        </button>
        <button
          className="flex items-center justify-center rounded-xl p-2 bg-gray-900 text-white hover:bg-gray-600 transition-all w-24 mr-2"
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
        >
          Remover
        </button>
      </div>
    </>
    
  )
}
