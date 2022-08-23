import "./style.css";
import foto from "./../../image/fotosf.png";

import React from "react";

const Header = () => {
  return (
    <div className="wrap__header d-flex flex-column border mb-3">

      <div className="header__options col-12 d-flex justify-content-end align-items-center pe-2">
        <div className="options d-flex align-items-center">
          <div className="option__theme"></div>
          <div className="option_lenguage d-flex align-items-center">
            English
          </div>
        </div>
      </div>
      
      <div className="letterhead d-flex">
        <div className="circle__foto col-5 d-flex justify-content-center align-items-center p-3 bg-warning">
          <img src={foto} alt="mi foto" />
        </div>
        
        <div className="name col-7 d-flex flex-column align-items-start justify-content-center">
            <h4>Luis A. González R.</h4>
            <h6> <spam>&#60;</spam> FrontEnd Developer   <spam>/&#62;</spam></h6>
            </div>
      </div>

    </div>
  );
};

export default Header;
