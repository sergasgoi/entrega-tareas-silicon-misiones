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
        
        <div className="historial">

            <h2>Últimas Contraseñas</h2>

            {passwords.length === 0 && (
                <h3 className="sin-passwords">
                    No hay contraseñas guardadas
                </h3>
            )}

            {passwords.map((pass, i) => (
                <div className="password-guardada" key={i}>

                    <span>{pass}</span>

                    <button onClick={() => borrarPassword(i)}>
                        Borrar
                    </button>

                </div>
            ))}
        </div>

    )

}

export default HistorialContraseñas;