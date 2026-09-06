function HistorialContraseñas(
    { 
        passwords, 
        setPasswords 
    }) {

    function borrarPassword(indice) {
        let nuevoListado = passwords.filter(
            (password, index) => index !== indice
        )

        setPasswords(nuevoListado)

        localStorage.setItem(
            "passwords",
            JSON.stringify(nuevoListado)
        )
    }

    return (
        <>
            <h1>Últimas Contraseñas</h1>

            {passwords.length === 0 && (
                <h3 className="sin-passwords">
                    No hay contraseñas guardadas
                </h3>
            )}

            <div className="historial">
                {passwords.map((pass, i) => (
                    <div className="password-guardada" key={i}>

                        <span>{pass}</span>

                        <button onClick={() => borrarPassword(i)}>
                            Borrar
                        </button>

                    </div>
                ))}
            </div>
        </>
    )

}

export default HistorialContraseñas;