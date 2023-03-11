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
      <h1>{t('mobileLink.link')}</h1>

      <h5 className="my-3">{t('mobileLink.wish')}</h5>

      <div className="wrap__socialx">


        <div className="wrap__socialx whatsappx d-none align-items-center my-3">
          <span className="w-25 text-center">
            <IoLogoWhatsapp className="wind" />
          </span>
          <a className="w-75 text-start" href="https://wa.me/34645081201">
            Enviarme un Whatsapp
          </a>
        </div>

        <div className="wrap__socialx whatsappx d-flex align-items-center my-3">
          <span className="w-25 text-center">
            <IoLogoWhatsapp className="wind" />
          </span>
          <a className="w-75 text-start" href="https://wa.me/34645081201">
          {t('mobileLink.whatsapp')}
          </a>
        </div>

        

        <div className="wrap__socialx downloadx d-flex align-items-center my-3">
          <span className="w-25 text-center">
            <RiFolderDownloadFill />
          </span>
          <a
            href={cvLuisGonzalez}
            className="w-75 text-start"
            download={cvLuisGonzalez}
          >
            {t('mobileLink.download')}
          </a>
        </div>

        <div className="wrap__socialx portfoliox d-flex align-items-center my-3">
          <span className="w-25 text-center">
            <CgWebsite />
          </span>
          <a
            className="w-75 text-start"
            href="https://portafolio-luis1gonzalez.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('mobileLink.portfolio')}
          </a>
        </div>

        <div className="wrap__socialx mailx d-flex align-items-center my-3">
          <span className="w-25 text-center">
            <MdMarkEmailRead />
          </span>
          <a
            className="w-75 text-start"
            href="mailto:luis1gonzalez@hotmail.com"
          >
            {t('mobileLink.mail')}
          </a>
        </div>

        <div className="wrap__socialx callx d-flex align-items-center my-3">
          <span className="w-25 text-center">
            <CgPhone />
          </span>
          <a className="w-75 text-start" href="tel:+34645081201">
          {t('mobileLink.call')}
          </a>
        </div>

        <div className="wrap__socialx linkedinx d-flex align-items-center my-3">
          <span className="w-25 text-center">
            <ImLinkedin />
          </span>
          <a
            className="w-75 text-start"
            href="https://www.linkedin.com/in/luis1gonzalez-web-developer-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('mobileLink.linkedin')}
          </a>
        </div>

        <div className="wrap__socialx githubx d-flex align-items-center my-3">
          <span className="w-25 text-center">
            <BsGithub />
          </span>
          <a
            className="w-75 text-start"
            href="https://github.com/Luis1Gonzalez"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('mobileLink.github')}
          </a>
        </div>


      </div>


    </div>
  );
};

export default MobileLink;
