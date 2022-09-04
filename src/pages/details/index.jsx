import './style.css';
import { useParams } from "react-router-dom";
import detailWeatherApp from "../../image/detailsWeatherApp1.png";
import detailWeatherApp2 from "../../image/detailsWeatherApp2.png";
import detailLaCarteleraEs from "../../image/detailsLaCarteleraEs.png";
import detailLaCarteleraEs2 from "../../image/detailsLaCarteleraEs2.png";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { FaSass } from "react-icons/fa";


import React from 'react'

const Details = () => {

const { title } = useParams();


let tittle = "";
let description = "";
let tecnologies = "";
let url = "";
let github = "";
let detailPicture="";
let detailPicture2="";
let tecIcons1="";
let tecIcons2="";
let tecIcons3="";
let tecIcons4="";
let tecIcons5="";
let tecIcons6="";


switch (title) {

case 'Weather App':

tittle= "Weather App";
description=
  "WeatherApp es una aplicación responsive que muestra el estado del tiempo en real time, sea en local geolocalizando el dispositivo bajo previa autorización del usuario o mostrando el tiempo de la ciudad ingresada por el usuario en un formulario que tiene dos inputs, uno para ingresar el nombre de la ciudad y el segundo (opcional) para introducir el país ya que el nombre de la ciudad pudiese estar repetido en alguna otra parte del mundo."
tecnologies= "Para el desarrollo de esta App se obtuvieron los datos climatológicos haciendo uso de la API de OPENWEATHER quienes proveen servicios meteorológicos muy amplio tanto en real time como predicciones e históricas. Para el desarrollo de esta aplicación se hizo uso de HTML, CSS; JavaScript y React.";
tecIcons1=<ImHtmlFive />;
tecIcons2=<SiCss3 />;
tecIcons3=<SiJavascript />;
tecIcons4=<SiReact />;
tecIcons5=<></>;
tecIcons6=<></>;
url= "https://weather-1-app.netlify.app";
github= "https://github.com/Luis1Gonzalez/weather-app.git";
detailPicture=detailWeatherApp
detailPicture2=detailWeatherApp2

break;

case 'LaCartelera.es':

    tittle= "LaCartelera.es";
    description=
      "Es un App aplicación para cinefilos, donde se puede ver la cartelera actual y los estrenos, se puede buscar peliculas en especifico y mirar la informacion de esta, tambien se puede obtener los horarios de las proyecciones en los cines cercanos.";
    tecnologies= "HTML, CSS, JavaScript, REACT y BOOTSTRAP.";
    tecIcons1=<ImHtmlFive />;
tecIcons2=<SiCss3 />;
tecIcons3=<SiJavascript />;
tecIcons4=<SiReact />;
tecIcons5=<SiBootstrap />;
tecIcons6=<></>;
    url= "https://la-cartelera-es.netlify.app";
    github= "https://github.com/Luis1Gonzalez/laCarteleraEs.git";
    detailPicture=detailLaCarteleraEs
detailPicture2=detailLaCarteleraEs2

    break;

    case 'Barra Libre 45':

        tittle= "Barra Libre 45";
        description=
          "Barra Libre 45 es una App donde a través del consumo del API de .thecocktaildb se muestra fichas de cocteles junto a sus ingredientes y forma de preparación, en la app se puede pasar a través de las páginas para encontrar algún coctel que se desee o se puede buscar por su nombre.";
        tecnologies= "HTML, CSS, JavaScript, REACT, BOOTSTRAPy SASS.";
        tecIcons1=<ImHtmlFive />;
tecIcons2=<SiCss3 />;
tecIcons3=<SiJavascript />;
tecIcons4=<SiReact />;
tecIcons5=<SiBootstrap />;
tecIcons6=<FaSass />;
        url= "https://barra-libre-45.netlify.app/";
        github= "https://github.com/Luis1Gonzalez/barra-libre-45";

    break;

    
    case 'ZuccherosCakes':

        tittle= "ZuccherosCakes";
        description=
          "La página desarrollada para la empresa de repostería Zucheros Cake ubicada en Santiago de Chile, es de tipo informativa, muestra lo mejor de su trabajo y sus productos más recientes, al igual que ofrece la información de contacto.";
        tecnologies= "HTML, CSS y BOOTSTRAP";
        tecIcons1=<ImHtmlFive />;
tecIcons2=<SiCss3 />;
tecIcons3=<></>;
tecIcons4=<></>;
tecIcons5=<></>;
tecIcons6=<></>;
        url= "https://zuccheroscakes.netlify.app/index.html";
        github= "https://github.com/Luis1Gonzalez/zuccheroscakes";

    break;

    default:
        console.log('No tengo');
        break;
}

  return (

        <div className="wrap__details d-flex flex-column flex-lg-row flex-wrap col-12 mx-0 py-2 px-2 align-items-center">

<div className='wrap__tittle my-2 text-center w-100 p-2 my-2'>
    <h2 className='mb-0'>{tittle}</h2>
    </div>

    <div className="wrap__detailImg mb-3 my-1 d-flex">
        <img src={detailPicture} alt="imagen de la App" />
    </div>

<div className='wrap__description my-1 d-flex flex-wrap'>
    <p>{description}</p>
    </div>

    <div className="wrap__detailImg2 mb-3 my-1 d-flex">
        <img src={detailPicture2} alt="imagen de la App" />
    </div>

<div className='wrap__tecnologies my-1'>
    <p>{tecnologies}</p>
    </div>

<div className='wrap__tecIcons d-flex justify-content-start'>
    <div className="iconHtml mx-2">{tecIcons1 ? tecIcons1 : ""}</div>
    <div className="iconCss mx-2">{tecIcons2 ? tecIcons2 : ""}</div>
    <div className="iconJs mx-2">{tecIcons3 ? tecIcons3 : ""}</div>
    <div className="iconReact mx-2">{tecIcons4 ? tecIcons4 : ""}</div>
    <div className="iconBootstrap mx-2">{tecIcons5 ? tecIcons5 : ""}</div>
    <div className="iconSass mx-2">{tecIcons6 ? tecIcons6 : ""}</div>
</div>

<div className='wrap__web my-2 w-100 d-flex justify-content-end pe-3'>
    <p><a href={url}>{tittle}</a></p>
    </div>

<div className='wrap__github my-2 w-100 d-flex justify-content-end pe-3'>
    <p><a href={github}>GitHub</a></p>
    </div>

    </div>
  );

  
}

export default Details