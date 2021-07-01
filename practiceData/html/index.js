let yangshun = require("./yangshun.json").questions;
let javaTpoint = require("./javaTpoint.json").questions;

yangshun = yangshun.map((question) => {
  let obj = {
    statement: question.statement,
    answer: question.explanation,
    type: question.type,
    source: "https://github.com/yangshun/front-end-interview-handbook",
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

module.exports = yangshun.concat(javaTpoint);
