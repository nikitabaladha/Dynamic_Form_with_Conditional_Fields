// AdditionalQuestions.js
import React from "react";

const AdditionalQuestions = ({
  additionalQuestions,
  values,
  handleChange,
  submitted,
  errors,
}) => {
  return (
    <>
      {additionalQuestions.map((question) => (
        <div className="form-group" key={question.key}>
          <label htmlFor={question.key}>{question.question}</label>
          {question.type === "text" && (
            <input
              type="text"
              id={question.key}
              name={`additionalAnswers.${question.key}`}
              value={values.additionalAnswers[question.key] || ""}
              onChange={handleChange}
            />
          )}
          {question.type === "select" && (
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
          )}
          {errors?.[question.key] && (
            <p className="error">{question.errorMsg}</p>
          )}
        </div>
      ))}
    </>
  );
};

export default AdditionalQuestions;
