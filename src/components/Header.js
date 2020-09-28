import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export class SideBar extends React.Component{
    render(){
        return(
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
                    Work
                </p>
                </Link>
                <p className="about-p">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    About me
                </p>
            </div>
        )
    }
}