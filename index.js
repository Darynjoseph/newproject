require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const userRoutes = require('./routes/user');

const app = express();

// Middleware
app.use(logger);
app.use(express.json());

// Static HTML
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => res.send('My Week 2 API!'));
app.use('/user', userRoutes);

// 404 error handling
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
