import React from 'react';
import './Home.css'


export default function Home (){
return (

<div className="Homediv">

   <div className="margins">
     <h1> Agustina Hoyos</h1>
     <h2> Web Developer</h2>
     <img src= "https://www.w3schools.com/howto/img_avatar2.png" alt="my image" width="90px"/>
   </div>

   <div className="margins">
     <h3>My most used Tools</h3>
   </div>

   <div className="tools">
      <p> JavaScript </p>
      <p> ReactJS </p>
      <p> CSS3 </p>
      <p> jQuery </p>
      <p> Redux </p>
      <p> NodeJS </p>
    </div>

</div>

)
}
