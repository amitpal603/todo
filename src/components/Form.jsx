import React, { useContext } from 'react'
import { Todos } from '../context/Context'

function Form() {
  const { register, handleSubmit, HandleData,fromData, HandleDelete } = useContext(Todos)

  return (
    <div className="min-h-screen flex justify-center items-center pt-5 bg-gray-50 flex-col mb-11">
      <div className="flex flex-col gap-8 items-center w-full max-w-md">
        
        <h1 className="text-3xl font-bold font-mono text-purple-600">Todos..</h1>

        <form 
          onSubmit={handleSubmit(HandleData)}
          className="flex w-full gap-2 px-4"
        >
          <input 
            {...register('task')} 
            className="flex-grow h-12 px-4 border-2 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 text-base placeholder-gray-400"
            type="text" 
            placeholder="Add Todos.." 
          />

          <button 
            type="submit"
            className="h-12 px-4 bg-purple-500 hover:bg-purple-600 text-white rounded-md shadow-md font-semibold transition active:scale-95"
          >
            Add
          </button>
          
        </form>
      </div>


      <div className="  flex flex-col items-center pt-4 px-4">
      <h2 className="text-2xl font-bold text-purple-600 mb-4">Your Todos</h2>

      {fromData && fromData.length > 0 ? (
        <div className="flex flex-col gap-2 w-full max-w-md ">
          {fromData.map((data, index) => (
            <div 
              key={index}
              className="flex justify-between items-center px-4 py-2 gap-20 bg-purple-200 rounded-md shadow hover:bg-purple-300 transition"
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
    </div>
  )
}

export default Form
