import React from 'react';
import './Skills.css';
import html from '../../html.svg';
import css from '../../css.svg';
import javascript from '../../javascript.svg';
import react from '../../react.svg';
import romania from '../../romania.svg';
import uk from '../../uk.svg';

export class Skills extends React.Component{
    render(){
        return(
            <div>
<h1 className="resume-title">Work <span className="resume-span">Skills</span></h1>
<div className="skills-page-container">
    
        <div className="skills-page-card">
            <div className="face face1">
                <div className="skills-page-content">
                    <img src={html} alt="" className=""/>
                    <h3>HTML</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="skills-page-content">
                    <p>HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and latest major version of HTML that is a World Wide Web Consortium (W3C) recommendation. </p>
                        
                </div>
            </div>
        </div>
        <div className="skills-page-card">
            <div className="face face1">
                <div className="skills-page-content">
                    <img src={css} alt="css"/>
                    <h3>CSS</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="skills-page-content">
                    <p>CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
                </div>
            </div>
        </div>
        <div className="skills-page-card">
            <div className="face face1">
                <div className="skills-page-content">
                    <img src={javascript} alt="javascript"/>
                    <h3>JAVASCRIPT</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="skills-page-content">
                    <p>JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.</p>
                </div>
            </div>
        </div>

        <div className="skills-page-card">
            <div className="face face1">
                <div className="skills-page-content">
                    <img src={react} alt="" className=""/>
                    <h3>REACT JS</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="skills-page-content">
                    <p>ReactJS is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.</p>
                        
                </div>
            </div>
        </div>
    </div>
    <h1 className="resume-title">Language <span className="resume-span">Skills</span></h1>
    <div className="skills-page-container">
    
        <div className="skills-page-card">
            <div className="face face1">
                <div className="skills-page-content">
                    <img src={romania} alt="" className=""/>
                    <h3>Roumanian</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="skills-page-content">
                    <p>NATIVE</p>
                        
                </div>
            </div>
        </div>
       
        <div className="skills-page-card">
            <div className="face face1">
                <div className="skills-page-content">
                    <img src={uk} alt="" className=""/>
                    <h3>English</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="skills-page-content">
                    <p>MDIUM LEVEL</p>
                        
                </div>
            </div>
        </div>
    </div>
            </div>
        )
    }
}