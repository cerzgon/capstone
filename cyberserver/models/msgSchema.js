// volunteer signin page
const mongoose = require("mongoose");

const msgSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  hours: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  years: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  project: {
    type: String,
    required: true,
  },
  criminal: {
    type: String,
    required: true,
  },
  references: { 
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model("Message", msgSchema); 

module.exports = Message;