import { Routes, Route } from 'react-router-dom'
import Generador from './pages/Generador'
import Listado from './pages/Listado'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Generador />} />
        <Route path="/listado" element={<Listado />} />
      </Routes>
    </>
  )
}

export default App