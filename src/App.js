import React, { Component } from 'react';
import './App.css';
import resume from './json/resume.json'
import Experience from './components/exp'
import Education from './components/education'
import Language from './components/languages'
import Project from './components/project'
import Proficiency from './components/proficiency'






class App extends Component {

  renderSkills(){
    let resultsArray =[];
    resume.skills.map((item,i) =>  {
    resultsArray.push(<Proficiency item={item} key={i}/>)
    })
    return resultsArray;
  }

  renderProjects(){
    let resultsArray =[];
    resume.projects.map((item,i) =>  {
    resultsArray.push(<Project item={item} key={i}/>)
    })
    return resultsArray;
  }
  renderExperiences(){
    let resultsArray =[];
    resume.experiences.map((item,i) =>  {
    resultsArray.push(<Experience item={item} key={i}/>)
    })
    return resultsArray;
  }

renderEducation(){
  let resultsArray =[];
  resume.education.map((item,i) =>  {
  resultsArray.push(<Education item={item} key={i}/>)
  })
  return resultsArray;
}
renderLanguage(){
  let resultsArray =[];
  resume.languages.map((item,i) =>  {
  resultsArray.push(<Language item={item} key={i}/>)
  })
  return resultsArray;
}
renderInterests(){
  let resultsArray =[];
  resume.interests.map((item,i) =>  {
  resultsArray.push(<li key={i}>{item}</li>)
  })
  return resultsArray;
}


  render() {
    return (
      <div className="wrapper">
      <div className="sidebar-wrapper">
          <div className="profile-container">
              <img className="profile" src={resume.image} alt="" />
              <h1 className="name">{resume.name}</h1>
              <h3 className="tagline">Full Stack Developer</h3>
          </div>

          <div className="contact-container container-block">
              <ul className="list-unstyled contact-list">
                  <li className="email"><i className="fa fa-envelope"></i><a href="mailto: yourname@email.com">{resume.email}</a></li>
                  <li className="phone"><i className="fa fa-phone"></i><a href={resume.phone}>{resume.phone}</a></li>
                  <li className="website"><i className="fa fa-globe"></i><a href={resume.website} target="_blank">portfoliosite.com</a></li>
                  <li className="linkedin"><i className="fa fa-linkedin"></i><a href="#" target="_blank">{resume.twitterURL}</a></li>
                  <li className="github"><i className="fa fa-github"></i><a href="#" target="_blank">{resume.twitterURL}</a></li>
                  <li className="twitter"><i className="fa fa-twitter"></i><a href={this.twitterURL} target="_blank">{resume.twitter}</a></li>
              </ul>
          </div>
          <div className="education-container container-block">
              <h2 className="container-block-title">Education</h2>
                {this.renderEducation()}
          </div>

          <div className="languages-container container-block">
              <h2 className="container-block-title">Languages</h2>
              <ul className="list-unstyled interests-list">
                    {this.renderLanguage()}
              </ul>
          </div>

          <div className="interests-container container-block">
              <h2 className="container-block-title">Interests</h2>
              <ul className="list-unstyled interests-list">
                {this.renderInterests()}
              </ul>
          </div>

      </div>

      <div className="main-wrapper">

          <section className="section summary-section">
              <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
              <div className="summary">
                  <p>Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can <a href="http://themes.3rdwavemedia.com/website-templates/orbit-free-resume-cv-template-for-developers/" target="_blank">download this free resume/CV template here</a>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>
              </div>
          </section>

          <section className="section experiences-section">
              <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>

                {this.renderExperiences()}

          </section>

          <section className="section projects-section">
              <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
              <div className="intro">
                  <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
              </div>
                {this.renderProjects()}
          </section>

          <section className="skills-section section">
              <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
              <div className="skillset">
                      {this.renderSkills()}
              </div>
          </section>

      </div>
  </div>
    );
  }
}

export default App;
