import './style.css'
import React, { useState } from 'react'

const Home = () => {

const [leer, setLeer] = useState('');




function changeLeer(){
  if(leer===''){
    setLeer('none')
 console.log(leer)
}else{
  setLeer('')
 console.log(leer)
}
}

  return (
    <div className='wrap__home col-12 mx-0 d-flex flex-column align-items-center py-2 px-2'>
    
    <div className="wrap__about">
    <div className="extract__title col-12 mx-1 d-flex align-items-center py-2">Sobre mi</div>
            <div className="extract__about px-4 py-2 border">
            <p>Hola! Mi nombre es Luis soy Ingeniero en Mantenimiento Industrial, soy un apasionado de la tecnología, poseo una mente inquieta y creativa, buscando reinventarme he descubierto mi gusto por la programación y ha despertado mi deseo de aprender y trabajar en este campo tan amplio y poderoso que tendrá un impacto determinante en el desarrollo de nuestra civilización.</p>
            
            <p style={{display:`${leer}`}}>Durante el último año he venido aprendiendo de manera autodidacta tecnologías y herramientas relacionadas específicamente con el desarrollo web, además recientemente participé en un Bootcamp donde he adquirido un cumulo nuevos conocimientos y habilidades que me han motivado a seguir creciendo en conocimientos y experiencia.</p>
            
            <p style={{display:`${leer}`}}>Actualmente tengo conocimientos de: HTML, CSS, JavaScript, REACT JS, BOOTSTRAP, SASS, GIT, GITHUB, SOURCETREE, Metodología BEM, he desarrollado algunos proyectos que presento a continuación.</p>
            
            <div className="wrap__btn__leerMas d-flex justify-content-end">
            <button className='btn btn__leerMas border' onClick={changeLeer}>Leer mas...</button>
            </div>

            </div>
            </div>


    {/* <div className='wrap__projects m-0'>Pojects</div> */}
    
    
    </div>
    
  )
}

export default Home