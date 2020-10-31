import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import burger from '../menu.svg'; 

export class SideBar extends React.Component{
    render(){
        return(<div>
            <div className="sidebar left">
               <Link to="/">
               <a href="#" className="hbtn hb-border-left-br hbor3 hpill"><i className="fa fa-undo" aria-hidden="true"></i>Homepage</a>
                </Link>
                <Link to="/projects">
                <a href="#" className="hbtn2 hb-border-left-br2 hbor3 hpill"><i className="fa fa-undo" aria-hidden="true"></i>Projects</a>
                </Link>
                <Link to="/skills">
                <a href="#" className="hbtn3 hb-border-left-br3 hbor3 hpill"><i className="fa fa-undo" aria-hidden="true"></i>Skills</a>
                </Link>
                <Link to="/about-me">
                <a href="#" className="hbtn4 hb-border-left-br4 hbor3 hpill"><i className="fa fa-undo" aria-hidden="true"></i>Hobbies</a>
                </Link>
                <Link to="/education">
                <a href="#" className="hbtn5 hb-border-left-br5 hbor3 hpill"><i className="fa fa-undo" aria-hidden="true"></i>Education</a>
                </Link>
                <Link to="/employement">
                <a href="#" className="hbtn6 hb-border-left-br6 hbor3 hpill"><i className="fa fa-undo" aria-hidden="true"></i>Employement</a>
                </Link>
                <Link to="/contact-me">
                <a href="#" className="hbtn7 hb-border-left-br7 hbor3 hpill"><i className="fa fa-undo" aria-hidden="true"></i>Contact</a>
                </Link>
            </div>


            <div className="mobile-header">
                <div className="Menu-container">
                    <div className="button">
                    <div className="dropdown"> 
                        <img src={burger} alt="burger" className="burger-button"></img>
                    </div>
                </div>
           <div className="Dropdown-content">
               <Link to="/">
                   <p>Home</p>
                </Link>
                <Link to="/resume">
                <p>Resume</p>
                </Link>
                <Link to="/my-work">
                    <p>My Work</p>
                </Link>
                <Link to="/about-me">
                    <p>About Me</p>
                </Link>
            </div>
            
            
            </div>
            </div>
            </div>
        )
    }
}