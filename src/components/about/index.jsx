import "./style.css";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const About = () => {
  const [read, setRead] = useState("none");
  const [more, setMore] = useState("+");
  const [size, setSize] = useState(255);
  const [t, i18n] = useTranslation("global");

  
  return (
    <div
      className="col-12 mx-0 d-flex flex-column align-items-center py-2 px-2"
      style={{ height: `${size}` }}
    >
      <div className="wrap__about">
        <div className="extract__title col-12 mx-1 d-flex align-items-center py-2">
          <p className="m-0">{t("about.about")}</p>
        </div>
        <div className="extract__about px-4 py-2">
          <p>{t('about.extract')}</p>

          <div className="wrap__btn__leerMas d-flex justify-content-end mt-2">
            <button
              className="btn__leerMas p-1 d-flex justify-content-center align-items-center"><Link className="back" to = '/me'>+</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
