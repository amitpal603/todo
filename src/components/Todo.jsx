import React, { useContext } from 'react'
import { Todos } from '../context/Context'

function Todo() {
  const { fromData, HandleDelete } = useContext(Todos)

  return (
    <div className="  flex flex-col items-center pt-4 px-4">
      <h2 className="text-2xl font-bold text-purple-600 mb-4">Your Todos</h2>

      {fromData && fromData.length > 0 ? (
        <div className="flex flex-col gap-2 w-full max-w-md ">
          {fromData.map((data, index) => (
            <div 
              key={index}
              className="flex justify-between items-center px-4 py-2 bg-purple-200 rounded-md shadow hover:bg-purple-300 transition"
            >
              <span className="text-base font-medium text-gray-800">
                {data.task}
              </span>

              <button 
                onClick={() => HandleDelete(index)}
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md shadow-sm transition active:scale-95"
              >
                x
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-base text-gray-500 font-medium mt-4">
          No tasks added yet.
        </p>
      )}
    </div>
  )
}

export default Todo
