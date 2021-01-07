import React from 'react';
import Carousel from "../../components/Carousel";
import './Hobbies.css';


export class AboutMePage extends React.Component{
    render(){
        return(
           
          <div className="mainnn-contentt">
               <div>
               <h2 className="title-text">My <span className="title-span">Hobbies</span></h2>
     
  </div>
               <h3 className="title-texth3">My <span className="title-spanh3">Drawings</span></h3>
               <Carousel 
                    PhotoSrc1="https://www.linkpicture.com/q/123315433_1245444455829781_8697685483638967546_n.jpg"
                    PhotoSrc2="https://www.linkpicture.com/q/123364142_1554543151414291_8079478411326522501_n.jpg"
                    PhotoSrc3="https://www.linkpicture.com/q/123191336_784443885731490_7899108489426619321_n.jpg"
                    PhotoSrc4="https://www.linkpicture.com/q/123140430_364274658358661_2442177403878400047_n.jpg"
                    PhotoSrc5="https://www.linkpicture.com/q/123135470_712982029311468_8395029186303974247_n.jpg"
                    PhotoSrc6="https://www.linkpicture.com/q/123141571_854110528461313_7814110398487689958_n.jpg"
                    PhotoSrc7="https://www.linkpicture.com/q/123136470_365313128076691_688394645377449446_n.jpg"
                    PhotoSrc8="https://www.linkpicture.com/q/123210800_1351867271824470_7561442316029057461_n.jpg"
                    />
               <h3 className="title-texth3">Some <span className="title-spanh3">Travel Photos</span></h3>
               <Carousel 
                  PhotoSrc1="https://www.linkpicture.com/q/123142861_1040688756375674_8073785683435306275_n.png"
                  PhotoSrc2="https://www.linkpicture.com/q/123258730_1067783193659146_7178326516428683522_n.png"
                  PhotoSrc3="https://www.linkpicture.com/q/123299261_365263621580096_1972239855327278925_n.jpg"
                  PhotoSrc4="https://www.linkpicture.com/q/123243944_856713708403620_8633167813246414454_n.jpg"
                  PhotoSrc5="https://www.linkpicture.com/q/123207561_690382001879939_3019926726907842237_n.jpg"
                  PhotoSrc6="https://www.linkpicture.com/q/123145873_812448949297913_8435747944162122243_n.jpg"
                  PhotoSrc7="https://www.linkpicture.com/q/123146547_1603627443155822_7188058427487343478_n.jpg"
                  PhotoSrc8="https://www.linkpicture.com/q/123187021_838585926943792_6159406328428007697_n.jpg"
                  />
          </div>
        )
    }
}

