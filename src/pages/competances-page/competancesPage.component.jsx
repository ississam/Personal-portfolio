import React from "react";

import CustomForm from "../../components/custom-form/custom-form.component";
import javascript from '../../assets/javascript.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import laravel from '../../assets/laravel.png';
import react from '../../assets/react.png';
import php from '../../assets/php.png';
import restapi from '../../assets/restapi.png';
import mysql from '../../assets/mysql.png';
import bootstrap from '../../assets/mysql.png';
import windows from '../../assets/windows.png';

import "../contact-page/contact-page.styles.scss";

const competancesPage = () => {
  return (
    <div >
      <h2 className="secondary-heading" id="contact">
          competances      
      </h2>
      {/* <div class="jumbotron"> */}
<div class="row w-100"></div>
      <div class="col-md-1">
            <div class="card border-danger cardstyle mx-sm-1 p-3  cardstyle cadre" >
                
            {/* <img src={javascript}/> */}
            {/* </div> */}
        </div>
</div>
     <img src={javascript}/>
     <img src={html}/>
     <img src={css}/>
     <img src={react}/>
     <img src={laravel}/>
     <img src={bootstrap}/>
     <img src={mysql}/>
     <img src={restapi}/>
     <img src={php}/>
     <img src={windows}/>

    </div>
  );
};

export default competancesPage;
