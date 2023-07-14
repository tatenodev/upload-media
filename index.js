const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer();

// ***** single *****
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    res.status(400).send('No file uploaded');
    return;
  }

  console.log('File details:');
  console.log('Field Name:', req.file.fieldname);
  console.log('Original Name:', req.file.originalname);
  console.log('Mime Type:', req.file.mimetype);
  console.log('Size:', req.file.size);

  res.send('File uploaded');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// ***** multiple *****
// app.post('/upload', upload.array('files', 5), (req, res) => {
//   if (!req.files || req.files.length === 0) {
//     res.status(400).send('No files uploaded');
//     return;
//   }

//   req.files.forEach(file => {
//     console.log('File details:');
//     console.log('Field Name:', file.fieldname);
//     console.log('Original Name:', file.originalname);
//     console.log('Mime Type:', file.mimetype);
//     console.log('Size:', file.size);
//     console.log('-------------------------');
//   });

//   res.send('Files uploaded');
// });
