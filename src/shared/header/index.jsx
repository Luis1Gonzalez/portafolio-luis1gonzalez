import './style.css'

import React from 'react'

const Header = () => {
  return (
    <div className='wrap__header d-flex border'>
<div className="header__options col-4 d-flex justify-content-start pt-3 ps-2">
    <div className="options d-flex align-items-center">
        <div className="option__theme"></div>
        <div className="option_lenguage d-flex align-items-center">English</div>
    </div>
</div>
<div className="header__links col-8 mt-4">
    
    <div className="link__slice d-flex justify-content-around w-100 align-items-end m-0 pt-4">
        <div className="link">Acerca de Mi</div>
        <div className="link">Proyectos</div>
        <div className="link">Contacto</div>
    </div>
    
    <div className="link__hr my-2">
 <hr className='hrs my-1 w-100' />

 <hr className='hri my-0 w-75' />

    </div>

</div>
    </div>
  )
}

export default Header