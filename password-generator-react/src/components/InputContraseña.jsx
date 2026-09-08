function InputContraseña(
    {
        password,
        copiado,
        setCopiado,
        error
    }) {

    function copiarPassword() {

        if (password === "") {
            return
        }

        navigator.clipboard.writeText(password)

        setCopiado(true)

        setTimeout(() => {
            setCopiado(false)
        }, 2000)


    }


    return (
        <>
            <h1>Generador de Contraseñas</h1>

            <div className="password-row">
                <input
                    className="password-input"
                    type="text"
                    placeholder="P4$5W0rD!"
                    readOnly
                    value={password}
                />
                <button
                    className="copy-button"
                    onClick={copiarPassword}>Copiar</button>
                {copiado && <span className="copiado">¡Copiado!</span>}

            </div>

            {error && <h3 className='error' >{error}</h3>}
        </>
    )

}

export default InputContraseña;