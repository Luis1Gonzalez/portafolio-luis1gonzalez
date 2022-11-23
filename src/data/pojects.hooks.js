import React from 'react'
import fotoWeatherApp from '../image/fotoWeatherApp.png'
import laCartelera from "../image/fotoLaCarteleraEs.png";
import barralibre45 from "../image/fotoBarraLibre45.png";
import zuccherosCakes from "../image/fotoZuccherosCakes.png"
import fotoTikTacApp from "../image/fotoTikTacApp.png"
import fotoEuroMecanica from "../image/fotoEuroMecanica.png"
import fotoControlGastos from "../image/fotoControlGastos.png"
import fotoCryptoCalculator from "../image/fotoCryptoCalculator.png"

const useProjects = () => {

  const miProjects = [
    {
      "id": 1,
      "title": "CryptoCalculator",
      "picture": fotoCryptoCalculator,
    },

    {
      "id": 2,
      "title": "Control de Gastos",
      "picture": fotoControlGastos,
    },

    {
      "id": 3,
      "title": "EuroMecánica",
      "picture": fotoEuroMecanica,
    },

    {
      "id": 4,
      "title": "Weather App",
      "picture": fotoWeatherApp,
    },


    {
      "id": 5,
      "title": "TIK-TAC",
      "picture": fotoTikTacApp,
    },

    {
      "id": 6,
      "title": "LaCartelera.es",
      "picture": laCartelera,
    },

    {
      "id": 7,
      "title": "Barra Libre 45",
      "picture": barralibre45,
    },

    {
      "id": 8,
      "title": "ZuccherosCakes",
      "picture": zuccherosCakes,
    }
  ];

  return [miProjects]
}

export default useProjects