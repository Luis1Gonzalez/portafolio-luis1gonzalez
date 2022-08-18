import './style.css'

import React from 'react'

const Header = () => {
  return (
    <div className='wrap__header d-flex'>
<div className="header__options col-4 d-flex justify-content-center align-items-center">
    <div className="options d-flex align-items-center">
        <div className="option__theme"></div>
        <div className="option_lenguage d-flex align-items-center">English</div>
    </div>
</div>
<div className="header__links col-8 bg-success">Link

</div>
    </div>
  )
}

export default Header