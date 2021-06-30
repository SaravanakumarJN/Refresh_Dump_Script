const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/refresh", {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

const Topic = require("./model/Topic.model");
const Practice = require("./model/Practice.model");

async function dumpData(type, filter, update) {
  try {
    const doc = await eval(type).findOneAndUpdate(
      filter,
      update,
      {
        new: true,
      },
      (err, doc) => {
        if (err) return console.log(`Error ${err}`);
        console.log(doc);
        db.close();
      }
    );
  } catch (err) {
    console.log(`Error ${err}`);
  }
}

function createNewTopicDocument(type, topic_name, icon, questions) {
  let type_value = eval(type)
  const document = new type_value({
    name: topic_name,
    icon: icon,
    questions: [...questions],
  });
  document.save((err, document) => {
    if (err) {
      return console.error(err);
    }
    console.log(`Success ${topic_name}`);
    db.close();
  });
}

module.exports = { dumpData, createNewTopicDocument };
