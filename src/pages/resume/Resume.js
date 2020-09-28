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
                </div>
                <div className="education-container">
                    <h3 className="skills">EDUCATION</h3>
                    <div className="skills-content">
                    <p>Romanian</p>
                    <div className="pink"></div>
                    <p>English</p>
                    <div className="yellow"></div>
                    </div>
                </div>
                <div className="work-container">
                    <h3 className="skills">WORK</h3>
                    <div className="skills-content">
                    <p>Romanian</p>
                    <div className="pink"></div>
                    <p>English</p>
                    <div className="yellow"></div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}