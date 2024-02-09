import React , {useState} from 'react'
import Logo from '../assets/pizzaLogo.png';
import {Link} from 'react-router-dom';
// import '../Styles/NavbarA.css';
import "../styles/navbar_a.css"

function Navbar() {
  const [openLinks, SetOpenLinks] = useState(false)

  return (
    
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"}>
            <img src={Logo}/>
            <div className='hiddenLinks'>
        <Link to ="/"> Home</Link>
        <Link to ="/menu">Menu</Link>
        <Link to ="/about"> About</Link>
        <Link to ="/contact"> Contact</Link>
        </div>
        </div>
        <div className='rightSide'>
        <Link to ="/"> Home</Link>
        <Link to ="/menu">Menu</Link>
        <Link to ="/about"> About</Link>
        <Link to ="/contact"> Contact</Link>
        </div>
    </div>
 
  )

}

export default Navbar