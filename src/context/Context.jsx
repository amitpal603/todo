import React, { createContext, useState } from 'react'
import { useForm } from 'react-hook-form'

 export const Todos = createContext() 

 export function Context({children}) {

  const [fromData,setForm] = useState([])
  const {register,handleSubmit,reset} = useForm()

   const HandleData = (todata) =>{
       setForm([...fromData,todata])
      reset()
   }

  
   const  HandleDelete = (id) =>{
      const updateTodo = fromData.filter((_,index) => index !== id)
      setForm(updateTodo)
   }
    const value = {
        register,handleSubmit,HandleData
        ,fromData,HandleDelete
    }
  return <Todos.Provider value={value}>{children}</Todos.Provider>
}

export default Context
