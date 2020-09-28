import React from 'react';
import './App.css';
import { SideBar } from './components/Header';
import { Homepage } from './pages/homepage/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ResumeContent } from './pages/resume/Resume';
import { MyWork } from './pages/workpage/Workpage';

function App() {
  return (<div>
  <Router>
    <SideBar />
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/resume">
        <ResumeContent />
      </Route>
      <Route path="/my-work">
        <MyWork />
      </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
