import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListaPaciente from "./components/ListaPaciente"
function App() {

  const [ pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect(() =>{
    localStorage.setItem("pacientes", JSON.stringify( pacientes ));
  },[pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);

    setPaciente(pacientesActualizados)
  }
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
        />
        <ListaPaciente
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente ={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
