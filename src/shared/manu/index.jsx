import "./style.css";

import React from "react";

const Menu = () => {
  return (
    <div className="menu__btn">
      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle" className="button"></label>

      <nav className="nav">

<a href="#">Sobre Mi</a>
<a href="#">Proyectos</a>
<a href="#">Contacto</a>


      </nav>
    </div>
  );
};

export default Menu;
