import React, { useState, useEffect } from "react";
import useForm from "../../CustomHook/useForm.js";
import validate from "../../Validators/validateJobApplicationForm.js";
import "./styles.css";

const JobApplicationForm = () => {
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

  const { values, errors, handleChange, handleCheckboxChange, handleSubmit } =
    useForm(initialState, validate);

  const [showRelevantExperience, setShowRelevantExperience] = useState(false);
  const [showPortfolioURL, setShowPortfolioURL] = useState(false);
  const [showManagementExperience, setShowManagementExperience] =
    useState(false);

  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (event) => {
    handleSubmit(event);
    setSubmitted(true);
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
    <div className="form-container">
      <div className="form-card">
        <h2>Job Application Form</h2>
        <form onSubmit={handleFormSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              className={errors.fullName ? "input-error" : ""}
            />
            {errors.fullName && <p className="error">{errors.fullName}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              className={errors.phoneNumber ? "input-error" : ""}
            />
            {errors.phoneNumber && (
              <p className="error">{errors.phoneNumber}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="applyingForPosition">Applying for Position:</label>
            <select
              id="applyingForPosition"
              name="applyingForPosition"
              value={values.applyingForPosition}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </select>
            {errors.applyingForPosition && (
              <p className="error">{errors.applyingForPosition}</p>
            )}
          </div>
          {showRelevantExperience && (
            <div className="form-group">
              <label htmlFor="relevantExperience">
                Relevant Experience (years):
              </label>
              <input
                type="number"
                id="relevantExperience"
                name="relevantExperience"
                value={values.relevantExperience}
                onChange={handleChange}
                className={errors.relevantExperience ? "input-error" : ""}
              />
              {errors.relevantExperience && (
                <p className="error">{errors.relevantExperience}</p>
              )}
            </div>
          )}
          {showPortfolioURL && (
            <div className="form-group">
              <label htmlFor="portfolioURL">Portfolio URL:</label>
              <input
                type="text"
                id="portfolioURL"
                name="portfolioURL"
                value={values.portfolioURL}
                onChange={handleChange}
                className={errors.portfolioURL ? "input-error" : ""}
              />
              {errors.portfolioURL && (
                <p className="error">{errors.portfolioURL}</p>
              )}
            </div>
          )}
          {showManagementExperience && (
            <div className="form-group">
              <label htmlFor="managementExperience">
                Management Experience:
              </label>
              <textarea
                id="managementExperience"
                name="managementExperience"
                value={values.managementExperience}
                onChange={handleChange}
                className={errors.managementExperience ? "input-error" : ""}
              />
              {errors.managementExperience && (
                <p className="error">{errors.managementExperience}</p>
              )}
            </div>
          )}
          <div className="form-group">
            <label>Additional Skills:</label>
            <div className="checkbox-group">
              {Object.keys(values.additionalSkills).map((skill, index) => (
                <div key={index} className="checkbox-container">
                  <input
                    type="checkbox"
                    id={skill}
                    name={skill}
                    checked={values.additionalSkills[skill]}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={skill}>{skill}</label>
                </div>
              ))}
            </div>
            {errors.additionalSkills && (
              <p className="error">{errors.additionalSkills}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="preferredInterviewTime">
              Preferred Interview Time:
            </label>
            <input
              type="datetime-local"
              id="preferredInterviewTime"
              name="preferredInterviewTime"
              value={values.preferredInterviewTime}
              onChange={handleChange}
              className={errors.preferredInterviewTime ? "input-error" : ""}
            />
            {errors.preferredInterviewTime && (
              <p className="error">{errors.preferredInterviewTime}</p>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      {submitted && Object.keys(errors).length === 0 && (
        <div className="form-summary">
          <h3 className="summary-heading">Form Summary :</h3>
          <p>
            <strong>Full Name:</strong> {values.fullName}
          </p>
          <p>
            <strong>Email:</strong> {values.email}
          </p>
          <p>
            <strong>Phone Number:</strong> {values.phoneNumber}
          </p>
          <p>
            <strong>Applying for Position:</strong> {values.applyingForPosition}
          </p>
          {showRelevantExperience && (
            <p>
              <strong>Relevant Experience:</strong> {values.relevantExperience}{" "}
              years
            </p>
          )}
          {showPortfolioURL && (
            <p>
              <strong>Portfolio URL:</strong> {values.portfolioURL}
            </p>
          )}
          {showManagementExperience && (
            <p>
              <strong>Management Experience:</strong>{" "}
              {values.managementExperience}
            </p>
          )}
          <p>
            <strong>Additional Skills:</strong>{" "}
            {Object.keys(values.additionalSkills)
              .filter((skill) => values.additionalSkills[skill])
              .join(", ")}
          </p>
          <p>
            <strong>Preferred Interview Time:</strong>{" "}
            {new Date(values.preferredInterviewTime).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default JobApplicationForm;
