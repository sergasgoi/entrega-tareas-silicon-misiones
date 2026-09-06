function BotonGenerar(
    { 
        conMayusculas, 
        conMinusculas, 
        conNumeros,
        conSimbolos,
        setPuntos,
        setError,
        setPassword,
        longitud,

     }){

    function generarPasword() {

        let permitidos = ""
        let puntosNuevos = 0

        if (conMayusculas) {
            permitidos += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            puntosNuevos++
        };
        if (conMinusculas) {
            permitidos += "abcdefghijklmnopqrstuvwxyz"
            puntosNuevos++
        };
        if (conNumeros) {
            permitidos += "0123456789"
            puntosNuevos++
        };
        if (conSimbolos) {
            permitidos += "!@#$%^&*"
            puntosNuevos++
        }
        if (longitud >= 12) puntosNuevos++;

        setPuntos(puntosNuevos);
        setError("")
        setPassword("")

        if (longitud === 0) {
            setError("La longitud debe ser Mayor a 0");
        }

        if (permitidos === "") {
            setError("Se debe marcar una opcion");
        }
        else {
            let newPassword = "";
            for (let i = 0; i < longitud; i++) {
                newPassword += permitidos[Math.floor(Math.random() *
                    permitidos.length)]
            }

            setPassword(newPassword);

            guardarPassword(newPassword)

        }
        if (longitud === 0 && permitidos === "") {
            setError("La longitud debe ser Mayor a 0 y Se debe marcar una Opcion");
        }

    }

    function guardarPassword(passwordNueva) {

        let historial = JSON.parse(localStorage.getItem("passwords")) || []

        historial.unshift(passwordNueva)

        historial = historial.slice(0, 5)

        localStorage.setItem("passwords", JSON.stringify(historial))
    }

    return (
        <button
            type="button"
            className="generate-button"
            onClick={generarPasword}>
            Generar
        </button>
    )

}

export default BotonGenerar;