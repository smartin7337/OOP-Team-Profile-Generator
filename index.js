const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/manager");
let responses = [];

const questions = [
  {
    type: "list",
    name: "role",
    message: "Adding employee to Team",
    choices: ["manager", "intern", "engineer"],
  },
  {
    type: "input",
    name: "name",
    message: "What's the name?",
  },
  {
    type: "input",
    name: "employeeID",
    message: "What's the employee ID?",
  },
  {
    type: "input",
    name: "emailAddress",
    message: "What's the email address.",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter office number.",
    when: function (data) {
      return data["role"] == "manager";
    },
  },
  {
    type: "input",
    name: "GitHub",
    message: "Enter Engineer's GitHub.",
    when: function (data) {
      return data["role"] == "engineer";
    },
  },
  {
    type: "input",
    name: "school",
    message: "Enter school.",
    when: function (data) {
      return data["role"] == "intern";
    },
  },
  {
    type: "confirm",
    name: "askAgain",
    message: "Would you like to add another employee?",
    default: true,
  },
];
