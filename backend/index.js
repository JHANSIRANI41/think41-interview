const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db');
const dataloading = require("./fileloading/userLoad")

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json()); // Parses incoming JSON

// Connect to MongoDB
connectDB();

// Sample Route
app.get('/', (req, res) => {
    res.send('🚀 Server is running & MongoDB connected');
});

// Start the Server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});