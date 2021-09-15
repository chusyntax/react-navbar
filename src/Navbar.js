import React, { useState} from 'react';
import { FaBars } from 'react-icons/fa';
import { social } from './data';
import styles from './Navbar.module.css';


const Navbar = () => {
const [showLinks, setShowLinks] = useState(false);

return <nav>
  <div className={styles.nav_center}>
    <div className={styles.nav_header}>
      <h4 className={styles.logo}>CHUSYNTAX</h4> 
      <button className={styles.nav_toggle} onClick={()=>setShowLinks(!showLinks)}>
        <FaBars />
      </button>
    </div>
    <div className={`${showLinks ? `${styles.links_container && styles.show_container}`  : `${styles.links_container}` }`}>
      <ul className={styles.links}>
        <li>
          <a href="w">Home</a>
        </li>
        <li>
          <a href="w">Projects</a>
        </li>
        <li>
          <a href="w">Experience</a>
        </li>
        <li>
          <a href="w">Contact</a>
        </li>
        <li>
          <a href="w">Download Resume</a>
        </li>
      </ul>
    </div>
    <ul className={styles.social_icons}>
     {social.map((socialIcons)=>{
  const {id,url,icon} = socialIcons;  
  return <li key={id}>
    <a href={url} target="_blank" rel="noopener noreferrer" >
      {icon}
    </a>
  </li>

     })}
    </ul>
  </div>
</nav>
}

export default Navbar
