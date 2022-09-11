import './style.css'
import React from 'react'

import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { GrNode } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { BsWordpress } from "react-icons/bs";
import { AiOutlineEnter } from "react-icons/ai";

const Keyboard = () => {
  return (
    <div className="wrap__keyboard d-flex flex-wrap justify-content-center p-2">

<div className="united d-flex flex-wrap">
<div className="key d-flex khtml justify-content-center align-items-center"><ImHtmlFive /></div>
<div className="key d-flex kcss justify-content-center align-items-center"><SiCss3 /></div>
<div className="key d-flex kjs justify-content-center align-items-center"><SiJavascript /></div>
<div className="key d-flex kts justify-content-center align-items-center"><SiTypescript /></div>
<div className="key d-flex kmongo justify-content-center align-items-center"><SiMongodb /></div>
<div className="key d-flex kexpress justify-content-center align-items-center"><span className='circle__express d-flex justify-content-center align-items-center'><SiExpress /></span></div>
<div className="key d-flex kreact justify-content-center align-items-center"><SiReact /></div>
<div className="key d-flex knode justify-content-center align-items-center"><GrNode /></div>
<div className="key d-flex kphp justify-content-center align-items-center"><SiPhp /></div>
<div className="key  kjest d-flex justify-content-center align-items-center"><SiJest /></div>
<div className="key d-flex kwordpress justify-content-center align-items-center"><BsWordpress /></div>
</div>

<div className="separate d-flex flex-column justify-content-around">
<div className="key d-flex justify-content-center align-items-center">-</div>
<div className="key d-flex justify-content-center align-items-center">+</div>
<div className="key d-flex kenter justify-content-center align-items-center"><AiOutlineEnter /></div>
</div>

    </div>
  )
}

export default Keyboard