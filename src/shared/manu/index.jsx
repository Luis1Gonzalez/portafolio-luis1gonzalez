import "./style.css";
import { RiContactsBookFill } from "react-icons/ri";
import { MdMarkEmailRead } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { GrTwitter } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiFolderDownloadFill } from "react-icons/ri";
import cvLuisGonzalez from "../../image/cvLuisGonzalez.pdf"
import { useTranslation } from "react-i18next";

import React from "react";

const Menu = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <div className="menu__btn">
      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle" className="button d-flex justify-content-center align-items-center mx-3"><RiContactsBookFill /></label>

      <div className="nav py-2">

<div className="wrap__social mail d-flex align-items-center">
  <span className="w-25 text-center"><MdMarkEmailRead /></span>
  <a className="w-75 text-start" href="mailto:luis1gonzalez@hotmail.com">luis1gonzalez@hotmail.com</a>
  </div>

<div className="wrap__social linkedin d-flex align-items-center">
<span className="w-25 text-center"><ImLinkedin /></span>
  <a className="w-75 text-start" href="http://www.linkedin.com/in/luis1gonzalez" target="_blank" rel="noopener noreferrer">www.linkedin.com</a>
  </div>

<div className="wrap__social twitter d-flex align-items-center">
  <span className="w-25 text-center"><GrTwitter /></span>
  <a className="w-75 text-start" href="https://twitter.com/luisgonzalez246" target="_blank" rel="noopener noreferrer">@luisgonzalez246</a>
  </div>

<div className="wrap__social whatsapp d-flex align-items-center">
  <span className="w-25 text-center"><IoLogoWhatsapp className="wind" /></span>
  <a className="w-75 text-start" href="https://wa.me/34645081201">+34 645081201</a>
  </div>

<div className="wrap__social download d-flex align-items-center">
  <span className="w-25 text-center"><RiFolderDownloadFill /></span>
  <a href={cvLuisGonzalez} className="w-75 text-start" download={cvLuisGonzalez}>{t("menu.download")}</a>
  </div>


      </div>
    </div>
  );
};

export default Menu;
