import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.title}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
    }

    return (
      <section id="resume">
     
    
      <div className="row skill">

        <div className="three columns header-col">
          <h1><span>Compétances:</span></h1>
        </div>

        <div className="nine columns main-col">

          <section id="four" className="skills">
            <div className="languages skills show-on-scroll">
            <i class="devicon-react-original-wordmark colored technology"></i>
            <i class="devicon-vuejs-plain-wordmark colored technology"></i>
            <i class="devicon-laravel-plain-wordmark colored technology"></i>  
            <i class="devicon-javascript-plain colored technology"></i>
            <i class="devicon-php-plain colored technology"></i>          
            <i class="devicon-html5-plain-wordmark colored technology"></i>
            <i class="devicon-css3-plain-wordmark colored technology"></i>
            <i class="devicon-bootstrap-plain-wordmark colored technology"></i>
   
            <i class="devicon-mysql-plain-wordmark colored technology"></i>
            {/* <i class="devicon-wordpress-plain-wordmark colored"></i> */}
            <i class="devicon-git-plain colored technology"></i>
            <i class="devicon-amazonwebservices-plain-wordmark colored technology"></i>
         



              {/* <i className="devicon-javascript-plain-wordmark colored technology"></i>
              <i className="devicon-postgresql-plain-wordmark colored technology"></i>
              <i className="devicon-webpack-plain-wordmark colored technology"></i>
              <i className="devicon-rails-plain-wordmark colored technology"></i>
              <i className="devicon-react-plain-wordmark colored technology"></i> */}
            </div>
          </section>
				</div>
			</div>
   </section>
    );
  }
}

export default Resume;
