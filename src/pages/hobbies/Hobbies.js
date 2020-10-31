import React from 'react';
import './Hobbies.css';

export class AboutMePage extends React.Component{
    render(){
        return(
           
          <div className="mainnn-contentt">
               <h2 className="title-text">My <span className="title-span">Hobbies</span></h2>
               <h3 className="title-texth3">My <span className="title-spanh3">Drawings</span></h3>
               <h3 className="title-texth3">Some <span className="title-spanh3">Travel Photos</span></h3>
               <h3 className="title-texth3">Taking Long Walks in<span className="title-spanh3">My City</span></h3>
          </div>
        )
    }
}