import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import HomeScreen from "./components/Home-screening.component";
import CreateRequest from "./components/request.component";
import Cl_pend_req from "./components/displayClientRequest.component";
function App() {
  return (
  
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={HomeScreen} />
       
        <Route path="/home" component={CreateExercise} />
        
        <Route path="/request" component={CreateRequest} />
        
        <Route path="/requests" component={Cl_pend_req} />
            
      </div>
    </Router>
  );
}

export default App;
