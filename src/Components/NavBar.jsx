import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';


export default function NavBar (){
return (

<div className= "navnav">
<a class="btn btn-outline-light" href="/" role="button">Home</a>
<a class="btn btn-outline-light" href="about" role="button">About</a>
<a class="btn btn-outline-light" href="contact" role="button">Contact</a>
</div>

)
}
