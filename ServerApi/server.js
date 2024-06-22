const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

const questions = {
  Technology: [
    {
      question: "What is your preferred code editor?",
      type: "select",
      key: "preferredCodeEditor",
      options: [
        { label: "Please select option", value: "" },
        { label: "VS Code", value: "vscode" },
        { label: "Sublime Text", value: "sublime" },
        { label: "Atom", value: "atom" },
        { label: "IntelliJ IDEA", value: "intellij" },
        { label: "Eclipse", value: "eclipse" },
        { label: "Vim", value: "vim" },
        { label: "Other", value: "other" },
      ],
      placeholder: "Preferred Code Editor",
      required: true,
      errorMsg: "Please enter preferred code editor",
    },
    {
      question: "Which programming languages are you proficient in?",
      type: "select",
      key: "proficientLanguages",
      options: [
        { label: "Please select option", value: "" },
        { label: "JavaScript", value: "javascript" },
        { label: "Python", value: "python" },
        { label: "Java", value: "java" },
        { label: "C++", value: "cpp" },
        { label: "C#", value: "csharp" },
        { label: "Ruby", value: "ruby" },
        { label: "PHP", value: "php" },
        { label: "Go", value: "go" },
        { label: "Swift", value: "swift" },
        { label: "Kotlin", value: "kotlin" },
        { label: "Other", value: "other" },
      ],
      placeholder: "Programming Languages",
      regex: null,
      required: true,
      errorMsg: "Please select programming languages",
    },
    {
      question: "How do you stay updated with the latest technology trends?",
      type: "text",
      key: "stayUpdated",
      placeholder: "Technology Trends",
      regex: null,
      required: true,
      errorMsg: "Please enter technology trends",
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
        { label: "Other", value: "other" },
      ],
      placeholder: "Visit Frequency",
      regex: null,
      required: true,
      errorMsg: "Please select healthcare professional ",
    },
    {
      question: "What are your favorite physical activities?",
      type: "select",
      key: "favoriteActivities",
      options: [
        { label: "Please select option", value: "" },
        { label: "Running", value: "running" },
        { label: "Swimming", value: "swimming" },
        { label: "Cycling", value: "cycling" },
        { label: "Hiking", value: "hiking" },
        { label: "Yoga", value: "yoga" },
        { label: "Weightlifting", value: "weightlifting" },
        { label: "Dancing", value: "dancing" },
        { label: "Basketball", value: "basketball" },
        { label: "Tennis", value: "tennis" },
        { label: "Soccer", value: "soccer" },
        { label: "Other", value: "other" },
      ],
      placeholder: "Physical Activities",
      regex: null,
      required: true,
      errorMsg: "Please select a physical activity",
    },
    {
      question: "Do you follow any specific diet plan?",
      type: "select",
      key: "dietPlan",
      options: [
        { label: "Please select option", value: "" },
        { label: "None" },
        { label: "Keto" },
        { label: "Paleo" },
        { label: "Vegan" },
        { label: "Vegetarian" },
        { label: "Mediterranean" },
        { label: "Whole30" },
        { label: "Low-Carb" },
        { label: "Medium-Carb" },
        { label: "Gluten-Free" },
        { label: "DASH" },
        { label: "Other" },
      ],
      placeholder: "Select Diet Plan",
      required: true,
      errorMsg: "Please enter any specific diet plan",
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
      errorMsg: "Please select any learning style",
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
      errorMsg: "Please select a class preference",
    },
    {
      question: "What motivates you to pursue further education?",
      type: "text",
      key: "motivation",
      placeholder: "Motivation",
      regex: null,
      required: true,
      errorMsg: "Please select a Motivation",
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
