import './style.css'
import foto from './../../image/fotosf.png'

import React from 'react'

const Header = () => {
  return (
    <div className='wrap__header d-flex flex-column border mb-3'>
<div className="header__options col-4 d-flex justify-content-start pt-3 ps-2">
    <div className="options d-flex align-items-center">
        <div className="option__theme"></div>
        <div className="option_lenguage d-flex align-items-center">English</div>
    </div>
</div>
<div className="header__links col-12 mt-3 d-flex align-items-end">
<div className="circle__foto col-4 d-flex justify-content-center align-items-center mx-1">
                <img src={foto} alt="mi foto" />
            </div>
    <div className="link__slice d-flex justify-content-around p-2 col-8">
        <div className="link ">Acerca de Mi</div>
        <div className="link mx-1">Proyectos</div>
        <div className="link">Contacto</div>

        <div className="link__hr my-2">
 <hr className='hrs my-1 w-100' />

 <hr className='hri my-0 w-75' />

    </div>
    </div>
    


</div>
    </div>
  )
}

export default Header