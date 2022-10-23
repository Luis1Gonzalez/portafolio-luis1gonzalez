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
import detailTikTac1 from "../../image/detailsTikTac1.png"
import detailTikTac2 from "../../image/detailsTikTac2.png"
import detailEuroMecanica from "../../image/detailsEuroMecanica.png"
import detailEuroMecanica2 from "../../image/detailsEuromecanica2.png"
import measureEuroMecanica from "../../image/measureEuroMecanica.png"
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";


import React from 'react'

const Details = () => {

    const { title } = useParams();
    const [t, i18n] = useTranslation("global");

    let tittle = "";
    let description = "";
    let tecnologies = "";
    let url = "";
    let github = "";
    let detailPicture = "";
    let detailPicture2 = "";
    let measure ="";
    let measureDescription="";
    let tecIcons1 = "";
    let tecIcons2 = "";
    let tecIcons3 = "";
    let tecIcons4 = "";
    let tecIcons5 = "";
    let tecIcons6 = "";
    let tecIcons7 = "";


    switch (title) {

        case 'EuroMecánica':

            tittle = "Talleres EuroMecánica";
            description = t('details.descriptionEuroMecanica');
            tecnologies = t('details.tecnologiesEuroMecanica');
            tecIcons1 = <ImHtmlFive />;
            tecIcons2 = <SiCss3 />;
            tecIcons3 = <SiJavascript />;
            tecIcons4 = <SiReact />;
            tecIcons5 = <></>;
            tecIcons6 = <></>;
            tecIcons7 = <SiTailwindcss />;
            url = "https://talleres-euromecanica.netlify.app/";
            github = "https://github.com/Luis1Gonzalez/euroMecanica";
            detailPicture = detailEuroMecanica
            detailPicture2 = detailEuroMecanica2
            measure=measureEuroMecanica
            measureDescription ="https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Ftalleres-euromecanica.netlify.app%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext"
            break;

        case 'Weather App':

            tittle = "Weather App";
            description = t('details.descriptionWeatherApp');
            tecnologies = t('details.tecnologiesWeatherApp');
            tecIcons1 = <ImHtmlFive />;
            tecIcons2 = <SiCss3 />;
            tecIcons3 = <SiJavascript />;
            tecIcons4 = <SiReact />;
            tecIcons5 = <></>;
            tecIcons6 = <></>;
            url = "https://weather-1-app.netlify.app";
            github = "https://github.com/Luis1Gonzalez/weather-app.git";
            detailPicture = detailWeatherApp
            detailPicture2 = detailWeatherApp2
            break;

        case 'TIK-TAC':
            tittle = "Tik-Tac";
            description = t('details.descriptionTikTac');
            tecnologies = t('details.tecnologiesTikTac');
            tecIcons1 = <ImHtmlFive />;
            tecIcons2 = <SiCss3 />;
            tecIcons3 = <SiJavascript />;
            tecIcons4 = <SiReact />;
            tecIcons5 = <></>;
            tecIcons6 = <></>;
            url = "https://tik-tac.netlify.app/";
            github = "https://github.com/Luis1Gonzalez/tik-tac";
            detailPicture = detailTikTac1
            detailPicture2 = detailTikTac2
            break;

        case 'LaCartelera.es':

            tittle = "LaCartelera.es";
            description = t('details.descriptionLaCarteleraEs');
            tecnologies = t('details.tecnologiesLaCarteleraEs');
            tecIcons1 = <ImHtmlFive />;
            tecIcons2 = <SiCss3 />;
            tecIcons3 = <SiJavascript />;
            tecIcons4 = <SiReact />;
            tecIcons5 = <SiBootstrap />;
            tecIcons6 = <></>;
            url = "https://la-cartelera-es.netlify.app";
            github = "https://github.com/Luis1Gonzalez/laCarteleraEs.git";
            detailPicture = detailLaCarteleraEs
            detailPicture2 = detailLaCarteleraEs2

            break;

        case 'Barra Libre 45':

            tittle = "Barra Libre 45";
            description = t('details.descriptionBarraLibre45');
            tecnologies = t('details.tecnologiesBarraLibre45');
            tecIcons1 = <ImHtmlFive />;
            tecIcons2 = <SiCss3 />;
            tecIcons3 = <SiJavascript />;
            tecIcons4 = <SiReact />;
            tecIcons5 = <SiBootstrap />;
            tecIcons6 = <FaSass />;
            url = "https://barra-libre-45.netlify.app/";
            github = "https://github.com/Luis1Gonzalez/barra-libre-45";
            detailPicture = detailLaBarraLibre45
            detailPicture2 = detailLaBarraLibre452

            break;


        case 'ZuccherosCakes':

            tittle = "Zuccheros Cakes";
            description = t('details.descriptionZuccherosCakes');
            tecnologies = t('details.tecnologiesZuccherosCakes');
            tecIcons1 = <ImHtmlFive />;
            tecIcons2 = <SiCss3 />;
            tecIcons3 = <></>;
            tecIcons4 = <></>;
            tecIcons5 = <SiBootstrap />;
            tecIcons6 = <></>;
            url = "https://zuccheroscakes-cl.netlify.app/";
            github = "https://github.com/Luis1Gonzalez/zucherosCakes";
            detailPicture = detailZuccherosCakes
            detailPicture2 = detailZuccherosCakes2

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

            <div className="wrap__lightHoouseImg mb-3 my-1 d-flex">
                <img src={measure} alt="imagen de la medición" />
            </div>

            <div className='wrap__lighthouse my-1 py-2 px-4 d-flex justify-content-end w-100'>
                <p><a href={measureDescription}>Medición según LightHouse</a></p>
            </div>

            

            <div className='wrap__tecIcons d-flex justify-content-start'>
                <div className="tIcons iconHtml mx-2">{tecIcons1 ? tecIcons1 : ""}</div>
                <div className="tIcons icons iconCss mx-2">{tecIcons2 ? tecIcons2 : ""}</div>
                <div className="tIcons iconJs mx-2">{tecIcons3 ? tecIcons3 : ""}</div>
                <div className="tIcons iconReact mx-2">{tecIcons4 ? tecIcons4 : ""}</div>
                <div className="tIcons iconBootstrap mx-2">{tecIcons5 ? tecIcons5 : ""}</div>
                <div className="tIcons iconSass mx-2">{tecIcons6 ? tecIcons6 : ""}</div>
                <div className="tIcons iconTailwind mx-2">{tecIcons6 ? tecIcons7 : ""}</div>
            </div>

            <div className='wrap__web my-2 w-100 d-flex justify-content-end pe-3'>
                <p><a href={url} target="_blank" rel="noopener noreferrer">{tittle}</a></p>
            </div>

            <div className='wrap__github my-2 w-100 d-flex justify-content-end pe-3'>
                <p><a href={github} target="_blank" rel="noopener noreferrer">GitHub</a></p>
            </div>

            <button className='btn btn__back border mb-3 ms-3'><Link className="back" to='/'>{t("details.back")}</Link></button>

        </div>



    );


}

export default Details