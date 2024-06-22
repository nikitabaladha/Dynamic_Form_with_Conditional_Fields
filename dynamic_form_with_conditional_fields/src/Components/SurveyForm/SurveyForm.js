import React, { useEffect } from "react";
import useForm from "../../CustomHook/survayFormCustomhook";
import validate from "../../Validators/validateSurveyForm";
import axios from "axios";

const SurveyForm = () => {
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

  const [additionalQuestions, setAdditionalQuestions] = React.useState([]);
  const [submitted, setSubmitted] = React.useState(false);

  useEffect(() => {
    const fetchAdditionalQuestions = async () => {
      try {
        if (values.surveyTopic) {
          const response = await axios.get(
            `http://localhost:5000/questions/${values.surveyTopic}`
          );
          console.log("Fetched additional questions:", response.data);
          setAdditionalQuestions(response.data);
        }
      } catch (error) {
        console.error("Error fetching additional questions:", error);
      }
    };

    fetchAdditionalQuestions();
  }, [values.surveyTopic]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form values before submission:", values);
    console.log("Form errors before submission:", errors);
    handleSubmit(event);
    if (Object.keys(errors).length === 0) {
      setSubmitted(true);

      console.log("Form submitted successfully with values:", values);
    } else {
      setSubmitted(false);
      console.log("Form submission failed with errors:", errors);
    }
  };

  const renderAdditionalQuestions = () => {
    return additionalQuestions.map((question) => {
      const error = errors.additionalAnswers?.[question.key];
      switch (question.type) {
        case "text":
          return (
            <div className="form-group" key={question.key}>
              <label htmlFor={question.key}>{question.question}</label>
              <input
                type="text"
                id={question.key}
                name={`additionalAnswers.${question.key}`}
                value={values.additionalAnswers[question.key] || ""}
                onChange={handleChange}
              />
              {errors.additionalAnswers?.[question.key] && (
                <p className="error">
                  {errors.additionalAnswers[question.key]}
                </p>
              )}
            </div>
          );
        case "select":
          return (
            <div className="form-group" key={question.key}>
              <label htmlFor={question.key}>{question.question}</label>
              <select
                id={question.key}
                name={`additionalAnswers.${question.key}`}
                value={values.additionalAnswers[question.key] || ""}
                onChange={handleChange}
              >
                {question.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          );
        case "dropdown":
          return (
            <div className="form-group" key={question.key}>
              <label htmlFor={question.key}>{question.question}</label>
              <select
                id={question.key}
                name={`additionalAnswers.${question.key}`}
                value={values.additionalAnswers[question.key] || ""}
                onChange={handleChange}
              >
                {question.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.additionalAnswers?.[question.key] && (
                <p className="error">
                  {errors.additionalAnswers[question.key]}
                </p>
              )}
            </div>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="form-container">
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
                {errors.technologySection?.favoriteLanguage && (
                  <p className="error">
                    {errors.technologySection.favoriteLanguage}
                  </p>
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
                {errors.technologySection?.yearsExperience && (
                  <p className="error">
                    {errors.technologySection.yearsExperience}
                  </p>
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
                {errors.healthSection?.exerciseFrequency && (
                  <p className="error">
                    {errors.healthSection.exerciseFrequency}
                  </p>
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
                {errors.healthSection?.dietPreference && (
                  <p className="error">{errors.healthSection.dietPreference}</p>
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

          {renderAdditionalQuestions()}

          <div className="form-group">
            <label htmlFor="feedback">Feedback:</label>
            <textarea
              id="feedback"
              name="feedback"
              value={values.feedback}
              onChange={handleChange}
              required
            ></textarea>
            {errors.feedback && <p className="error">{errors.feedback}</p>}
          </div>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      </div>

      {submitted && Object.keys(errors).length === 0 && (
        <div className="form-summary">
          <h3 className="summary-heading">Form Summary:</h3>
          <p>
            <strong>Name:</strong> {values.fullName}
          </p>
          <p>
            <strong>Email:</strong> {values.email}
          </p>
          <p>
            <strong>Survey Topic:</strong> {values.surveyTopic}
          </p>
          {values.surveyTopic === "Technology" && (
            <div>
              <h4 className="survey-topic-heading">Technology Section</h4>
              <p>
                <strong>Favorite Programming Language:</strong>{" "}
                {values.technologySection.favoriteLanguage}
              </p>
              <p>
                <strong>Years of Experience:</strong>{" "}
                {values.technologySection.yearsExperience}
              </p>
            </div>
          )}
          {values.surveyTopic === "Health" && (
            <div>
              <h4 className="survey-topic-heading">Health Section</h4>
              <p>
                <strong>Exercise Frequency:</strong>{" "}
                {values.healthSection.exerciseFrequency}
              </p>
              <p>
                <strong>Diet Preference:</strong>{" "}
                {values.healthSection.dietPreference}
              </p>
            </div>
          )}
          {values.surveyTopic === "Education" && (
            <div>
              <h4 className="survey-topic-heading">Education Section</h4>
              <p>
                <strong>Highest Qualification:</strong>{" "}
                {values.educationSection.highestQualification}
              </p>
              <p>
                <strong>Field of Study:</strong>{" "}
                {values.educationSection.fieldOfStudy}
              </p>
            </div>
          )}
          {additionalQuestions.length > 0 && (
            <div>
              <h4 className="Additional-heading">Additional Answers</h4>
              {Object.keys(values.additionalAnswers).map((key) => (
                <p key={key}>
                  <strong>{key}:</strong> {values.additionalAnswers[key]}
                </p>
              ))}
            </div>
          )}
          <p>
            <strong>Feedback:</strong> {values.feedback}
          </p>
        </div>
      )}
    </div>
  );
};

export default SurveyForm;
