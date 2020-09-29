import React from 'react';
import './AboutMe.css';

export class AboutMePage extends React.Component{
    render(){
        return(
           
          <div className="mainnn-contentt">
               <h2 className="title-text">About <span className="title-span">Me</span></h2>
                <div className="first-content">
                    <div className="first-container">
                    <p>Birthday: <span>31 December 1991</span></p>
                    <p>City: <span>Cluj-Napoca</span></p>
                    <p>Phone: +40743 501 185</p>
                    </div>

                    <div className="second-container">
                    <p>Age: <span>29</span></p>
                    <p>Degree: <span>Licence</span></p>
                    <p>Mail: <span>x.rena_x@yahoo.com</span></p>
                    </div>
              </div>
              <div className="second-content">
                    <div className="hobbies-container">
                        <h4 className="hobbies-title">Hobbies</h4>
                            <p>Reading</p>
                            <div className="colorful-line"></div>
                            <p>Drawing</p>
                            <div className="second-line"></div>
                            <p>Traveling</p>
                            <div className="third-line"></div>
                            <p>Taking long walks</p>
                            <div className="fourth-line"></div>
                            <div className="nothing"></div>
                    </div>
              </div>
          </div>
        )
    }
}