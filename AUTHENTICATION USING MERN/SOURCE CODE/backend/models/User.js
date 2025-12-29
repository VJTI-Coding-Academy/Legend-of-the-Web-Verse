const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  
  // New Fields
  dob:      { type: Date, required: true },
  gender:   { type: String, required: true }, // e.g., 'Male', 'Female', 'Other'
  country:  { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);