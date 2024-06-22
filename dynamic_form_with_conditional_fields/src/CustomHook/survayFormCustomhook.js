import { useState, useEffect } from "react";

const useForm = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      console.log("Validation errors:", validationErrors);
      if (Object.keys(validationErrors).length === 0) {
        console.log("Submitting form with values:", values);
        setIsSubmitting(false);
      } else {
        console.log("Form has errors, cannot submit.");
        setIsSubmitting(false);
      }
    }
  }, [isSubmitting, values, validate, errors]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    const names = name.split(".");

    if (names.length === 2) {
      const [parent, child] = names;
      setValues((prevValues) => ({
        ...prevValues,
        [parent]: {
          ...prevValues[parent],
          [child]: value,
        },
      }));
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setIsSubmitting(true);
  };

  const resetForm = () => {
    setValues(initialState);
    setErrors({});
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    setValues,
    resetForm,
  };
};

export default useForm;
