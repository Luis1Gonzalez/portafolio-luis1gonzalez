import "./style.css";
import { RiContactsBookFill } from "react-icons/ri";
import { MdMarkEmailRead } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { GrTwitter } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiFolderDownloadFill } from "react-icons/ri";

import React from "react";

const Menu = () => {
  return (
    <div className="menu__btn">
      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle" className="button d-flex justify-content-center align-items-center mx-3"><RiContactsBookFill /></label>

      <div className="nav">

<div className="wrap__social mail d-flex align-items-center">
  <span className="w-25 text-center"><MdMarkEmailRead /></span>
  <a className="w-75 text-start" href="mailto:luis1gonzalez@hotmail.com">luis1gonzalez@hotmail.com</a>
  </div>

<div className="wrap__social linkedin d-flex align-items-center">
<span className="w-25 text-center"><ImLinkedin /></span>
  <a className="w-75 text-start" href="www.linkedin.com/in/luis1gonzalez">www.linkedin.com</a>
  </div>

<div className="wrap__social twitter d-flex align-items-center">
  <span className="w-25 text-center"><GrTwitter /></span>
  <a className="w-75 text-start" href="#">Twitter</a>
  </div>

<div className="wrap__social cel d-flex align-items-center">
  <span className="w-25 text-center"><IoLogoWhatsapp /></span>
  <a className="w-75 text-start" href="https://wa.me/34645081201">Whatsapp</a>
  </div>

<div className="wrap__social cv d-flex align-items-center">
  <span className="w-25 text-center"><RiFolderDownloadFill /></span>
  <a className="w-75 text-start" href="#">Descarga mi CV</a>
  </div>


      </div>
    </div>
  );
};

export default Menu;
