const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import Routes
const authRoutes = require('./routes/auth');
const employeeRoutes = require('./routes/employee');



// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error: ', err));

// Default Route
app.get('/', (req, res) => {
    const filePath = '/mern-project/frontend/src/App.jsx';
    res.sendFile(filePath);
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
