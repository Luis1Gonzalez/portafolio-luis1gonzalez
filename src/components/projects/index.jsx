import './style.css'
import { useState } from 'react';
import React from 'react'



const Projects = (listProjects) => {


  return (
    <div className="wrap__project  col-12 mx-0 py-2 px-2">

<div className="extract__title col-12 mx-1 d-flex align-items-center py-2">
          Mis Proyectos
        </div>

        <div className="wrap__cards px-4 py-2">

{listProjects.listProjects.map((p) => (
  <div className="card" key={p.idProject}>
    <p className='bg-light'>{p.title}</p>
    <p>{p.description}</p>
    <p>{p.tecnologies}</p>
    <p>{p.url}</p>
    <p>{p.github}</p>
    <p>
      <img src={`require ${p.picture}`} />
      </p>
  </div>
))}


        </div>


    </div>



    
  )
}

export default Projects