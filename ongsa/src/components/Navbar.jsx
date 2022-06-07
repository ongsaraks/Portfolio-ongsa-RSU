import React from 'react'
import { Link } from 'react-scroll'
import '../Style/Navbar.css'
export default function Navbar() {
return (
<header>
<div className="logo">
<h1>Portfolio</h1>
</div>
<ul>
<li> <Link activeClass="active" to="home" spy={true}
smooth={true} offset={-150} >Home</Link></li>
<li> <Link to="about" spy={true} smooth={true} offset={-90}
>About Me</Link></li>
</ul>
</header>
)
}