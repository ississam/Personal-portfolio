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

        <p className="tawtxt"> FRONTEND</p>

        <div className="cadre row">
          <div className="col-md-10">
            <img class="image-taille mr-4" src={require('../../assets/html.png')} alt="HTML" />
            <img class="image-taille mr-4" src={require('../../assets/css.png')} alt="css" />
            <img class="image-taille mr-4" src={require('../../assets/react.png')} alt="react" />
            <img class="image-taille mr-4" src={require('../../assets/bootstrap.png')} alt="BOOTSTRAP" />
            <img class="image-taille mr-4" src={require('../../assets/javascript.png')} alt="javascript" />
            <img class="image-taille mr-4" src={require('../../assets/jquery.png')} alt="jquery" />
          </div>
        </div>

        <p className="tawtxt">BACKEND:</p>
        <div className="cadre row">

          <div className="col-md-10">

            <img class="image-taille mt-2 mr-4" src={require('../../assets/laravel.png')} alt="laravel" />
            <img class="image-taille image-taille" src={require('../../assets/php.png')} alt="php" />
            {/* <img class="image-taille image-taille" src = {require('../../assets/mysql.png') } alt = "mysql"/> */}
          </div>
        </div>

        <p className="tawtxt">Base de données</p>

        <div className="cadre row">
          <div className="col-md-10">
            {/* {/* <img class="image-taille" src = {require('../../assets/mysql.png') } alt = "Mysql"/> */}
            <img class="image-taille" src={require('../../assets/mysql.png')} alt="Mysql" />

          </div>
        </div>


        <p className="tawtxt"> SYSTEMES D'EXPLOITATION</p>
        <div className="cadre row">
          <div className="col-md-10">
            <img class="image-taille mr-4" src={require('../../assets/windows.png')} alt="windows server" />
            <img class="image-taille mr-4" src={require('../../assets/aix.png')} alt="unix" />
          </div>
        </div>


        <p className="tawtxt">AUTRES TECHNOLOGIES ET OUTILS</p>

<div className="cadre row">
  <div className="col-md-10">
    <img class="image-taille mr-4" src={require('../../assets/restapi.png')} alt="restapi" />
    <img class="image-taille mr-4" src={require('../../assets/scrum.png')} alt="scrum" />
    <img class="image-taille mr-4" src={require('../../assets/git.png')} alt="git" />
    <img class="image-taille mr-4" src={require('../../assets/trello.png')} alt="trello" />
    <img class="image-taille mr-4" src={require('../../assets/wordpress.png')} alt="Wordpress" />
  </div>
</div>

      </div>




      {/* <img src={windows}/> */}

    </div>
  );
};

export default competancesPage;
