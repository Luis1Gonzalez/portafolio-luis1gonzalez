import "./style.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import useProjects from '../../data/pojects.hooks';
import { useTranslation } from "react-i18next";

const Projects = (listProjects) => {
  const miProjects = useProjects({});
  const navigate = useNavigate();
  const [t] = useTranslation("global");


const nuevo = miProjects[0];

  return (
    <div className="wrap__project  col-12 mx-0 py-2 px-2">
      <div className="project__title col-12 mx-1 d-flex align-items-center pb-2">
        <p className="m-0">{t("projects.projects")}</p>
      </div>

      <div className="wrap__cards px-4 py-2 d-flex flex-wrap justify-content-around">
        {nuevo.map((p, pos) => (
          <div className="card mx-1 my-2 px-4 py-2 px-md-2 col-12 col-sm-5 col-md-3" key={p.id}>
            <div className="card__img rounded d-flex flex-wrap justify-content-center" onClick={() =>navigate(`/project/${p.title}`)}>
              <img className="" src={p.picture} alt="imagen de la app"/>
              </div>

<div className=" wrap__git d-flex align-items-center justify-content-around">              
            <p className="linkHref my-2 fs-3">{p.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
