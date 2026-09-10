"use client"
import { useEffect, useState } from "react";

export default function Home() {


  const [tablero, setTablero] = useState(crearTablero);
  const [evaluando, setEvaluando] = useState(false);
  const [movimientos, setMovimientos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [jugando, setJugando] = useState(false);

  function nuevaPartida() {
    setTablero(crearTablero());
    setMovimientos(0);
    setSegundos(0);
    setJugando(false);
    setEvaluando(false);
  }

  function crearTablero() {

    const valores = [1, 2, 3, 4, 5, 6, 7, 8];

    const duplicados = [...valores, ...valores];

    const mezclados = duplicados.sort(() => Math.random() - 0.5);

    const tablero = mezclados.map((num, indice) => ({
      id: indice,
      valor: num,
      dadaVuelta: false,
      encontrada: false
    }))

    return tablero;

  }

  function darVuelta(id) {

    if (evaluando) {
      return;
    }

    const cartaSeleccionada = tablero.find(
      (carta) => carta.id === id
    );

    if (cartaSeleccionada.dadaVuelta || cartaSeleccionada.encontrada) {
      return;
    };

    if (!jugando) {
      setJugando(true);
    }

    const nuevoTablero = tablero.map((carta) => {

      if (carta.id === id) {
        return {
          ...carta,
          dadaVuelta: true
        };
      };

      return carta;

    });

    setTablero(nuevoTablero);

  }

  useEffect(() => {

    const dadasVuelta = tablero.filter(
      (carta) => carta.dadaVuelta && !carta.encontrada
    );

    if (dadasVuelta.length !== 2) {
      return;
    }

    setMovimientos((movimientosActuales) => movimientosActuales + 1);

    setEvaluando(true);

    const [carta1, carta2] = dadasVuelta;

    if (carta1.valor === carta2.valor) {

      setTablero((tableroActual) =>
        tableroActual.map((carta) => {

          if (carta.id === carta1.id || carta.id === carta2.id) {
            return {
              ...carta,
              encontrada: true,
              dadaVuelta: false
            };
          }

          return carta;
        })
      );

      setEvaluando(false);

    } else {

      const timer = setTimeout(() => {

        setTablero((tableroActual) =>
          tableroActual.map((carta) => {

            if (carta.id === carta1.id || carta.id === carta2.id) {
              return {
                ...carta,
                dadaVuelta: false
              };
            }

            return carta;
          })
        );

        setEvaluando(false);

      }, 1000);

      return () => clearTimeout(timer);
    }

  }, [tablero]);

  useEffect(() => {

    if (!jugando) {
      return;
    }

    const intervalo = setInterval(() => {
      setSegundos((segundosActuales) => segundosActuales + 1);
    }, 1000);

    return () => clearInterval(intervalo);

  }, [jugando]);

  useEffect(() => {

    const gano = tablero.every(
      (carta) => carta.encontrada
    );

    if (gano) {
      setJugando(false);
    }

  }, [tablero]);

  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = segundos % 60;

  const tiempoFormateado =
    `${minutos}:${segundosRestantes.toString().padStart(2, "0")}`;

  const gano = tablero.every((carta) => carta.encontrada);

  if (gano) {
    return (
      <main className="tarjeta">
        <section className="victoria">
          <h1>¡Lo lograste!</h1>

          <p>
            Tiempo: <strong>{tiempoFormateado}</strong>
          </p>

          <p>
            Movimientos: <strong>{movimientos}</strong>
          </p>

          <button onClick={nuevaPartida}>
            Jugar de nuevo
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="tarjeta">
      <header>
        <h1>Memory</h1>

        <button  onClick={nuevaPartida}>
          Nueva Partida
        </button>
      </header>

      <section className="tablero">
        {tablero.map((carta) => (
          <button
            className="carta"
            key={carta.id}
            onClick={() => darVuelta(carta.id)}
          >
            {(carta.dadaVuelta || carta.encontrada) ? carta.valor : ""}
          </button>
        ))}
      </section>

      <footer>
        <div className="tiempo">
          <span>Tiempo</span>
          <strong>{tiempoFormateado}</strong>
        </div>

        <div className="movimientos">
          <span>Movimientos</span>
          <strong>{movimientos}</strong>
        </div>
      </footer>
    </main>
  );
}