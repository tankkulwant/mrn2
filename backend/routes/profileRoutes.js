// routes/profileRoutes.js

const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile'); // Import your Profile model

// Route to fetch all profiles
router.get('/profiles', async (req, res) => {
  try {
    const profiles = await Profile.find(); // Fetch all profiles from MongoDB
    res.json(profiles); // Send the profiles in JSON format
  } catch (error) {
    res.status(500).json({ error: 'Error fetching profiles' });
  }
});

module.exports = router;
