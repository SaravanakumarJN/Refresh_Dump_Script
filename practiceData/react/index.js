let sudheerjReact = require("./sudheerj.json").questions;

sudheerjReact = sudheerjReact.map((question) => {
  let obj = {
    statement: question.statement,
    answer: question.explanation,
    type: question.type,
    source: "https://github.com/sudheerj/reactjs-interview-questions",
  };
  return { ...obj };
});

module.exports = sudheerjReact;
