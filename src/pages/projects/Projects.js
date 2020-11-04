import React from 'react';
import './Projects.css';



export class ProjectsContent extends React.Component{
    state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

    render(){
      
        return(
          
        <div>
            <h1 className="resume-title">My <span className="resume-span">Projects</span></h1>
            <h1 className="mobile-resume-title">My <span className="resume-span">Projects</span></h1>
             <div>
            <a href={require("../../Renata_Pencea_Resume.pdf")}npm download="Renata_Pencea_Resume.pdf">
                
                <button className="download-button"  target="_blank" >Download Resume</button>
                </a>
              </div> 

              <div className="projects-main">
   <div className="projects-section-content">
       <div className="projects-content-wrapper">          
           <div className="projects-box projects-box-1">
                <div className="projects-first">
                    <h2 className="projects-h">Web development course website</h2>
                </div>
                <div className="projects-second">
                  <p className="projects-para">This is our very first project called URANUS. Its a movie rating website where you can search movies, you can register and than edit, delete or add what movies you want.</p>
                   <p className="projects-para"><p  className="projects-a">For GitHub Repository click down below!<br></br><span className="links" onClick={()=>{
                window.open("https://github.com/angelcrisan/uranus","_blank")
            }}>https://github.com/angelcrisan/uranus</span></p></p>           
                </div>
            </div>
              <div className="projects-box projects-box-2">
                <div className="projects-first">
                   <h2 className="projects-h">My Online Resume Website</h2>
                </div>
               <div className="projects-second">
                  <p className="projects-para">This is my online resume website. Here you can find some interesting things about me. Enjoy!</p>
                   <p className="projects-para"><p href="#" className="projects-a">For GitHub Repository click down below!<br></br><span className="links" onClick={()=>{
                window.open("https://github.com/renata2014/My-Online-Resume","_blank")
            }}>https://github.com/renata2014/My-Online-Resume</span></p></p>
               </div>
           </div>
       </div>
   </div>
  </div>

            </div>
        )
    }
}