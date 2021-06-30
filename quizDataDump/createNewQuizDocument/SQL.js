const sqlData = require("../../quizData/sql/index");
const { createNewTopicDocument } = require("../../helper_script");

createNewTopicDocument("Topic", "SQL", " ", sqlData);
