import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./styles.css";
import Home from "./Components/Home/Home.js";
import SurveyForm from "./Components/SurveyForm/SurveyForm.js";
import JobApplicationForm from "./Components/JobApplicationForm/JobApplicationForm.js";
import EventRegistrationForm from "./Components/EventRegistrationForm/EventRegistrationForm.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey-form" element={<SurveyForm />} />
        <Route path="/job-application-form" element={<JobApplicationForm />} />
        <Route
          path="/event-registration-form"
          element={<EventRegistrationForm />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
