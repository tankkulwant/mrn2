const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true, 
    trim: true
  },
  fullName: { 
    type: String, 
    required: true, 
    trim: true 
  },
  phoneNumber: { 
    type: String, 
    required: true, 
    trim: true 
  },
  jobTitle: { 
    type: String, 
    required: true, 
    trim: true 
  },
  companyName: { 
    type: String, 
    trim: true 
  },
  website: { 
    type: String, 
    trim: true 
  },
  linkedin: { 
    type: String, 
    trim: true 
  },
  location: { 
    type: String, 
    required: true, 
    trim: true 
  },
  experience: { 
    type: String, 
    trim: true 
  },
  startupName: { 
    type: String, 
    trim: true 
  },
  industry: { 
    type: String, 
    trim: true 
  },
  startupStage: { 
    type: String, 
    trim: true 
  },
  fundingStage: { 
    type: String, 
    trim: true 
  },
  teamSize: { 
    type: String, 
    trim: true 
  },
  vision: { 
    type: String, 
    trim: true 
  },
  degree: { 
    type: String, 
    trim: true 
  },
  fieldOfStudy: { 
    type: String, 
    trim: true 
  },
  institution: { 
    type: String, 
    trim: true 
  },
  graduationYear: { 
    type: String, 
    trim: true 
  },
  skills: { 
    type: [String], // Array of strings for skills
    default: [] 
  },
  interests: { 
    type: [String], // Array of strings for interests
    default: [] 
  },
  lookingFor: { 
    type: String, 
    trim: true 
  },
  profilePicture: { 
    type: String, 
    trim: true 
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Profile', ProfileSchema);
