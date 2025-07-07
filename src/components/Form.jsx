import React, { useContext } from 'react'
import { Todos } from '../context/Context'

function Form() {
  const {register,handleSubmit,HandleData,setForm} = useContext(Todos)
  
  
  return (
    <div className="min-h-screen flex justify-center items-start pt-20 bg-gray-50">
      <div className="flex flex-col gap-12 items-center w-full max-w-md">
        
        <h1 className="text-4xl font-bold font-mono text-purple-600">Todos..</h1>

        <form 
          onSubmit={ handleSubmit((data) => HandleData(data))}
          className="flex w-full gap-4 px-4" action="">
          
          <input 
            onChange={(data) => setForm(data) }
            className="flex-grow h-14 px-20 pl-5 border-2 border-gray-400 rounded-lg shadow-md focus:outline-purple-500 text-lg placeholder-gray-500"
            type="text" 
            placeholder="Add Todos.." 
          />

          <input 
            className="h-14 px-6 bg-purple-500 hover:bg-purple-600 shadow-purple-400 text-white rounded-lg shadow-lg font-semibold cursor-pointer transition duration-200"
            type="submit" 
            value="Add Task" 
          />
          
        </form>
      </div>
    </div>
  )
}

export default Form
