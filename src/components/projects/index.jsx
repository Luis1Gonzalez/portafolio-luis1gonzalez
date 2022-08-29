import "./style.css";
import { useState } from "react";
import React from "react";

const Projects = (listProjects) => {
  return (
    <div className="wrap__project  col-12 mx-0 py-2 px-2">
      <div className="extract__title col-12 mx-1 d-flex align-items-center py-2">
        Mis Proyectos
      </div>

      <div className="wrap__cards px-4 py-2">
        {listProjects.listProjects.map((p) => (
          <div className="card my-2 p-2" key={p.idProject}>
            <p className="card__title text-center p-2">{p.title}</p>
            <p className="card__img rounded d-flex flex-wrap justify-content-center">
              <img className="gifWeatherApp w-75" src={p.picture} alt="imagen de la app"/>
            </p>
            <p className="card__description d-flex m-2">{p.description}</p>
            <p>{p.tecnologies}</p>
            <a className="linkHref my-2" href={p.url}>https://weather-1-app.netlify.app</a>
            <a className="linkHref my-2" href={p.github}>https://github.com/Luis1Gonzalez/weather-app.git</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
