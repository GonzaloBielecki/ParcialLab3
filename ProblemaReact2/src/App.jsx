import { useState } from 'react'
import { useEffect } from 'react'


function App() {
  const [nombre,setNombre]=useState("")
  const [edad,setEdad]=useState(0)
  const [listaPersona,setListaPersona]=useState([])
  const [promedio,setPromedio]=useState(0)
  const [mayor,setMayor]=useState(false)

  const agregarPersona = ()=>{
    setListaPersona([...listaPersona,{"nombre":nombre, "edad":edad}])
    setEdad(0)
    setNombre("")
  }
  useEffect(()=>{
    let suma=0
    listaPersona.forEach((persona)=>{
      suma += persona.edad
      if (persona.edad >17){
        setMayor(true)
        
      }
      
    })
    suma= suma/ listaPersona.length
    setPromedio(suma)
    console.log(suma)
  },[listaPersona])
 

  return (
    <>
      <form>
        <div>
          <label htmlFor="nombre">Ingresar Nombre</label>
          <input type="text" onChange={(e)=>setNombre(e.target.value)}/>
          
        </div>
        <div>
          <label htmlFor="edad">ingresar Edad</label>
          <input type="number" onChange={(e)=>setEdad(Number(e.target.value))}/>
        </div>
        <button type='button' onClick={agregarPersona}>Agregar</button>
        <ul>
            {listaPersona.map((persona,index)=>(
              <li key={index}> {persona.nombre},{persona.edad} </li>
            ))}
        </ul>
        {mayor ? <span>"Existe una persona mayor de edad"</span> : <span>"No existe persona mayor de edad"</span>}
        <br />
        <span>El promedio de edad es: {promedio}</span>
       
        
      </form>
      
      
      
    </>
  )
}

export default App
