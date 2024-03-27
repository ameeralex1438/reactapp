import React from 'react'
import './header.css'
import {Link} from 'react-router-dom';
import Logo from '../Images/th__1_-removebg-preview-removebg-preview-removebg-preview.png'

function Header() {
  return (
    <>
    <div className='header'>
      <a href="#"><img src={Logo} width={150} style={{marginTop:40,paddingLeft:20,}}/></a>
      
<ul>
  <li><Link to='/' className='link'><b>HOME</b></Link></li>
  <li><Link to='about' className='link'><b>ABOUT</b></Link></li>
  <li><Link to='SERVICES' className='link'><b>SERVICES</b></Link></li>
  <li><Link to='cases' className='link'><b>CASES</b></Link></li>
  <li><Link to='contact' className='link'><b>CONTACT</b></Link></li>
  <input class="search" type="text" placeholder="search"></input>
</ul>

    </div>
    </>
  )
}

export default Header