import React, { useContext } from 'react'
import { Todos } from '../context/Context'

function Form() {
  const { register, handleSubmit, HandleData } = useContext(Todos)

  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="flex flex-col items-center w-full max-w-md space-y-6">

        <h1 className="text-3xl sm:text-4xl font-bold font-mono text-purple-600">
          Todo List
        </h1>

        <form 
          onSubmit={handleSubmit(HandleData)}
          className="flex w-full gap-2"
        >
          <input 
            {...register('task')} 
            type="text"
            placeholder="Add a new task..." 
            className="flex-grow h-12 px-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 text-base placeholder-gray-400 outline-none"
          />

          <button 
            type="submit"
            className="h-12 px-4 bg-purple-500 hover:bg-purple-600 text-white rounded-md shadow font-semibold transition active:scale-95"
          >
            Add
          </button>
        </form>

      </div>
    </div>
  )
}

export default Form
