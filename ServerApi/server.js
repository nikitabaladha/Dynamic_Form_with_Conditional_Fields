const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

const questions = {
  Technology: [
    {
      question: "What is your preferred code editor?",
      type: "text",
      key: "preferredCodeEditor",
      placeholder: "Preferred Code Editor",
      regex: null,
      required: true,
    },
    {
      question: "Which programming languages are you proficient in?",
      type: "text",
      key: "proficientLanguages",
      placeholder: "Programming Languages",
      regex: null,
      required: true,
    },
    {
      question: "How do you stay updated with the latest technology trends?",
      type: "text",
      key: "stayUpdated",
      placeholder: "Technology Trends",
      regex: null,
      required: true,
    },
  ],
  Health: [
    {
      question: "How often do you visit a healthcare professional?",
      type: "select",
      key: "visitFrequency",
      options: [
        { label: "Please select option", value: "" },
        { label: "Weekly", value: "weekly" },
        { label: "Monthly", value: "monthly" },
        { label: "Yearly", value: "yearly" },
      ],
      placeholder: "Visit Frequency",
      regex: null,
      required: true,
    },
    {
      question: "What are your favorite physical activities?",
      type: "text",
      key: "favoriteActivities",
      placeholder: "Physical Activities",
      regex: null,
      required: true,
    },
    {
      question: "Do you follow any specific diet plan?",
      type: "dropdown",
      key: "dietPlan",
      options: [
        "None",
        "Keto",
        "Paleo",
        "Vegan",
        "Vegetarian",
        "Mediterranean",
        "Whole30",
        "Low-Carb",
        "Gluten-Free",
        "DASH",
        "Other",
      ],
      placeholder: "Select Diet Plan",
      required: true,
    },
  ],
  Education: [
    {
      question: "What is your learning style?",
      type: "select",
      key: "learningStyle",
      options: [
        { label: "Please select option", value: "" },
        { label: "Visual", value: "visual" },
        { label: "Auditory", value: "auditory" },
        { label: "Reading/Writing", value: "readingWriting" },
        { label: "Kinesthetic", value: "kinesthetic" },
      ],
      placeholder: "Learning Style",
      regex: null,
      required: true,
    },
    {
      question: "Do you prefer online or in-person classes?",
      type: "select",
      key: "classPreference",
      options: [
        { label: "Please select option", value: "" },
        { label: "Online", value: "online" },
        { label: "In-Person", value: "inPerson" },
      ],
      placeholder: "Class Preference",
      regex: null,
      required: true,
    },
    {
      question: "What motivates you to pursue further education?",
      type: "text",
      key: "motivation",
      placeholder: "Motivation",
      regex: null,
      required: true,
    },
  ],
};

app.get("/questions/:topic", (req, res) => {
  const topic = req.params.topic;
  const additionalQuestions = questions[topic];
  if (additionalQuestions) {
    res.json(additionalQuestions);
  } else {
    res.status(404).send("Topic not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
