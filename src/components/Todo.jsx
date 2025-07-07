import React, { useContext } from 'react'
import { Todos } from '../context/Context'

function Todo() {
  const { fromData, HandleDelete } = useContext(Todos)

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto px-4 mt-8 space-y-6">
      
      <h2 className="text-3xl font-bold text-purple-600">Your Todos</h2>

      {fromData && fromData.length > 0 ? (
        <div className="flex flex-col w-full space-y-3">
          {fromData.map((data, index) => (
            <div 
              key={index}
              className="flex justify-between items-center bg-purple-100 px-4 py-3 rounded-lg shadow hover:bg-purple-200 transition"
            >
              <span className="text-base font-medium text-gray-800">
                {data.task}
              </span>

              <button 
                onClick={() => HandleDelete(index)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md shadow-sm transition active:scale-95"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-base text-gray-500 font-medium">
          No tasks added yet.
        </p>
      )}
    </div>
  )
}

export default Todo
