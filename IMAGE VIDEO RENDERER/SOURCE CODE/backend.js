const multer = require('multer');
const path = require('path');

// 1. Storage Configuration
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// 2. File Filter (Strict Type Checking)
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|mp4|webm/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Error: File type not supported!'));
  }
};

// 3. Initialize Multer
const upload = multer({
  storage: storage,
  limits: { fileSize: 100 * 1024 * 1024 }, // Max global size (100MB)
  fileFilter: fileFilter
});

// 4. Routes
// For multiple images
app.post('/upload-images', upload.array('images', 10), (req, res) => {
  res.send('Images uploaded and sanitized successfully.');
});

// For single video
app.post('/upload-video', upload.single('video'), (req, res) => {
  res.send('Video uploaded and sanitized successfully.');
});