import "./style.css";

import { MdMarkEmailRead } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { GrTwitter } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiFolderDownloadFill } from "react-icons/ri";
import cvLuisGonzalez from "../../image/cvLuisGonzalez.pdf";
import { CgPhone } from "react-icons/cg";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

import { useTranslation } from "react-i18next";

import React from "react";

const MobileLink = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="Wrap__MobileLink p-4">
      <h1>Enlace Movil</h1>

      <h5 className="my-3">¿Que deseas hacer?</h5>

      <div className="wrap__social">

       

     

        <div className="wrap__social call d-flex align-items-center my-2 border">
          <span className="w-25 text-center">
            <CgPhone />
          </span>
          <a className="w-75 text-start" href="tel:+34645081201">
            Lamar a mi movil
          </a>
        </div>

        <div className="wrap__social whatsapp d-flex align-items-center my-2 border">
          <span className="w-25 text-center">
            <IoLogoWhatsapp className="wind" />
          </span>
          <a className="w-75 text-start" href="https://wa.me/34645081201">
            Pasarme un Whatsapp
          </a>
        </div>

        <div className="wrap__social linkedin d-flex align-items-center my-2 border">
          <span className="w-25 text-center">
            <ImLinkedin />
          </span>
          <a
            className="w-75 text-start"
            href="http://www.linkedin.com/in/luis1gonzalez"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visitar mi Linkedin
          </a>
        </div>

        <div className="wrap__social twitter d-flex align-items-center my-2 border">
          <span className="w-25 text-center">
            <GrTwitter />
          </span>
          <a
            className="w-75 text-start"
            href="https://twitter.com/luisgonzalez246"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visitar mi Twitter
          </a>
        </div>

        <div className="wrap__social github d-flex align-items-center my-2 border">
          <span className="w-25 text-center">
            <BsGithub />
          </span>
          <a
            className="w-75 text-start"
            href="https://github.com/Luis1Gonzalez"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visitar mi GitHub
          </a>
        </div>

        <div className="wrap__social download d-flex align-items-center my-2 border">
          <span className="w-25 text-center">
            <RiFolderDownloadFill />
          </span>
          <a
            href={cvLuisGonzalez}
            className="w-75 text-start"
            download={cvLuisGonzalez}
          >
            {t("menu.download")}
          </a>
        </div>




        <div className="wrap__social mail d-flex align-items-center border">
          <span className="w-25 text-center">
            <MdMarkEmailRead />
          </span>
          <a
            className="w-75 text-start"
            href="mailto:luis1gonzalez@hotmail.com"
          >
            Enviarme un Email
          </a>
        </div>



        <div className="wrap__social portfolio d-flex align-items-center my-2 border">
          <span className="w-25 text-center">
            <CgWebsite />
          </span>
          <a
            className="w-75 text-start"
            href="https://portafolio-luis1gonzalez.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visitar mi Portafolio
          </a>
        </div>















      </div>
    </div>
  );
};

export default MobileLink;
