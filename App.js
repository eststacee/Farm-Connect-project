const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/connectDB');

// Load environment variables
dotenv.config();

const app = express();

// MongoDB connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  // Other options as needed
};

// MongoDB connection string
const uri = process.env.MONGODB_URI; // Your MongoDB connection string from environment variables

// Connect to MongoDB
mongoose.connect(uri, options)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((error) => {
    console.error('MongoDB Connection Error:', error);
  });

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/farmers', require('./routes/farmers'));
app.use('/api/buyers', require('./routes/buyers'));
app.use('/api/products', require('./routes/products'));

// Define a simple route to check server status
app.get('/', (req, res) => res.send('API is running...'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
