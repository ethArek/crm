const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const CallSchema = new mongoose.Schema({
  assistantId: {
    type: ObjectId,
    required: true
  },
  resultId: {
    type: ObjectId,
    required: true
  },
  leadId: {
    type: ObjectId,
    required: true
  },
  dateStart: {
    type: Date,
    required: true
  },
  dateEnd: {
    type: Date,
    default: new Date()
  }
});

const Call = mongoose.model("matches", CallSchema);

module.exports = { Call };
