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
  status: {
    type: String
  },
  phoneNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});

const Lead = mongoose.model("lead", LeadSchema);

module.exports = { Lead };
