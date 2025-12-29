const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoute = require('./routes/auth');

// 1. CONFIG MUST BE HERE
dotenv.config(); 

const app = express();

// 2. LOG TO CHECK (Optional, remove in production)
// console.log("My Mongo URL is:", process.env.MONGO_URL); 

// 3. CONNECT
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ DB Connection Successful"))
  .catch((err) => {
      console.error("❌ DB Connection Error:", err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(5000, () => {
  console.log("Backend server is running on port 5000!");
});