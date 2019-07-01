const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const LeadSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  statusId: {
    type: ObjectId,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  }
});

const Lead = mongoose.model("matches", LeadSchema);

module.exports = { Lead };
