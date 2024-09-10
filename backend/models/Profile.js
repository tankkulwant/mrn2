const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  email: { type: String, required: true },
  fullName: String,
  phoneNumber: String,
  jobTitle: String,
  companyName: String,
  website: String,
  linkedin: String,
  location: String,
  experience: String,
  startupName: String,
  industry: String,
  startupStage: String,
  fundingStage: String,
  teamSize: String,
  vision: String,
  degree: String,
  fieldOfStudy: String,
  institution: String,
  graduationYear: String,
  skills: String,
  interests: String,
  lookingFor: String,
});

module.exports = mongoose.model('Profile', ProfileSchema);
