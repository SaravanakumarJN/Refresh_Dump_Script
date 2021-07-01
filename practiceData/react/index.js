let sudheerj = require("./sudheerj.json").questions;
let javaTpoint = require("./javaTpoint.json").questions;
let mindmajix = require("./mindmajix.json").questions;

sudheerj = sudheerj.map((question) => {
  let obj = {
    statement: question.statement,
    answer: question.explanation,
    type: question.type,
    source: "https://github.com/sudheerj/reactjs-interview-questions",
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

mindmajix = mindmajix.map((question) => {
  let obj = {
    statement: question.statement,
    answer: question.explanation,
    type: question.type,
    source: "https://mindmajix.com/",
  };
  return { ...obj };
});

module.exports = sudheerj.concat(javaTpoint, mindmajix);
