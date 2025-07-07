import React, { useContext } from 'react'
import { Todos } from '../context/Context'

function Todo() {
  const { fromData,HandleDelete } = useContext(Todos)
console.log(fromData);

  return (
    
    <div className="flex justify-center items-start mt-10">
      <div className="flex flex-col gap-4 w-full max-w-md px-4">

        {fromData && fromData.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {fromData.map((data, index) => (
              <li 
                key={index}
                className="flex justify-between items-center h-16 px-4 bg-purple-300 rounded-md shadow-lg list-none"
              >
                <span className="font-medium text-gray-800">{data.task}</span>
                
                <button 
                onClick={() => HandleDelete(index)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md shadow-md transition"
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-2xl text-red-500 font-bold text-center">
            Add todos...
          </p>
        )}

      </div>
    </div>
  )
}

export default Todo
