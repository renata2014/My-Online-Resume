import React from 'react';
import './Workpage.css';

export class MyWork extends React.Component{
    render(){
        return(
            <div className="main-content">
                <h2 className="my-work-title">My <span className="span">Work</span></h2>
                <div className="work-container">
                <p>My final exam project from Web Development course:<br></br>
                <span className="links" onClick={()=>{
                window.open("https://github.com/angelcrisan/uranus","_blank")
            }}>https://github.com/angelcrisan/uranus</span>
                </p>
                <div className="purple"></div>
                <p>My online Resume:<br></br>
                <span className="links" onClick={()=>{
                window.open("https://github.com/renata2014/My-Online-Resume","_blank")
            }}>https://github.com/renata2014/My-Online-Resume</span>
                </p>
                <div className="violet"></div>
                <div className="nothing"></div>
                </div>
            </div>
        )
    }
}