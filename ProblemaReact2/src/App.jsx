import { useState } from 'react'

import './App.css'

function App() {
  const [persona,setPersona]=useState({
    "nombre":"",
    "edad":0
  })
  const [listaPersona,setListaPersona]=useState([""])

  const agregar = (e)=>{
    e.preventDefault()
    setListaPersona([...listaPersona,persona])
  }
  console.log(listaPersona)

  return (
    <>
      <form onSubmit={agregar}>
        <label htmlFor="nombre">Ingresar Nombre</label>
        <input type="text" onChange={(e)=>setPersona({...pesona,"nombre":e.target.value})}/>
        <label htmlFor="edad">ingresar Edad</label>
        <input type="number" onChange={(e)=>setPersona({...persona,"edad":e.target.value})}/>
        <button type='submit'>Agregar</button>
      </form>
      
      
      
    </>
  )
}

export default App
