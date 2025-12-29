const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// REGISTER
router.post('/register', async (req, res) => {
  try {
    // Check if user exists
    const existingUser = await User.findOne({ 
      $or: [{ email: req.body.email }, { username: req.body.username }] 
    });
    if (existingUser) return res.status(400).json("Username or Email already exists.");

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create User
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      dob: req.body.dob,
      gender: req.body.gender,
      country: req.body.country
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN (Accepts Email OR Username)
router.post('/login', async (req, res) => {
  try {
    // Find user by EITHER username OR email
    const user = await User.findOne({
      $or: [
        { username: req.body.identifier },
        { email: req.body.identifier }
      ]
    });

    if (!user) return res.status(404).json("User not found!");

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json("Wrong password!");

    // Create Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    
    // Send back token + user info (excluding password)
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, token });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;