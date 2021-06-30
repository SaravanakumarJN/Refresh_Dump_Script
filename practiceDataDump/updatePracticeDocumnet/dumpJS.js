const JSdata = require("../data_dump/practiceData/js/index");
const { dumpData } = require("../data_dump/helper_script");

const filter = { _id: "605260bac9992fec733acc3f" };
const update = { practice_questions: JSdata };

dumpData("Practice", filter, update);
