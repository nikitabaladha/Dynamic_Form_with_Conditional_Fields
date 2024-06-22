import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./styles.css";
import Home from "./Components/Home/Home.js";
import SurveyForm from "./Components/SurveyForm/SurveyForm.js";
import EventRegistrationContainer from "./Containers/EventRegistrationContainer.js";
import JobApplicationContainer from "./Containers/JobApplicationContainer.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey-form" element={<SurveyForm />} />
        <Route
          path="/event-registration-form"
          element={<EventRegistrationContainer />}
        />
        <Route
          path="/job-application-form"
          element={<JobApplicationContainer />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
