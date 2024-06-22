import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../CustomHook/useForm.js";
import validate from "../Validators/validateEventRegistrationForm.js";
import EventRegistrationForm from "../Components/EventRegistrationForm/EventRegistrationForm.js";

const EventRegistrationContainer = () => {
  const navigate = useNavigate();

  const initialState = {
    name: "",
    email: "",
    age: "",
    attendingWithGuest: false,
    guestName: "",
  };

  const { values, errors, handleChange, handleSubmit, isSubmitting } = useForm(
    initialState,
    validate
  );

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

  return (
    <EventRegistrationForm
      values={values}
      errors={errors}
      handleChange={handleChange}
      handleFormSubmit={handleFormSubmit}
      submitted={submitted}
      handleBackButtonClick={handleBackButtonClick}
    />
  );
};

export default EventRegistrationContainer;
