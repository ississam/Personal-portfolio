import React, { Component } from 'react';
// import resume from '../assets/resume.pdf'

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Alex Bangau Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>Apropos de moi</h2>

            <p>  15 ans d'expérience dans le domaine IT (réseaux systémes et production informatique), passionné par les nouvelles technologies, je suis quelqu’un qui s’implique très activement dans son travail, avec le sens de responsabilité et une capacité d'apprendre des nouvelles technologies, toujours prêt à relever de nouveaux défis et challenges.<br /><br />

            J'ai décidé de redresser ma carrière professionnelle et de revenire au développement qui est mon domaine à la base.</p>
            <div className="row">
               {/* <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                     <span>{name}</span><br />
                     <span>{street}<br />
                        {city} {state}, {zip}
                     </span><br />
                     <span>{phone}</span><br />
                     <span><a href={`mailto:${email}?subject=The%20subject%20of%20the%20mail`}>{email}</a></span>
                  </p>
               </div> */}
               <div className="columns download">
                  <p>
                    <a href="https://drive.google.com/file/d/1KEpHxtN0Mf81ZZ1mNbsL6uuMfvIgfDuM/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="button"><i className="fa fa-download"></i>Télécharger mon CV</a>
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default About;
