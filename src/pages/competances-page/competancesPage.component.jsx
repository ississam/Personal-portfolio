import React from "react";

import CustomForm from "../../components/custom-form/custom-form.component";
// import javascript from '../../assets/javascript.png';
// import html from '../../assets/html.png';
// import css from '../../assets/css.png';
// import laravel from '../../assets/laravel.png';
// import react from '../../assets/react.png';
// import php from '../../assets/php.png';
// import restapi from '../../assets/restapi.png';
// import mysql from '../../assets/mysql.png';
// import bootstrap from '../../assets/mysql.png';
// import windows from '../../assets/windows.png';

import "./competancesPage.styles.scss";

const competancesPage = () => {
  return (
    <div >
      <h2 className="secondary-heading" id="contact">
          competances      
      </h2>


<div className="container">
<p className="tawtxt">BACKEND:</p>
  <div className="cadre row"> 
    <div className="col-md-10">
   <img class="image-taille mt-2 mr-4" src = {require('../../assets/laravel.png') } alt = "laravel" />
<img class="image-taille" src = {require('../../assets/php.png') } alt = "php"/>
    </div>
  </div>
<p className="tawtxt"> FRONTEND</p>
 
  <div className="cadre row">
    <div className="col-md-10">
    <img class="image-taille" src = {require('../../assets/javascript.png') } alt = "JAVASCRIPT"/>
    <img class="image-taille" src = {require('../../assets/html.png') } alt = "HTML"/>
<img class="image-taille" src = {require('../../assets/css.png') } alt = "css"/>
<img class="image-taille" src = {require('../../assets/react.png') } alt = "react"/>
<img class="image-taille" src = {require('../../assets/bootstrap.png') } alt = "BOOTSTRAP"/>
    </div>
  </div>

  <p className="tawtxt">  Services web
</p>
  <div className="cadre row"> 
    <div className="col-md-10">
    <img class="image-taille" src = {require('../../assets/restapi.png') } alt = "restapi"/>
    </div>
  </div>
<p className="tawtxt">  Services web</p>

  <div className="cadre row"> 
    <div className="col-md-10">
    <img class="image-taille" src = {require('../../assets/linux.png') } alt = "Linux"/>
    <img class="image-taille" src = {require('../../assets/windows.png') } alt = "Windows server"/>

    </div>
  </div>

  <p className="tawtxt">Tools</p>
  <div className="cadre row"> 
    <div className="col-md-10">
    Github,Trello

    </div>
  </div>




  </div>
  


    
     {/* <img src={windows}/> */}

    </div>
  );
};

export default competancesPage;
