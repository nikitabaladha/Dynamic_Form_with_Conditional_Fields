import React from "react";

const FormSummary = ({ values, additionalQuestions }) => {
  return (
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
  );
};

export default FormSummary;
