const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const User = require('./models/User');
const Profile = require('./models/Profile');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Route to save user data
app.post('/register', async (req, res) => {
  const { uid, email, displayName, photoURL } = req.body;

  try {
    let user = await User.findOne({ uid });
    if (!user) {
      user = new User({ uid, email, displayName, photoURL });
      await user.save();
    }
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error saving user', error });
  }
});

// Route to save or update user profile
app.post('/profile', async (req, res) => {
  const {
    email, fullName, phoneNumber, jobTitle, companyName, website, linkedin, location,
    experience, startupName, industry, startupStage, fundingStage, teamSize, vision,
    degree, fieldOfStudy, institution, graduationYear, skills, interests, lookingFor,
  } = req.body;

  try {
    let profile = await Profile.findOne({ email });
    if (!profile) {
      profile = new Profile(req.body);
      await profile.save();
    } else {
      Object.assign(profile, req.body); // Update the existing profile
      await profile.save();
    }
    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Error saving profile', error });
  }
});

// Route to save user data
app.post('/register', async (req, res) => {
  const { uid, email, displayName, photoURL } = req.body;

  try {
    let user = await User.findOne({ uid });
    if (!user) {
      user = new User({ uid, email, displayName, photoURL });
      await user.save();
    }
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error saving user', error });
  }
});

// Use the profile routes
//app.use('/api', profileRoutes); // Your API endpoint for profiles will be: /api/profiles


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});