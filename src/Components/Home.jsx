import React from 'react';
import './Home.css'


export default function Home (){

  var arraytools = [{name:"Javascript", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png"}, {name: "CSS3", img: "https://image.flaticon.com/icons/svg/888/888847.svg"},{name:"React", img: "https://image.flaticon.com/icons/svg/919/919851.svg"}, {name:"Github", img: "https://image.flaticon.com/icons/svg/733/733609.svg"}, {name:"JQuery", img: "https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/jquery-512.png"}, {name:"Redux", img: "https://redux.js.org/img/redux.svg"}, {name:"Express",img: "https://pngimage.net/wp-content/uploads/2018/05/express-js-png-5.png"}, {name:"NodeJS", img: "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg"},
  {name:"PostgreSQL", img: "https://cdn1.iconfinder.com/data/icons/soleicons-fill-vol-1/64/postgres_database_server_relational_dbms_sql-512.png"}, {name:"Sequelize", img: "https://cms-assets.tutsplus.com/uploads/users/1462/posts/27537/preview_image/sequelize.jpg"}, {name:"Postman",img: "https://media.glassdoor.com/sqll/1926052/postman-squarelogo-1522909460182.png"}, {name:"Webpack", img: "https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg"},{name:"Bootstrap",img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"}, {name:"Typescript", img: "https://cdn.worldvectorlogo.com/logos/typescript.svg"},{name:"Web Api", img: "https://accessusergroups.org/access-latino/wp-content/uploads/sites/3/2018/03/ApiRest.png"}]
return (

<div className="Homediv">

   <div className="margins">
     <div>
     <h1> Agustina Hoyos</h1>
     <h2> Web Developer</h2>
     </div>
     
     <img src= "https://media-exp1.licdn.com/dms/image/C5635AQEG-eHS_awS1w/profile-framedphoto-shrink_200_200/0?e=1594951200&v=beta&t=Th22HiYKsA_mG63ApdPny7mf-QkrtxCs04dnpjiTfMs" alt="avatar" width="90px"/>
   
   </div>


   <div className="tools">
    {arraytools.map(t => 
       <div className="eachtool"> 
          <figure class="ih-fade-right">
             <img src={t.img} width="100px" />
             <figcaption>
                 <p>{t.name}</p>
             </figcaption>
        </figure>
        
      </div>
      )}
     </div>

</div>

)
}
