const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const EventSchema = new mongoose.Schema({
  leadId: {
    type: ObjectId,
    required: true
  },
  sellerId: {
    type: ObjectId,
    required: true
  },
  assistandId: {
    type: ObjectId
  },
  date: {
    type: Date,
    required: true
  }
});

const Event = mongoose.model("event", EventSchema);

module.exports = { Event };
