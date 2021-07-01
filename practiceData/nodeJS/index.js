let gauthamjm007 = require("./gauthamjm007.json").questions;
let javaTpoint = require("./javaTpoint.json").questions;

gauthamjm007 = gauthamjm007.map((question) => {
  let obj = {
    statement: question.statement,
    answer: question.explanation,
    type: question.type,
    source:
      "https://github.com/Gauthamjm007/Backend-NodeJS-Golang-Interview_QA",
  };
  return { ...obj };
});

javaTpoint = javaTpoint.map((question) => {
  let obj = {
    statement: question.statement,
    answer: question.explanation,
    type: question.type,
    source: "https://www.javatpoint.com/",
  };
  return { ...obj };
});

module.exports = gauthamjm007.concat(javaTpoint);
