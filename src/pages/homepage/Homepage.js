import React from 'react';
import './Homepage.css';
import photo from '../../photo.png';
import facebook from '../../facebook.svg';
import instagram from '../../instagram.svg'
import linkedin from '../../linkedin.svg';


export class Homepage extends React.Component{
    render(){
        return(
            <div className="homepage-card">
    <div className="homepage-image">
      <img src={photo} className="mypic" alt="mypic"/>
    </div>
    <div className="details">
      <div className="center">
        <h1>Hi, I'm Renata Pencea<br></br><span>A junior Web Developer</span></h1>
        <p>Welcome to my website!</p>
        <ul>
          <li><p ><i className="fa fa-facebook" aria-hidden="true"><img src={facebook} alt="facebook" className="fb-logo" onClick={()=>{
                window.open("https://www.facebook.com/forna.renata","_blank")
            }}></img></i></p></li>
          <li><p ><i className="fa fa-twitter" aria-hidden="true"></i></p></li>
          <li><p> <i className="fa fa-google-plus" aria-hidden="true"><img src={instagram} alt="insta" className="insta-logo" onClick={()=>{
                window.open("https://www.instagram.com/renatapencea/","_blank")
            }}></img></i></p></li>
          <li><p><i className="fa fa-linkedin" aria-hidden="true"></i></p></li>
          <li><p><i className="fa fa-instagram" aria-hidden="true"><img src={linkedin} alt="in" className="in-logo" onclick={()=>{
                window.open("www.linkedin.com/in/renata-pencea","_blank")
            }}></img></i></p></li>
        </ul>
      </div>
    </div>
  </div>


            
            
        )
    }
}