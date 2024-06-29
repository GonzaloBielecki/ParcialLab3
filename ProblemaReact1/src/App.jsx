import { useState } from 'react'

import './style.css'

function App() {
  const [contraseña1,setContraseña1]=useState("")
  const [contraseña2,setContraseña2]=useState("")
  const [longitud,setLongitud]=useState("red")
  const [numero,setNumero]=useState("red")
  const [especial,setEspecial]=useState("red")
  const [espacio,setEspacio]=useState("red")
  const [coincidecia,setConincidencia] = useState("red")

  
  const enviar =(e)=>{
    e.preventDefault()
    if (contraseña1.length<8){
      setLongitud("red")
    }else if(contraseña1.includes("@","!","$","%","&","#")){
      setEspecial("green")
    }else if(!contraseña1.includes(type(Number))){
      setNumero("red")
    }else if(contraseña1.trim()==""){
      setEspacio("green")
    }
    else{
      setLongitud("green")
      setEspecial("red")
      setNumero("green")
      
    }
    

  }
  
  

  return (
    <>
      <form onSubmit={enviar}>
        <label htmlFor="contraseña">Ingresar Contraseña </label>
        <input type="text" onChange={(e)=>setContraseña1(e.target.value)}/>
        <button type='submit'>ENVIAR</button>
       
        <p style={{color:longitud}}>Mayor a 8 caracteres</p>
        <p style={{color:numero}}> Incluye numero</p>
        <p style={{color:especial}}> incluye caracter especial</p>
        <p style={{color:espacio}}>Contiene Espacios</p>
        <p style={{color:coincidecia}}>Las contraseña coinciden</p>
      </form>

      
    </>
  )
}

export default App
