import "./style.css";
import About from "../../components/about";
import Projects from "../../components/projects";
import gifWeatherApp from "../../image/gifWeatherApp.gif";
import laCartelera from "../../image/laCarteleraEs.png"



const Home = () => {

  const miProjects = [
    {
      "idProject":"01",
        "title":"Weather App",
        "description":"Es un aplicación que muestra el estado del tiempo en real time, sea en local o de la ciudad ingresada por el usuario, esta app extrae la información climatologica haciendo uso de la API OPENWEATHER.",
        "tecnologies":"HTML, CSS, JavaScript, REACT.",
        "url":"https://weather-1-app.netlify.app",
        "github":"https://github.com/Luis1Gonzalez/weather-app.git",
        "picture":gifWeatherApp
    },

    {
      "idProject":"02",
        "title":"LaCartelera.es",
        "description":"Es un App aplicación para cinefilos, donde se puede ver la cartelera actual y los estrenos, se puede buscar peliculas en especifico y mirar la informacion de esta, tambien se puede obtener los horarios de las proyecciones en los cines cercanos.",
        "tecnologies":"HTML, CSS, JavaScript, REACT, BOOTSTRAP.",
        "url":"https://la-cartelera-es.netlify.app",
        "github":"https://github.com/Luis1Gonzalez/laCarteleraEs.git",
        "picture":laCartelera
    }

]


  return (
    <>
<About />
<br />
<Projects listProjects = {miProjects}/>
</>
  );
};

export default Home;
