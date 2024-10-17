const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer'); // Import multer for handling file uploads
const path = require('path');
const User = require('./models/User'); // Assuming you have a User model
const Profile = require('./models/Profile'); // Assuming you have a Profile model

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to save uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Create a unique filename
  },
});

const upload = multer({ storage });

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

// Image upload route
app.post('/upload-profile-picture', upload.single('profilePic'), async (req, res) => {
  console.log(req.method, req.url);
  try {
    
    const filePath = req.file.path; // Path to the uploaded file
    const email = req.body.email; // Get the email from the request body

    // You can save the file path to the user profile in the database here
    await Profile.findOneAndUpdate({ email }, { profilePicture: filePath }, { new: true });

    res.status(200).json({ message: 'Image uploaded successfully', filePath });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading image', error });
  }
});

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
