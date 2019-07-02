const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const CallSchema = new mongoose.Schema({
  assistantId: {
    type: ObjectId,
    required: true
  },
  resultId: {
    type: String
  },
  leadId: {
    type: ObjectId
  },
  date: {
    type: Date,
    default: new Date()
  }
});

const Call = mongoose.model("call", CallSchema);

module.exports = { Call };
