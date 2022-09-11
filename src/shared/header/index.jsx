import "./style.css";
import foto from "./../../image/fotosf.png";

import React from "react";

const Header = () => {
  return (
    <div className="wrap__header bg-warning d-flex mb-3 flex-wrap w-100">
      
      <div className="letterhead d-flex">
        <div className="circle__foto col-5 col-md-4 d-flex justify-content-center align-items-center">
          <img src={foto} alt="mi foto" />
        </div>

        <div className="name col-7  col-md-8 d-flex flex-column align-items-start align-items-md-center justify-content-center">
            <p className="pName m-0">Luis A. González R.</p>
            <p className="pTitle m-0"> <span>&#60;</span> FrontEnd Developer   <span>/&#62;</span></p>
            
            </div>
      </div>

    </div>
  );
};

export default Header;
