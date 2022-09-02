import './style.css';
import { useParams } from "react-router-dom";
import detailWeatherApp from "../../image/detailWeatherApp.png"


import React from 'react'

const Details = () => {

const { title } = useParams();


let tittle = "";
let description = ""
let tecnologies = "";
let url = "";
let github = "";
let detailPicture=""


switch (title) {

case 'Weather App':

tittle= "Weather App";
description=
  "Es un aplicación que muestra el estado del tiempo en real time, sea en local o de la ciudad ingresada por el usuario, esta app extrae la información climatologica haciendo uso de la API OPENWEATHER.";
tecnologies= "HTML, CSS, JavaScript y REACT.";
url= "https://weather-1-app.netlify.app";
github= "https://github.com/Luis1Gonzalez/weather-app.git";
detailPicture=detailWeatherApp

break;

case 'LaCartelera.es':

    tittle= "LaCartelera.es";
    description=
      "Es un App aplicación para cinefilos, donde se puede ver la cartelera actual y los estrenos, se puede buscar peliculas en especifico y mirar la informacion de esta, tambien se puede obtener los horarios de las proyecciones en los cines cercanos.";
    tecnologies= "HTML, CSS, JavaScript, REACT y BOOTSTRAP.";
    url= "https://la-cartelera-es.netlify.app";
    github= "https://github.com/Luis1Gonzalez/laCarteleraEs.git";

    break;

    case 'Barra Libre 45':

        tittle= "Barra Libre 45";
        description=
          "Barra Libre 45 es una App donde a través del consumo del API de .thecocktaildb se muestra fichas de cocteles junto a sus ingredientes y forma de preparación, en la app se puede pasar a través de las páginas para encontrar algún coctel que se desee o se puede buscar por su nombre.";
        tecnologies= "HTML, CSS, JavaScript, REACT, BOOTSTRAPy SASS.";
        url= "https://barra-libre-45.netlify.app/";
        github= "https://github.com/Luis1Gonzalez/barra-libre-45";

    break;

    
    case 'ZuccherosCakes':

        tittle= "ZuccherosCakes";
        description=
          "La página desarrollada para la empresa de repostería Zucheros Cake ubicada en Santiago de Chile, es de tipo informativa, muestra lo mejor de su trabajo y sus productos más recientes, al igual que ofrece la información de contacto.";
        tecnologies= "HTML, CSS y BOOTSTRAP";
        url= "https://zuccheroscakes.netlify.app/index.html";
        github= "https://github.com/Luis1Gonzalez/zuccheroscakes";

    break;

    default:
        console.log('No tengo');
        break;
}

  return (

        <div className="wrap__details d-flex flex-column flex-wrap col-12 mx-0 py-2 px-2">

<div className='wrap__tittle my-2 bg-dark'>
    <h3>{tittle}</h3>
    </div>

    <div className="wrap__detailImg">
        <img src={detailPicture} alt="imagen de la App" />
    </div>

<div className='wrap__description my-2 bg-warning d-flex flex-wrap'>
    <p>{description}</p>
    </div>

<div className='tecnologies my-2 bg-success'>
    <p>{tecnologies}</p>
    </div>

<div className='wrap__github my-2 bg-primary'>
    <p>{url}</p>
    </div>

<div className='wrap__github my-2 bg-secondary'>
    <p>{github}</p>
    </div>

    </div>
  );

  
}

export default Details