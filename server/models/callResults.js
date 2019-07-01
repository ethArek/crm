const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const CallResultsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const CallResults = mongoose.model("matches", CallResultsSchema);

module.exports = { Call };
