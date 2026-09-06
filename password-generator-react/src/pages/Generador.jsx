import { useState } from 'react'
import Opciones from '../components/Opciones';
import Slider from '../components/Slider';
import InputContraseña from '../components/InputContraseña';
import Fortaleza from '../components/Fortaleza';
import BotonGenerar from '../components/BotonGenerar';
import Nav from '../components/Nav';

function Generador() {

    const [longitud, setLongitud] = useState(10)
    const [conMayusculas, setConMayusculas] = useState(false);
    const [conMinusculas, setConMinusculas] = useState(false);
    const [conNumeros, setConNumeros] = useState(false);
    const [conSimbolos, setConSimbolos] = useState(false);
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [puntos, setPuntos] = useState(null)
    const [copiado, setCopiado] = useState(false)

    return (
        <main>
            <section className="card">

                <Nav/>

                <InputContraseña
                    password={password}
                    copiado={copiado}
                    setCopiado={setCopiado}
                    error={error}
                />

                <Slider
                    longitud={longitud}
                    setLongitud={setLongitud}
                />

                <Opciones
                    setConMayusculas={setConMayusculas}
                    setConMinusculas={setConMinusculas}
                    setConNumeros={setConNumeros}
                    setConSimbolos={setConSimbolos}
                />

                <Fortaleza
                    puntos={puntos}
                />

                <BotonGenerar
                    conMayusculas={conMayusculas}
                    conMinusculas={conMinusculas}
                    conNumeros={conNumeros}
                    conSimbolos={conSimbolos}
                    setPuntos={setPuntos}
                    setError={setError}
                    setPassword={setPassword}
                    longitud={longitud}
                />

            </section>
        </main>
    )
}

export default Generador;