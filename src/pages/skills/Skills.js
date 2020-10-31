import React from 'react';
import './Skills.css';
import html from '../../html.svg';


export class Skills extends React.Component{
    render(){
        return(
            <div>

<div className="skills-page-container">
        <div className="skills-page-card">
            <div className="face face1">
                <div className="skills-page-content">
                    <img src={html} alt="" className=""/>
                    <h3>Design</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="skills-page-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Read More</a>
                </div>
            </div>
        </div>
        <div className="skills-page-card">
            <div className="face face1">
                <div className="skills-page-content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true"/>
                    <h3>Code</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="skills-page-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Read More</a>
                </div>
            </div>
        </div>
        <div className="skills-page-card">
            <div className="face face1">
                <div className="skills-page-content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true"/>
                    <h3>Launch</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="skills-page-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Read More</a>
                </div>
            </div>
        </div>
    </div>


            </div>
        )
    }
}