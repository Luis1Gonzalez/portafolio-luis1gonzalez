import "./style.css";
import React from "react";
import { SiInternetexplorer } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import fotoWeatherApp from '../../image/fotoWeatherApp.png'
import laCartelera from "../../image/fotoLaCarteleraEs.png";
import barralibre45 from "../../image/fotoBarraLibre45.png";
import zuccherosCakes from "../../image/fotoZuccherosCakes.png";

const Projects = (listProjects) => {


  const miProjects = [
    {
      "idProject":"01",
        "title":"Weather App",
        "description":"Es un aplicación que muestra el estado del tiempo en real time, sea en local o de la ciudad ingresada por el usuario, esta app extrae la información climatologica haciendo uso de la API OPENWEATHER.",
        "tecnologies":"HTML, CSS, JavaScript y REACT.",
        "url":"https://weather-1-app.netlify.app",
        "github":"https://github.com/Luis1Gonzalez/weather-app.git",
        "picture":fotoWeatherApp
    },

    {
      "idProject":"02",
        "title":"LaCartelera.es",
        "description":"Es un App aplicación para cinefilos, donde se puede ver la cartelera actual y los estrenos, se puede buscar peliculas en especifico y mirar la informacion de esta, tambien se puede obtener los horarios de las proyecciones en los cines cercanos.",
        "tecnologies":"HTML, CSS, JavaScript, REACT y BOOTSTRAP.",
        "url":"https://la-cartelera-es.netlify.app",
        "github":"https://github.com/Luis1Gonzalez/laCarteleraEs.git",
        "picture":laCartelera
    },

    {
      "idProject":"03",
        "title":"Barra Libre 45",
        "description":"Barra Libre 45 es una App donde a través del consumo del API de .thecocktaildb se muestra fichas de cocteles junto a sus ingredientes y forma de preparación, en la app se puede pasar a través de las páginas para encontrar algún coctel que se desee o se puede buscar por su nombre.",
        "tecnologies":"HTML, CSS, JavaScript, REACT, BOOTSTRAPy SASS.",
        "url":"https://barra-libre-45.netlify.app/",
        "github":"https://github.com/Luis1Gonzalez/barra-libre-45",
        "picture":barralibre45
    },

    {
      "idProject":"04",
        "title":"ZuccherosCakes",
        "description":"La página desarrollada para la empresa de repostería Zucheros Cake ubicada en Santiago de Chile, es de tipo informativa, muestra lo mejor de su trabajo y sus productos más recientes, al igual que ofrece la información de contacto.",
        "tecnologies":"HTML, CSS y BOOTSTRAP",
        "url":"https://zuccheroscakes.netlify.app/index.html",
        "github":"https://github.com/Luis1Gonzalez/zuccheroscakes",
        "picture":zuccherosCakes
    },

]


  return (
    <div className="wrap__project  col-12 mx-0 py-2 px-2">
      <div className="project__title col-12 mx-1 d-flex align-items-center py-2">
        <p className="m-0">Mis Proyectos</p>
      </div>

      <div className="wrap__cards px-4 py-2 d-flex flex-wrap justify-content-around">
        {miProjects.map((p) => (
          <div className="card mx-2 my-2 p-2 col-12 col-sm-5 col-md-3" key={p.idProject}>
            <div className="card__img rounded d-flex flex-wrap justify-content-center py-2"><a href={p.url}>
              <img src={p.picture} alt="imagen de la app"/>
              </a></div>

<div className=" wrap__git d-flex align-items-center justify-content-around">  
            
              <div className="link-icons my-2 text-center"><a href={p.github}><SiGithub /></a></div>
            
            
            <p className="linkHref my-2 fs-2">{p.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
