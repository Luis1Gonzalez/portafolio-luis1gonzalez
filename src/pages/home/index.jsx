import './style.css'
import React, { useState } from 'react'
import { ImHtmlFive } from 'react-icons/im'
import { SiCss3 } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiBootstrap } from 'react-icons/si'
import { FaSass } from 'react-icons/fa'
import { DiGit } from 'react-icons/di'
import { BsGithub } from 'react-icons/bs'
import { FaSourcetree } from 'react-icons/fa'

const Home = () => {

const [read, setRead] = useState('none');
const [more, setMore] = useState('Leer Mas')




function changeLeer(){
  if(read===''){
    setRead('none')
    setMore('Leer Mas')
}else{
  setRead('')
  setMore('Leer Menos')
}
}

  return (
    <div className='wrap__home col-12 mx-0 d-flex flex-column align-items-center py-2 px-2'>
    
    <div className="wrap__about">
    <div className="extract__title col-12 mx-1 d-flex align-items-center py-2">Sobre mi</div>
            <div className="extract__about px-4 py-2">
            <p>Hola, soy Luis, un frontend developer residenciado en Zaragoza, España, de espíritu inquieto y creativo, apasionado por la tecnología en general pero sobre todo por la informática, desde el año 2021 he venido formándome para el desarrollo de aplicaciones webs de manera autodidacta y más recientemente he participado en un Full Stack Bootcamp, donde obtuve un gran cumulo de conocimientos que me han servido de motivación para plantearme proyectos que me han servirán para afianzar los conocimientos adquiridos.</p>
            
            <p style={{display:`${read}`}}>Mi objetivo es continuar sumando conocimientos y habilidades que me constituyan en un desarrollador Full Stack capaz de desarrollar aplicaciones de alto nivel y así aportar valor a nuestro mundo, dentro de las tecnologías y herramientas que manejo actualmente están:</p>
            
            <div className="wrap__icons" style={{display:`${read}`}}>

<div className="icons__tecnologies d-flex flex-column flex-sm-row flex-wrap justify-content-sm-around">

  <div className="tecnology d-flex align-items-center my-2 mx-2 py-1 col-sm-5 col-md-3">
    <ImHtmlFive className='icon col-3' />
    <div className="fw-bold">HTML5</div>
    </div>

  <div className="tecnology d-flex align-items-center my-2 mx-2 py-1 col-sm-5 col-md-3">
    <SiCss3 className='icon col-3' />
    <div className="fw-bold">CSS3</div>
    </div>

  <div className="tecnology d-flex align-items-center my-2 mx-2 py-1 col-sm-5 col-md-3">
    <SiJavascript className='icon col-3' />
    <div className="fw-bold">JavaScript</div>
    </div>

  <div className="tecnology d-flex align-items-center my-2 mx-2 py-1 col-sm-5 col-md-3">
    <SiReact className='icon col-3' />
    <div className="fw-bold">REACT JS</div>
    </div>

  <div className="tecnology d-flex align-items-center my-2 mx-2 py-1 col-sm-5 col-md-3">
    <SiBootstrap className='icon col-3' />
    <div className="fw-bold">BOOTSTRAP</div>
    </div>

  <div className="tecnology d-flex align-items-center my-2 mx-2 py-1 col-sm-5 col-md-3">
    <FaSass className='icon col-3' />
    <div className="fw-bold">SASS</div>
    </div>

  <div className="tecnology d-flex align-items-center my-2 mx-2 py-1 col-sm-5 col-md-3">
    <DiGit className='icon col-3' />
    <div className="fw-bold">GIT</div>
    </div>

  <div className="tecnology d-flex align-items-center my-2 mx-2 py-1 col-sm-5 col-md-3">
    <BsGithub className='icon col-3' />
    <div className="fw-bold">GITHUB</div>
    </div>

  <div className="tecnology d-flex align-items-center my-2 mx-2 py-1 col-sm-5 col-md-3">
    <FaSourcetree className='icon col-3' />
    <div className="fw-bold">SOURCETREE</div>
    </div>

  </div>  
  </div>

            <div className="wrap__btn__leerMas d-flex justify-content-end my-4">
            <button className='btn__leerMas p-1 rounded border' onClick={changeLeer}>{more}</button>
            </div>

            </div>
            </div>


    {/* <div className='wrap__projects m-0'>Pojects</div> */}
    
    
    </div>
    
  )
}

export default Home