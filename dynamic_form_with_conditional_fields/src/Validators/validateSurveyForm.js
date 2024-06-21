const validate = (values) => {
  let errors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Full Name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.surveyTopic) {
    errors.surveyTopic = "Survey Topic is required";
  }

  if (values.surveyTopic === "Technology") {
    if (!values.technologySection.favoriteLanguage) {
      errors.favoriteLanguage = "Favorite Programming Language is required";
    }
    if (!values.technologySection.yearsExperience) {
      errors.yearsExperience = "Years of Experience is required";
    } else if (
      isNaN(values.technologySection.yearsExperience) ||
      Number(values.technologySection.yearsExperience) <= 0
    ) {
      errors.yearsExperience =
        "Years of Experience must be a valid number greater than 0";
    }
  }

  if (values.surveyTopic === "Health") {
    if (!values.healthSection.exerciseFrequency) {
      errors.exerciseFrequency = "Exercise Frequency is required";
    }
    if (!values.healthSection.dietPreference) {
      errors.dietPreference = "Diet Preference is required";
    }
  }

  if (values.surveyTopic === "Education") {
    if (!values.educationSection.highestQualification) {
      errors.highestQualification = "Highest Qualification is required";
    }
    if (!values.educationSection.fieldOfStudy) {
      errors.fieldOfStudy = "Field of Study is required";
    }
  }

  // if (!values.feedback || values.feedback.length < 50) {
  //   errors.feedback =
  //     "Feedback is required and must be at least 50 characters";
  // }

  return errors;
};

export default validate;
