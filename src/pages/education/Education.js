import React from 'react';
import './Education.css';

export class Education extends React.Component{
    render(){
        return(
            <div>
            <h1 className="resume-title"> <span className="resume-span">Education</span></h1>
            
                <div className="mainn-content">
                <div className="education-container">
                    <div className="skills-content">
                        <p>The Informal School of IT - Web Development(HTML, CSS, Javascript, ReactJS)<br></br>
                        <span className="years-span">2020</span></p>
                    <p>Babes Bolyai University of Cluj-Napoca<br></br>
                    FSPAC -  Comunication and PR (with licence degree)<br></br>
                    <span className="years-span">2017 - 2020</span></p>
                    <p>USAMV - Cluj-Napoca <br></br>
                       Engineering and Management in Tourism Industry (no licence degree)<br></br>
                       <span className="years-span">2011 - 2015</span><br></br></p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}