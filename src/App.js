import React from 'react';
import './App.css';
import { SideBar } from './components/Header';
import { Homepage } from './pages/homepage/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ProjectsContent } from './pages/projects/Projects';
import { MyWork } from './pages/workpage/Workpage';
import { AboutMePage } from './pages/Aboutme/AboutMe';
import { Education } from './pages/education/Education';
import { Employement } from './pages/employement/Employement';
import { Skills } from './pages/skills/Skills';

function App() {
  return (<div>
  <Router>
    <SideBar />
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/projects">
        <ProjectsContent />
      </Route>
      <Route path="/my-work">
        <MyWork />
      </Route>
      <Route path="/about-me">
        <AboutMePage />
      </Route>
      <Route path="/education">
        <Education />
      </Route>
      <Route path="/employement">
        <Employement />
      </Route>
      <Route path="/skills">
        <Skills />
      </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
