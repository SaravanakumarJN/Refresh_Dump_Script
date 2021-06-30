const ReactData = require("./data/react/index");
const { dumpData } = require("../../helper_script");

const filter = { _id: "6061dbbc4fd74aa07ddd4de8" };
const update = { practice_questions: ReactData };

dumpData("Practice", filter, update);
