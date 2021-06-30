let sudheerjJS = require("./sudheerj.json").questions;

sudheerjJS = sudheerjJS.map((question) => {
  let obj = {
    statement: question.statement,
    answer: question.explanation,
    type: question.type,
    source: "https://github.com/sudheerj/javascript-interview-questions",
  };
  return { ...obj };
});

module.exports = sudheerjJS;
