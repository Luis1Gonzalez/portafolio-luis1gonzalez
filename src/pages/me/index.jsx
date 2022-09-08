import './style.css';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { DiGit } from "react-icons/di";
import { BsGithub } from "react-icons/bs";
import { FaSourcetree } from "react-icons/fa";

const Me = () => {

    const [t, i18n] = useTranslation("global");

  return (
    <div className="wrap__me py-2 px-2">
    <p className=''>{t('me.about')}</p>

    <div className="wrap__extract px-2 px-sm-5">
        <p className='my-5'>{t('me.me1')}</p>
        <p className='my-5'>{t('me.me2')}</p>
        <p className='my-5'>{t('me.me3')}</p>

        <div className="wrap__icons">
            <div className="icons__tecnologies d-flex flex-column flex-sm-row flex-wrap justify-content-sm-around">
              <div className="tecnology d-flex align-items-center my-2 mx-2 py-1 col-sm-5 col-md-3">
                <ImHtmlFive className="icon col-3" />
                <div className="fw-bold">HTML5</div>
              </div>

              <div className="tecnology d-flex align-items-center my-2 mx-2 py-1 col-sm-5 col-md-3">
                <SiCss3 className="icon col-3" />
                <div className="fw-bold">CSS3</div>
              </div>

              <div className="tecnology d-flex align-items-center my-2 mx-2 py-1 col-sm-5 col-md-3">
                <SiJavascript className="icon col-3" />
                <div className="fw-bold">JavaScript</div>
              </div>

              <div className="tecnology d-flex align-items-center my-2 mx-2 py-1 col-sm-5 col-md-3">
                <SiReact className="icon col-3" />
                <div className="fw-bold">REACT JS</div>
              </div>

              <div className="tecnology d-flex align-items-center my-2 mx-2 py-1 col-sm-5 col-md-3">
                <SiBootstrap className="icon col-3" />
                <div className="fw-bold">BOOTSTRAP</div>
              </div>

              <div className="tecnology d-flex align-items-center my-2 mx-2 py-1 col-sm-5 col-md-3">
                <FaSass className="icon col-3" />
                <div className="fw-bold">SASS</div>
              </div>

              <div className="tecnology d-flex align-items-center my-2 mx-2 py-1 col-sm-5 col-md-3">
                <DiGit className="icon col-3" />
                <div className="fw-bold">GIT</div>
              </div>

              <div className="tecnology d-flex align-items-center my-2 mx-2 py-1 col-sm-5 col-md-3">
                <BsGithub className="icon col-3" />
                <div className="fw-bold">GITHUB</div>
              </div>

              <div className="tecnology d-flex align-items-center my-2 mx-2 py-1 col-sm-5 col-md-3">
                <FaSourcetree className="icon col-3" />
                <div className="fw-bold">SOURCETREE</div>
              </div>
            </div>
          </div>

    </div>

    <button className='btn btn__back border mb-3 ms-3 my-5'><Link className="back" to = '/'>{t("details.back")}</Link></button>

    </div>
  )
}

export default Me