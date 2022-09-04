import './style.css';
import { useParams } from "react-router-dom";
import detailWeatherApp from "../../image/detailsWeatherApp1.png";
import detailWeatherApp2 from "../../image/detailsWeatherApp2.png";
import detailLaCarteleraEs from "../../image/detailsLaCarteleraEs.png";
import detailLaCarteleraEs2 from "../../image/detailsLaCarteleraEs2.png";
import detailLaBarraLibre45 from "../../image/detailsLaBarraLibre45.png";
import detailLaBarraLibre452 from "../../image/detailsLaBarraLibre452.png";
import detailZuccherosCakes from "../../image/detailsZuccherosCakes.png";
import detailZuccherosCakes2 from "../../image/detailsZuccherosCakes2.png";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { Link } from 'react-router-dom';


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
tecnologies= "Para el desarrollo de esta App se obtuvieron los datos climatológicos haciendo uso de la API de OPENWEATHER quienes proveen servicios meteorológicos muy amplio tanto en real time como predicciones e históricas. Para el desarrollo de esta aplicación se hizo uso de HTML, CSS; JavaScript y REACT JS.";
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
      "LaCarteleraEs Es una App para cinéfilos, donde se puede ver la cartelera actual y los próximos estrenos, igualmente se puede buscar películas en específico y mirar la informacion de esta tal como su año de publicación, presupuesto, recaudación, director, casas productoras, duración, tráilers y una sinopsis todo esto en castellano o inglés. Otra funcionalidad de la aplicación es poder acceder a los horarios de las proyecciones en los cines en un radio de 30km.";
    tecnologies= "Para esta App se obtienen los datos actualizados de la API de The Movie Data Base (TMDB) que provee los datos relativos a cada película tanto en cartelera como los estrenos y de la API de International Show Times (API de pago) se obtiene la cartelera de los cines cercanos a la ubicación del dispositivo utilizado para la búsqueda. Por otra parte cabe destacar que esta App cuenta con multi tema y multi lenguaje. Para el desarrollo de esta App se utilizó HTML, CSS, JavaScript, REACT JS y BOOTSTRAP.";
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
          "Barra Libre 45 es una App para la preparación de cocteles donde se muestra un listado de 100 bebidas alcohólicas o no alcohólicas inicialmente ordenadas en cards con una paginación de diez (10) bebidas por página mostrando la imagen de los cocteles y su nombre, en esta página inicial también se encuentra un buscador para filtrar las bebidas por su nombre. Al usuario hace click sobre alguna coctel la aplicación le dará en el detalle de esta bebida, mostrándole la imagen de la bebida, su tipo, su categoría, sus ingredientes y las instrucciones para su preparación.";
        tecnologies= "Barra Libre 45 obtiene sus datos de la API de THECOCKTAILDB que es una Api gratuita que provee informacion de cocteles y varias formas de hacer peticiones como por ejemplo por nombre, tipo, ingredientes, entre otros y está desarrollada haciendo uso de HTML, CSS, JavaScript, REACT JS, BOOTSTRAP Y SASS.";
        tecIcons1=<ImHtmlFive />;
tecIcons2=<SiCss3 />;
tecIcons3=<SiJavascript />;
tecIcons4=<SiReact />;
tecIcons5=<SiBootstrap />;
tecIcons6=<FaSass />;
        url= "https://barra-libre-45.netlify.app/";
        github= "https://github.com/Luis1Gonzalez/barra-libre-45";
        detailPicture=detailLaBarraLibre45
        detailPicture2=detailLaBarraLibre452

    break;

    
    case 'ZuccherosCakes':

        tittle= "Zuccheros Cakes";
        description=
          "Esta página fue desarrollada para la empresa de reposteria Zuccheros Cakes ubicada en Santiago de Chile, es una página informativa donde la empresa pretende mantener actualizada a su clientela publicando sus últimas creaciones y novedades, al igual que sus promociones y alguna otra información que motive el consumo de sus productos, además de servir de canal directo de comunicación con todos aquellos que deseen contactarles.";
        tecnologies= "En la maquetación de esta página se utilizó HTML, CSS Y BOOTSTRAP y las fotos de los productos utilizadas fueron seleccionadas y suministradas por la misma empresa al igual que comentarios y listado de clientes.";
        tecIcons1=<ImHtmlFive />;
tecIcons2=<SiCss3 />;
tecIcons3=<></>;
tecIcons4=<></>;
tecIcons5=<SiBootstrap />;
tecIcons6=<></>;
        url= "https://zuccheroscakes.netlify.app/index.html";
        github= "https://github.com/Luis1Gonzalez/zuccheroscakes";
        detailPicture=detailZuccherosCakes
        detailPicture2=detailZuccherosCakes2

    break;

    default:
        console.log('No tengo');
        break;
}

  return (

        <div className="wrap__details d-flex flex-column flex-md-row flex-wrap col-12 mx-0 py-2 px-2 align-items-center">

<div className='wrap__tittle my-2 text-center w-100 p-2 my-2'>
    <h2 className='mb-0'>{tittle}</h2>
    </div>

    <div className="wrap__detailImg mb-3 my-1 d-flex">
        <img src={detailPicture} alt="imagen de la App" />
    </div>

<div className='wrap__description my-1 d-flex flex-wrap py-2 px-4'>
    <p>{description}</p>
    </div>

    <div className="wrap__detailImg2 mb-3 my-1 d-flex">
        <img src={detailPicture2} alt="imagen de la App" />
    </div>

<div className='wrap__tecnologies my-1 py-2 px-4'>
    <p>{tecnologies}</p>
    </div>

<div className='wrap__tecIcons d-flex justify-content-start'>
    <div className="tIcons iconHtml mx-2">{tecIcons1 ? tecIcons1 : ""}</div>
    <div className="tIcons icons iconCss mx-2">{tecIcons2 ? tecIcons2 : ""}</div>
    <div className="tIcons iconJs mx-2">{tecIcons3 ? tecIcons3 : ""}</div>
    <div className="tIcons iconReact mx-2">{tecIcons4 ? tecIcons4 : ""}</div>
    <div className="tIcons iconBootstrap mx-2">{tecIcons5 ? tecIcons5 : ""}</div>
    <div className="tIcons iconSass mx-2">{tecIcons6 ? tecIcons6 : ""}</div>
</div>

<div className='wrap__web my-2 w-100 d-flex justify-content-end pe-3'>
    <p><a href={url}>{tittle}</a></p>
    </div>

<div className='wrap__github my-2 w-100 d-flex justify-content-end pe-3'>
    <p><a href={github}>GitHub</a></p>
    </div>

    <button className='btn btn__back border mb-3'><Link className="back" to = '/'>Volver</Link></button>

    </div>



  );

  
}

export default Details