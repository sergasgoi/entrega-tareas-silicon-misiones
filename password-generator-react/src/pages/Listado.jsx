import { useState } from 'react'
import Nav from '../components/Nav'
import HistorialContraseñas from '../components/HistorialContraseñas'

function Listado() {

  const [passwords, setPasswords] = useState(
    JSON.parse(localStorage.getItem("passwords")) || []
  )


  return (
    <main>
      <section className="card">

        <Nav />

        <HistorialContraseñas
          passwords={passwords}
          setPasswords={setPasswords}
        />

      </section>
    </main>
  )
}

export default Listado