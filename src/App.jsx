import './App.css'
import Presentacion from './Presentacion'
import { ProyectosRealizados } from './ProyectosRealizados'
import Servicios from './Servicios'
import { Tecnologias } from './Tecnologias'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Fondo3D from './Fondo3D' // Importamos tu nuevo fondo 3D

function App() {
  return (
    <>
      {/* El fondo se coloca aquí para que cubra toda la pantalla de fondo */}
      <Fondo3D />
      
      <Header />
      <Presentacion />
      <Tecnologias />
      <ProyectosRealizados />
      <Servicios />
      <Footer />
    </>
  )
}

export default App;