import Opcion from "./Opcion"

function Opciones(
    {
        setConMayusculas,
        setConMinusculas,
        setConNumeros,
        setConSimbolos
    }) {

    return (<>
        <h2>Opciones</h2>
        <div className="options">

            <Opcion
                texto="Incluir Mayúscula"
                setOpcion={setConMayusculas}
            />

            <Opcion
                texto="Incluir Minúscula"
                setOpcion={setConMinusculas}
            />

            <Opcion
                texto="Incluir Número"
                setOpcion={setConNumeros}
            />

            <Opcion
                texto="Incluir Símbolos"
                setOpcion={setConSimbolos}
            />

        </div>
    </>

    )
}

export default Opciones;