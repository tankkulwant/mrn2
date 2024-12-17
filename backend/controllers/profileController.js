const Profile = require('../models/Profile');
const User = require('../models/User');

// Create or update profile
exports.saveOrUpdateProfile = async (req, res) => {
  const {
    email, fullName, phoneNumber, jobTitle, companyName, website, linkedin, location,
    experience, startupName, industry, startupStage, fundingStage, teamSize, vision,
    degree, fieldOfStudy, institution, graduationYear, skills, interests, lookingFor, profilePicture,
  } = req.body;

  try {
    let profile = await Profile.findOne({ email });

    if (!profile) {
      // If the profile doesn't exist, create a new one
      profile = new Profile({
        email,
        fullName,
        phoneNumber,
        jobTitle,
        companyName,
        website,
        linkedin,
        location,
        experience,
        startupName,
        industry,
        startupStage,
        fundingStage,
        teamSize,
        vision,
        degree,
        fieldOfStudy,
        institution,
        graduationYear,
        skills,
        interests,
        lookingFor,
        profilePicture,
      });
      await profile.save();
      return res.status(201).json({ message: 'Profile created successfully', profile });
    }

    // If the profile exists, update it
    profile.fullName = fullName || profile.fullName;
    profile.phoneNumber = phoneNumber || profile.phoneNumber;
    profile.jobTitle = jobTitle || profile.jobTitle;
    profile.companyName = companyName || profile.companyName;
    profile.website = website || profile.website;
    profile.linkedin = linkedin || profile.linkedin;
    profile.location = location || profile.location;
    profile.experience = experience || profile.experience;
    profile.startupName = startupName || profile.startupName;
    profile.industry = industry || profile.industry;
    profile.startupStage = startupStage || profile.startupStage;
    profile.fundingStage = fundingStage || profile.fundingStage;
    profile.teamSize = teamSize || profile.teamSize;
    profile.vision = vision || profile.vision;
    profile.degree = degree || profile.degree;
    profile.fieldOfStudy = fieldOfStudy || profile.fieldOfStudy;
    profile.institution = institution || profile.institution;
    profile.graduationYear = graduationYear || profile.graduationYear;
    profile.skills = skills || profile.skills;
    profile.interests = interests || profile.interests;
    profile.lookingFor = lookingFor || profile.lookingFor;
    profile.profilePicture = profilePicture || profile.profilePicture;

    await profile.save();

    res.status(200).json({ message: 'Profile updated successfully', profile });
  } catch (error) {
    console.error('Error saving or updating profile:', error);
    res.status(500).json({ message: 'Error saving or updating profile', error });
  }
};

// Get a user's profile by email
exports.getProfile = async (req, res) => {
  const { email } = req.params;

  try {
    const profile = await Profile.findOne({ email });

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.status(200).json(profile);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ message: 'Error fetching profile', error });
  }
};

// Upload profile picture
exports.uploadProfilePicture = async (req, res) => {
  const { email } = req.body; // Get the email from the request body
  const filePath = req.file?.path;

  if (!filePath) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    const profile = await Profile.findOneAndUpdate(
      { email },
      { profilePicture: filePath },
      { new: true } // Return the updated profile
    );

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.status(200).json({ message: 'Profile picture uploaded successfully', profile });
  } catch (error) {
    console.error('Error uploading profile picture:', error);
    res.status(500).json({ message: 'Error uploading profile picture', error });
  }
};
