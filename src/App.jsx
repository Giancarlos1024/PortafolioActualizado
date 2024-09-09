import './App.css'
import Presentacion from './Presentacion'
import Servicios from './Servicios'
import { Tecnologias } from './Tecnologias'
import { Footer } from './components/Footer'
import Header from './components/Header'

function App() {
  

  return (
    <>
      <Header />
      <Presentacion />
      <Tecnologias />
      <Servicios />
      <Footer />
    </>

  )
}

export default App
