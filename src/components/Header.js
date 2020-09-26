import React from 'react';
import './Header.css';

export class SideBar extends React.Component{
    render(){
        return(
            <div className="sidebar">
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Home
                </a>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Resume
                </a>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Work
                </a>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    About me
                </a>
            </div>
        )
    }
}