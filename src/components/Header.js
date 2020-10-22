import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import burger from '../menu.svg'; 

export class SideBar extends React.Component{
    render(){
        return(<div>
            <div className="sidebar left">
               <Link to="/">
                <p className="home-p">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Home
                </p>
                </Link>
                <Link to="/resume">
                <p className="resume-p">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Resume
                </p>
                </Link>
                <Link to="/my-work">
                <p className="work-p" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    My Work
                </p>
                </Link>
                <Link to="/about-me">
                <p className="about-p">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    About me
                </p>
                </Link>
            </div>
            <div className="mobile-header">
                <div className="Menu-container">
                    <div className="button">
                    <button className="dropdown"> 
                        <img src={burger} alt="burger" className="burger-button"></img>
                    </button>
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