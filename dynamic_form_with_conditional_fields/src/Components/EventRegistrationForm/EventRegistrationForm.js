import React, { useState } from "react";
import useForm from "../../CustomHook/useForm.js";
import validate from "../../Validators/validate.js";
import "./styles.css";

const EventRegistrationForm = () => {
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

  const handleFormSubmit = (event) => {
    handleSubmit(event);
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <h2 className="heading">Event Registration Form</h2>
      <div className="form-card">
        <form onSubmit={handleFormSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              className={errors.name ? "input-error" : ""}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              name="age"
              value={values.age}
              onChange={handleChange}
              className={errors.age ? "input-error" : ""}
            />
            {errors.age && <p className="error">{errors.age}</p>}
          </div>
          <div className="form-group checkbox-group">
            <label>Are you attending with a guest?</label>
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="attendingWithGuest"
                checked={values.attendingWithGuest}
                onChange={handleChange}
              />
            </div>
          </div>
          {values.attendingWithGuest && (
            <div className="form-group">
              <label htmlFor="guestName">Guest Name:</label>
              <input
                type="text"
                name="guestName"
                value={values.guestName}
                onChange={handleChange}
                className={errors.guestName ? "input-error" : ""}
              />
              {errors.guestName && <p className="error">{errors.guestName}</p>}
            </div>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>

      {submitted && Object.keys(errors).length === 0 && (
        <div className="form-summary">
          <h3>Form Summary</h3>
          <p>Name: {values.name}</p>
          <p>Email: {values.email}</p>
          <p>Age: {values.age}</p>
          {values.attendingWithGuest && <p>Guest Name: {values.guestName}</p>}
        </div>
      )}
    </div>
  );
};

export default EventRegistrationForm;
