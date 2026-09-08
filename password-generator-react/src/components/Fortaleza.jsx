function Fortaleza({ puntos }) {

    return (
        <>
            <h2>Fortaleza</h2>

            <div className="fuerza-container">

                <div className={puntos !== null && puntos <= 1 ? "fuerza activa" : "fuerza"}>
                    Muy Débil
                </div>

                <div className={puntos === 2 ? "fuerza activa" : "fuerza"}>
                    Débil
                </div>

                <div className={puntos === 3 ? "fuerza activa" : "fuerza"}>
                    Media
                </div>

                <div className={puntos >= 4 ? "fuerza activa" : "fuerza"}>
                    Fuerte
                </div>

            </div>
        </>
    )

}

export default Fortaleza;