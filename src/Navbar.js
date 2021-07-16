import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { social } from './data'
import logo from './logo.svg'

const Navbar = () => {
const [showLinks, setShowLinks] = useState(false);

return <nav>
  <div className="nav-center">
    <div className="nav-header">
    <img src={logo} alt="logo" />
      <button className="nav-toggle" onClick={()=>setShowLinks(!showLinks)}>
        <FaBars />
      </button>
    </div>
    <div className={`${showLinks?"links-container show-container":"links-container"}`}>
      <ul className="links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Download Resume</a>
        </li>
      </ul>
    </div>
    <ul className="social-icons">
     {social.map((socialIcons)=>{
  const {id,url,icon} = socialIcons;  
  return <li key={id}>
    <a href={url} target="_blank">
      {icon}
    </a>
  </li>

     })}
    </ul>
  </div>
</nav>
}

export default Navbar
