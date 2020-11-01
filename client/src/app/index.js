import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar } from "../components";
import {
  PatientInsert,
  PatientsList,
  PatientUpdate,
    PatientsInsertCsv,
  PatientsInfo,
} from "../pages";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/patients" exact component={PatientsInsertCsv} />
        <Route path="/patients/list" exact component={PatientsList} />
        <Route path="/patients/create" exact component={PatientInsert} />
        <Route path="/patients/update/:id" exact component={PatientUpdate} />
        <Route path="/patients/info/:id" exact component={PatientsInfo} />
      </Switch>
    </Router>
  );
};

export default App;
