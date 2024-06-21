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

  if (!values.phoneNumber.trim()) {
    errors.phoneNumber = "Phone Number is required";
  } else if (isNaN(values.phoneNumber)) {
    errors.phoneNumber = "Phone Number must be a valid number";
  }

  if (!values.applyingForPosition) {
    errors.applyingForPosition = "Please select a position";
  }

  if (
    values.applyingForPosition === "Developer" ||
    values.applyingForPosition === "Designer"
  ) {
    if (!values.relevantExperience.trim()) {
      errors.relevantExperience = "Relevant Experience is required";
    } else if (
      isNaN(values.relevantExperience) ||
      Number(values.relevantExperience) <= 0
    ) {
      errors.relevantExperience =
        "Relevant Experience must be a number greater than 0";
    }
  }

  if (values.applyingForPosition === "Designer") {
    if (!values.portfolioURL.trim()) {
      errors.portfolioURL = "Portfolio URL is required";
    } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.portfolioURL)) {
      errors.portfolioURL = "Portfolio URL is invalid";
    }
  }

  if (values.applyingForPosition === "Manager") {
    if (!values.managementExperience.trim()) {
      errors.managementExperience = "Management Experience is required";
    }
  }

  if (!values.preferredInterviewTime.trim()) {
    errors.preferredInterviewTime = "Preferred Interview Time is required";
  }

  const isAnySkillSelected = Object.values(values.additionalSkills).some(
    (isSelected) => isSelected
  );

  if (!isAnySkillSelected) {
    errors.additionalSkills = "At least one additional skill must be selected";
  }

  return errors;
};

export default validate;
