import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../CustomHook/useForm.js";
import validate from "../Validators/validateJobApplicationForm.js";
import JobApplicationForm from "../Components/JobApplicationForm/JobApplicationForm.js";

const JobApplicationContainer = () => {
  const navigate = useNavigate();

  const initialState = {
    fullName: "",
    email: "",
    phoneNumber: "",
    applyingForPosition: "",
    relevantExperience: "",
    portfolioURL: "",
    managementExperience: "",
    additionalSkills: {
      JavaScript: false,
      CSS: false,
      Python: false,
      HTML: false,
    },
    preferredInterviewTime: "",
  };

  const {
    isSubmitting,
    values,
    errors,
    handleChange,
    handleCheckboxChange,
    handleSubmit,
  } = useForm(initialState, validate);

  const [showRelevantExperience, setShowRelevantExperience] = useState(false);
  const [showPortfolioURL, setShowPortfolioURL] = useState(false);
  const [showManagementExperience, setShowManagementExperience] =
    useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const isFormValid = handleSubmit(event);
    if (isFormValid) {
      setSubmitted(true);
      console.log(errors, Object.keys(errors), isSubmitting);
      console.log("Form submitted successfully with values:", values);
      alert(
        "Form submitted successfully, scroll to bottom of page to see summary"
      );
    } else {
      setSubmitted(false);
      console.log("Form submission failed with errors:", errors);
    }
  };

  const handleBackButtonClick = () => {
    console.log("Back button clicked");
    navigate("/");
  };

  useEffect(() => {
    if (
      values.applyingForPosition === "Developer" ||
      values.applyingForPosition === "Designer"
    ) {
      setShowRelevantExperience(true);
    } else {
      setShowRelevantExperience(false);
    }

    if (values.applyingForPosition === "Designer") {
      setShowPortfolioURL(true);
    } else {
      setShowPortfolioURL(false);
    }

    if (values.applyingForPosition === "Manager") {
      setShowManagementExperience(true);
    } else {
      setShowManagementExperience(false);
    }
  }, [values.applyingForPosition]);

  return (
    <JobApplicationForm
      values={values}
      errors={errors}
      handleChange={handleChange}
      handleCheckboxChange={handleCheckboxChange}
      handleFormSubmit={handleFormSubmit}
      submitted={submitted}
      handleBackButtonClick={handleBackButtonClick}
      showRelevantExperience={showRelevantExperience}
      showPortfolioURL={showPortfolioURL}
      showManagementExperience={showManagementExperience}
    />
  );
};

export default JobApplicationContainer;
