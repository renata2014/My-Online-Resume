import React from 'react';
import './Homepage.css';
import photo from '../../mypic.jpg';
import facebook from '../../facebook.svg';
import instagram from '../../instagram.svg'
import linkedin from '../../linkedin.svg';
import { Link } from 'react-router-dom';
import { logDOM } from '@testing-library/react';

export class Homepage extends React.Component{
    render(){
        return(<div className="homepage-content">
            <div className="info-content">
            <h3> Hi, I'm Renata Pencea</h3>
            <h4>A Junior Web Developer.</h4>
            </div>
            <div className="dot-1"></div>
            <div className="dot-2"></div>
            <div className="dot-3"></div>
            <div className="dot-4"></div>
            <div className="dot-5"></div>
            <div className="dot-6"></div>
            <div className="dot-7"></div>
            <div className="dot-8"></div>
            <div className="facebook">
            <img src={facebook} alt="facebook" className="fb-logo" onClick={()=>{
                window.open("https://www.facebook.com/forna.renata","_blank")
            }}></img>
            </div>
            <div className="instagram">
            <img src={instagram} alt="insta" className="insta-logo" onClick={()=>{
                window.open("https://www.instagram.com/renatapencea/","_blank")
            }}></img>
            </div>
            <div className="linkedin">
            <img src={linkedin} alt="in" className="in-logo" onclick={()=>{
                window.open("www.linkedin.com/in/renata-pencea","_blank")
            }}></img>
            </div>
            <div className="box">          
                 <div className="imgBox">
                    <img src={photo} alt="me" className="My-Pic" />
                 </div>
            </div>
            </div>
            
        )
    }
}