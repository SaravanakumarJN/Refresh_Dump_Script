let freeTimeLearning = require("./freeTimeLearning.json").questions;
let lyndiahallie = require("./lyndiahallie.json").questions;
let ydkjs = require("./ydkjs.json").questions;
const sanfoundry = require("./sanfoundry.json").questions;

function addSource(source, data) {
  return data.map((question) => {
    if (question.type === "MCQ") {
      return {
        ...question,
        source,
        options: question.options.filter(({ text }) => text != ""),
      };
    }
    return {
      ...question,
      source,
    };
  });
}

freeTimeLearning = addSource(
  "https://www.freetimelearning.com",
  freeTimeLearning
);
ydkjs = addSource("https://github.com/austintackaberry/ydkjs-exercises", ydkjs);
lyndiahallie = addSource(
  "https://github.com/lydiahallie/javascript-questions",
  lyndiahallie
);

module.exports = freeTimeLearning.concat(sanfoundry, ydkjs, lyndiahallie);
