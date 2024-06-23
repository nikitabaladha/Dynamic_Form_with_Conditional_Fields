import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../CustomHook/survayFormCustomhook";

import validate from "../../Validators/validateSurveyForm";
import axios from "axios";
import AdditionalQuestions from "./AdditionalQuestions";
import FormSummary from "./FormSummary";

const SurveyForm = () => {
  const navigate = useNavigate();
  const initialState = {
    fullName: "",
    email: "",
    surveyTopic: "",
    technologySection: {
      favoriteLanguage: "",
      yearsExperience: "",
    },
    healthSection: {
      exerciseFrequency: "",
      dietPreference: "",
    },
    educationSection: {
      highestQualification: "",
      fieldOfStudy: "",
    },
    feedback: "",
    additionalAnswers: {},
  };

  const { values, errors, handleChange, handleSubmit, isSubmitting } = useForm(
    initialState,
    validate
  );

  const [additionalQuestions, setAdditionalQuestions] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchAdditionalQuestions = async () => {
      try {
        if (values.surveyTopic) {
          const response = await axios.get(
            `http://50.19.46.55:5000/questions/${values.surveyTopic}`
          );
          console.log("Fetched additional questions:", response.data);
          setAdditionalQuestions(response.data);
          values.additionalQuestions = response.data;
        }
      } catch (error) {
        console.error("Error fetching additional questions:", error);
      }
    };

    fetchAdditionalQuestions();
  }, [values.surveyTopic]);

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

  return (
    <div className="form-container">
      <button className="back-button" onClick={handleBackButtonClick}>
        Back
      </button>
      <div className="form-card">
        <h2 className="form-heading">Survey Form</h2>

        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
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
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="surveyTopic">Survey Topic:</label>
            <select
              id="surveyTopic"
              name="surveyTopic"
              value={values.surveyTopic}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
            </select>
            {errors.surveyTopic && (
              <p className="error">{errors.surveyTopic}</p>
            )}
          </div>
          {values.surveyTopic === "Technology" && (
            <div className="technology-section">
              <div className="form-group">
                <label htmlFor="favoriteLanguage">
                  Favorite Programming Language:
                </label>
                <select
                  id="favoriteLanguage"
                  name="technologySection.favoriteLanguage"
                  value={values.technologySection.favoriteLanguage}
                  onChange={handleChange}
                >
                  <option value="">Select...</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="C#">C#</option>
                </select>

                {errors.favoriteLanguage && (
                  <p className="error">{errors.favoriteLanguage}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="yearsExperience">Years of Experience:</label>
                <input
                  type="number"
                  id="yearsExperience"
                  name="technologySection.yearsExperience"
                  value={values.technologySection.yearsExperience}
                  onChange={handleChange}
                />

                {errors.yearsExperience && (
                  <p className="error">{errors.yearsExperience}</p>
                )}
              </div>
            </div>
          )}

          {values.surveyTopic === "Health" && (
            <div className="health-section">
              <div className="form-group">
                <label htmlFor="exerciseFrequency">Exercise Frequency:</label>
                <select
                  id="exerciseFrequency"
                  name="healthSection.exerciseFrequency"
                  value={values.healthSection.exerciseFrequency}
                  onChange={handleChange}
                >
                  <option value="">Select...</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Rarely">Rarely</option>
                </select>

                {errors.exerciseFrequency && (
                  <p className="error">{errors.exerciseFrequency}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="dietPreference">Diet Preference:</label>
                <select
                  id="dietPreference"
                  name="healthSection.dietPreference"
                  value={values.healthSection.dietPreference}
                  onChange={handleChange}
                >
                  <option value="">Select...</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                </select>

                {errors.dietPreference && (
                  <p className="error">{errors.dietPreference}</p>
                )}
              </div>
            </div>
          )}

          {values.surveyTopic === "Education" && (
            <div className="education-section">
              <div className="form-group">
                <label htmlFor="highestQualification">
                  Highest Qualification:
                </label>
                <select
                  id="highestQualification"
                  name="educationSection.highestQualification"
                  value={values.educationSection.highestQualification}
                  onChange={handleChange}
                >
                  <option value="">Select...</option>
                  <option value="High School">High School</option>
                  <option value="Bachelor's">Bachelor's</option>
                  <option value="Master's">Master's</option>
                  <option value="PhD">PhD</option>
                </select>

                {errors.educationSection?.highestQualification && (
                  <p className="error">
                    {errors.educationSection.highestQualification}
                  </p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="fieldOfStudy">Field of Study:</label>
                <input
                  type="text"
                  id="fieldOfStudy"
                  name="educationSection.fieldOfStudy"
                  value={values.educationSection.fieldOfStudy}
                  onChange={handleChange}
                />

                {errors.educationSection?.fieldOfStudy && (
                  <p className="error">
                    {errors.educationSection.fieldOfStudy}
                  </p>
                )}
              </div>
            </div>
          )}

          <AdditionalQuestions
            additionalQuestions={additionalQuestions}
            values={values}
            handleChange={handleChange}
            submitted={submitted}
            errors={errors}
          />

          <div className="form-group">
            <label htmlFor="feedback">Feedback:</label>
            <textarea
              id="feedback"
              name="feedback"
              value={values.feedback}
              onChange={handleChange}
            ></textarea>

            {errors.feedback && <p className="error">{errors.feedback}</p>}
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      </div>

      {submitted && Object.keys(errors).length === 0 && (
        <FormSummary
          values={values}
          additionalQuestions={additionalQuestions}
        />
      )}
    </div>
  );
};

export default SurveyForm;
