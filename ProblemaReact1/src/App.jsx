import { useState } from 'react'
import { useEffect } from 'react'

import './style.css'

function App() {
  const [contraseña1,setContraseña1]=useState("")
  const [contraseña2,setContraseña2]=useState("")
  const [deshabilitarBoton,setDeshabilitarBoton]=useState(true)

  const longitud = ()=>{
    if(contraseña1.length>7){
      return true
    }
  }

  const contieneNum=()=>{
    if(contraseña1.includes("0") || contraseña1.includes("1")|| contraseña1.includes("2")||contraseña1.includes("3")
      ||contraseña1.includes("4") ||contraseña1.includes("5")|| contraseña1.includes("6") || contraseña1.includes("7")
      || contraseña1.includes("8") || contraseña1.includes("9")){
      return true
    }
  }

  const contieneSignos=()=>{
    if(contraseña1.includes("!")||contraseña1.includes("$")||contraseña1.includes("@")||contraseña1.includes("%")
      ||contraseña1.includes("&")||contraseña1.includes("#")){
      return true
    }

  }
  const sinEspacio = ()=>{
    if(!contraseña1.includes(" ")){
      return true
    }
  }

  const coinciden=()=>{
    if(contraseña1==contraseña2){
      return true
    }
  }
  const habilitar = ()=>{
    if((coinciden()&& sinEspacio() && contieneSignos() && contieneNum() && longitud())==true){
      setDeshabilitarBoton(false)
     
    }else{
      setDeshabilitarBoton(true)
    }
  }
  useEffect(()=>habilitar(),[contraseña1,contraseña2])

  const mostrar =()=>{
    alert("Contraseñas Correctas")
  }
 

  return (
    <>
      <form>
        <div>
          <label htmlFor="contraseña">Ingresar Contraseña </label>
          <input type="password" onChange={(e)=>setContraseña1(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="contraseña2">Ingresar Contraseña Nuevamente</label>
          <input type="password" onChange={(e)=>setContraseña2(e.target.value)} />
        </div>
        <p style={{"color":longitud() ? "green":"red"}}>Mayor a 8 caracteres</p>
        <p style={{"color": contieneNum() ? "green":"red"}}>Incluye numero</p>
        <p style={{"color":contieneSignos()? "green":"red"}}>Incluye caracter especial</p>
        <p style={{"color":sinEspacio()? "green" : "red"}}>Contiene Espacios</p>
        <p style={{"color": coinciden()? "green":"red"}}>Las contraseña coinciden</p>
        <button disabled={deshabilitarBoton} onClick={mostrar}>Validar</button>
      </form>

      
    </>
  )
}

export default App
