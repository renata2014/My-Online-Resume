import React from 'react';
import './Resume.css';

export class ResumeContent extends React.Component{
    render(){
        return(
        <div>
            <h1 className="resume-title">My <span className="resume-span">Resume</span></h1>
            <div className="main-content">
                <div className="skills-container">
                    <h3 className="skills">WORK <span className="skills-span">SKILLS</span></h3>
                    <div className="skills-content">
                    <p>HTML</p>
                    <div className="pink"></div>
                    <p>CSS</p>
                    <div className="yellow"></div>
                    <p>Javascript</p>
                    <div className="green"></div>
                    <p>React JS</p>
                    <div className="blue"></div>
                    </div>
                </div>
                <div className="language-container">
                    <h3 className="skills">LANGUAGE <span className="skills-span">SKILLS</span></h3>
                    <div className="skills-content">
                    <p>Romanian</p>
                    <div className="pink"></div>
                    <p>English</p>
                    <div className="yellow"></div>
                    </div>
                </div></div>
                <div className="mainn-content">
                <div className="education-container">
                    <h3 className="skills">EDUCATION</h3>
                    <div className="skills-content">
                    <p>Babes Bolyai University of Cluj-Napoca<br></br>
                    FSPAC -  Comunication and PR (with licence degree)<br></br>
                    <span className="years-span">2017 - 2020</span></p>
                    <p>USAMV - Cluj-Napoca <br></br>
                       Engineering and Management in Tourism Industry (no licence degree)<br></br>
                       <span className="years-span">2011 - 2015</span><br></br></p>
                    </div>
                </div>
                <div className="workk-container">
                    <h3 className="skills">WORK</h3>
                    <div className="skills-content">
                    <p>Data Entry Specialist at Iron Mountain Company<br></br>
                    Cluj-Napoca<br></br>
                    <span className="years-span">From March 2016 - Present</span></p>

                    </div>
                </div>
            </div>
        </div>
        )
    }
}