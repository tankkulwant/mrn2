const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const User = require('./models/User');

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
    // Check if user already exists
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
